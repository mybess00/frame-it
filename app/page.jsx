'use client'

import { createContext, useState, useRef } from 'react';
import NavBar from '../components/NavBar'
import ToolBox from '../components/ToolBox';
import MainTweet from '../components/MainTweet';
import TweetLayout from '../components/TweetLayout';
import Modal from '../components/Modal'

export const TweetProperties = createContext();

export default function Home() {

  const [bgContainer, setBgContainer] = useState('linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))');
  const [bgTweet, setBgTweet] = useState('#ffffff');
  const [bgTweetOpacity, setBgTweetOpacity] = useState('1');
  const [tweetPadding, setTweetPadding] = useState('2.50');
  const [tweetMargin, setTweetMargin] = useState('2.25');
  const [fontColor, setFontColor] =  useState('#000000');
  const [fontStyle, setFontStyle] = useState({bold: false, italic: false,})
  const [borderRadius, setBorderRadius] = useState('20');
  const [borderColor, setBorderColor] = useState('transparent');
  const [borderWidth, setBorderWidth] = useState('4');
  const [tweetWidth, setTweetWidth] = useState(1600);
  const [statsDisplay, setStatsDisplay] = useState('');
  const [imageOptions, setImageOptions] = useState({width: 'auto', height: '380px', visibility: true})
  const [textSize, setTextSize] = useState('42')


  const [userName, setUserName] = useState('Frame it!');
  const [userID, setUserID] = useState('frame_it_bot');
  const [userImg, setUserImg] = useState('https://pbs.twimg.com/profile_images/1623803061381603328/C5ayvrFM_normal.jpg');
  const [tweetText, setTweetText] = useState("Hi, I'm Frame it! 👋 a web app that will help you frame your tweets like an artist 🖌\n\nYou can customize down to the smallest detail:\n- Font size, color and style.\n- Background with solid colors and gradients.\n- Size and color of margins and borders.\n- Size and display of photos.\n\nYour imagination is the limit.");
  const [tweetDate, setTweetDate] = useState('Sun Feb 26 14:18:57 +0000 2023');
  const [tweetFav, setTweetFav] = useState('256');
  const [tweetRetweet, setTweetRetweet] = useState('128');
  const [tweetComment, setTweetComment] = useState('64');
  const [mediaTweet, setMediaTweet] = useState([]);

  const RAPID_API_KEY = process.env.RAPID_API_KEY
  const FRAME_API_KEY = process.env.FRAME_API_KEY

  const setContainerBackground = (value) => { setBgContainer(value) }
  const setTweetBackground = (value) => { setBgTweet(value) }
  const setTweetBackgroundOpacity = (value) => { setBgTweetOpacity(value) }
  const setTweetPaddingValue = (value) => { setTweetPadding(value) }
  const setTweetMarginValue = (value) => { setTweetMargin(value) }
  const setFontTweetColor = (value) => { setFontColor(value) }
  const setFontTweetStyle = (value) => { setFontStyle(value) }
  const setBorderTweetRadius = (value) => { setBorderRadius(value) }
  const setBorderTweetColor = (value) => { setBorderColor(value) }
  const setBorderTweetWidth = (value) => { setBorderWidth(value) }
  const setWidth = (value) => { setTweetWidth(value) }
  const setStatsVisibility = (value) => { setStatsDisplay(value) }
  const setImageTweetOptions = (value) => { setImageOptions(value) }
  const setGlobalTextSize = (value) => { setTextSize(value) }

  const loaderScreen = useRef(null);

  const forJson = {
    tweet: {
      name: userName,
      id: userID,
      img: userImg,
      text: tweetText,
      stats: {
        fav: tweetFav,
        retweet: tweetRetweet,
        comment: tweetComment,
      },
      date: tweetDate,
      media: mediaTweet,
    },
    theme: {
      tweetWidth,
      bgContainer,
      bgTweet,
      bgTweetOpacity,
      tweetMargin,
      tweetPadding,
      fontColor,
      fontStyle,
      textSize,
      borderRadius,
      borderWidth,
      borderColor,
      statsDisplay,
      imageOptions,
    }
  }

  const getTweetID = (url) => {
    const regex = /status\/(\d+)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  };

  const handleTweet = (id) => {
    try {
      return fetch('http://localhost:3000/twitter-info', {
        cache: 'default',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'rapid-api-key': RAPID_API_KEY,
        },
        body: JSON.stringify({
          "id": id
        })
      }).then(async response => {
        if(response.ok){
          const res = await response.json()
          console.log("Task done!")
          return res
        }
        console.log(false)
        return false
      })
    } catch (error) {
      console.log('Error: ' + error)
      return false
    }
  }

  const isTwitterLink = (str) => {
    let regex = /^https:\/\/(www\.|m\.)?twitter\.com\/.+/;
    return regex.test(str);
  }

  const printLink = async (link) => {
    if (isTwitterLink(link)){
      const id = getTweetID(link)
      loaderScreen.current.classList.remove('hidden');
      console.log("Getting tweet with ID:  " + id)
      const { tweet } = await handleTweet(id);
      if (tweet.data) {
        setUserName(tweet.data.user_name);
        setUserID(tweet.data.user_id);
        setTweetText(tweet.data.tweet);
        setTweetComment(tweet.data.comment);
        setTweetFav(tweet.data.fav);
        setTweetRetweet(tweet.data.retweet);
        setUserImg(tweet.data.user_image);
        setTweetDate(tweet.data.date);
        setMediaTweet(tweet.data.media);
        console.log(tweet.data);
      } else {
        alert('Ha ocurrido un error al intentar obtener el tweet.')
      }
      loaderScreen.current.classList.add('hidden');
    } else {
      alert('El enlace ingresado no es correcto');
    }
  }

  const handleDownload = async () => {
    console.log("Processing...")
    loaderScreen.current.classList.remove('hidden');
    fetch('http://localhost:3000/frame-tweet', {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify({ forJson }),
      headers: {
        'Content-Type': 'application/json',
        'frame-api-key': FRAME_API_KEY,
      }
    }).then(response => {
      console.log("Waiting for response")
      if (response.ok){
        console.log("Trying to download...")
        const dispositionHeader = response.headers.get('Content-Disposition');
        const match = dispositionHeader && dispositionHeader.match(/filename="(.+)"/);
        const fileName = match ? match[1] : 'image.jpg';
        
        return response.blob().then((blob) => {
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = fileName;

          downloadLink.click();

          URL.revokeObjectURL(downloadLink.href);
          console.log("Download Finish")
          loaderScreen.current.classList.add('hidden');
        })
      } else {
        loaderScreen.current.classList.add('hidden');
        return console.log(response)

      }
    })
  }

  
  return (
    <TweetProperties.Provider value={{bgContainer, bgTweet, bgTweetOpacity, tweetPadding, tweetMargin, fontColor, fontStyle, borderRadius, borderColor, borderWidth, tweetWidth, userName, userID, userImg, tweetText, tweetDate, tweetFav, tweetRetweet, tweetComment, mediaTweet, statsDisplay, imageOptions, textSize}}>
      <div className="App flex flex-row">
        <NavBar downloadAction={handleDownload} searchAction={printLink}/>
        <TweetLayout>
          <div className='body-tweet viewport cursor-grab active:cursor-grabbing duration-[50ms]' style={{
            backgroundImage: bgContainer, 
            padding: `${tweetMargin}rem`,
            width: `${tweetWidth}px`,
            }}>
              <MainTweet/>  
            </div>
        </TweetLayout>
        <div className='container-tools pt-20 px-6 right-0 w-2/5 h-screen overflow-y-auto overflow-x-clip shadow-lg shadow-bg-100'>
          <ToolBox change={{setContainerBackground, setTweetBackground, setTweetBackgroundOpacity, setTweetPaddingValue, setTweetMarginValue, setFontTweetColor, setFontTweetStyle, setBorderTweetRadius, setBorderTweetColor, setBorderTweetWidth, setWidth, setStatsVisibility, setImageTweetOptions, setGlobalTextSize}}/>
        </div>
      </div>
      <div className='fixed top-0 left-0 w-full h-full z-[9999] bg-[#00000054] hidden' ref={loaderScreen}>
        <span className='loader flex w-full h-full justify-center items-center'></span>  
      </div>
      <Modal props={forJson}/>
    </TweetProperties.Provider>
  )
}

