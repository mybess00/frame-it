'use client'

import { useRef, useState, useContext } from "react";
import { BiCloudDownload, BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { TweetProperties } from "./TweetContext";

export default function NavBar({ loader }){

  const { tweetWidth, bgContainer, bgTweet, bgTweetOpacity, tweetMargin, tweetPadding, fontColor, fontStyle, textSize, borderRadius, borderWidth, borderColor, statsDisplay, imageOptions, userName, setUserName, userID, setUserID, userImg, setUserImg, tweetText, setTweetText, tweetFav, setTweetFav, tweetRetweet, setTweetRetweet, tweetComment, setTweetComment, tweetDate, setTweetDate, mediaTweet, setMediaTweet } = useContext(TweetProperties)

  const searchBoxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const searchButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);

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

  const openBox = () => {
    searchBoxRef.current.classList.add('active')
    downloadButtonRef.current.classList.add('hidden');
    closeButtonRef.current.classList.remove('hidden')
  }
  const closeBox = () => {
    setLink('')
    searchBoxRef.current.classList.remove('active')
    downloadButtonRef.current.classList.remove('hidden');
    closeButtonRef.current.classList.add('hidden');
  }

  const [link, setLink] = useState('');

  const handleSubmit = () => {
    closeButtonRef.current.classList.length !== 0 ? openBox() : printLink(link);
  }

  const isTwitterLink = (str) => {
    let regex = /^https:\/\/(www\.|m\.)?twitter\.com\/.+/;
    return regex.test(str);
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
    return fetch('https://frame-it-app.vercel.app/twitter-info', {
      cache: 'default',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    .catch((err) => {
      loader.hideLoader()
      console.log('Error: ' + err)
      return false
    })
  }

  const handleDownload = async () => {
    console.log("Processing...")
    loader.showLoader()
    fetch('https://frame-it-app.vercel.app/frame-tweet', {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify({ forJson }),
      headers: {
        'Content-Type': 'application/json',
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
          loader.hideLoader()
        })
      } else {
        loader.hideLoader()
        return console.log(response)

      }
    })
  }

  const printLink = async (link) => {
    if (isTwitterLink(link)){
      const id = getTweetID(link)
      loader.showLoader()
      console.log("Getting tweet with ID:  " + id)
      const  { tweet }  = await handleTweet(id);
      console.log(tweet)
      try {
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
        loader.hideLoader()
      } catch (error) {
        loader.hideLoader()
        alert('Error: ' + error)
      }
    } else {
      alert('El enlace ingresado no es correcto');
    }
  }

  return (
    <div className="topBar absolute top-0 left-0 w-full h-16 py-5 px-4 flex justify-between items-center bg-[#021018] z-[999]">
        <a className="font-logo text-4xl" onClick={() => console.log(closeButtonRef.current.classList.length)}>Frame it!</a>
        <div className="relative flex justify-center items-center cursor-pointer z-10 gap-2">
          <div ref={downloadButtonRef}>
            <BiCloudDownload fontSize='2rem' onClick={handleDownload}/>
          </div>
          <div ref={closeButtonRef} className='hidden'>
            <AiOutlineClose onClick={closeBox} fontSize='2rem'/>
          </div>
          <div ref={searchButtonRef}>
            <BiSearch onClick={handleSubmit} fontSize='2rem'/>
          </div>
          <div>
          <label htmlFor="modal-tweet-mockup" className="btn hidden">open modal</label>
          </div>
        </div>
        <div className="absolute right-full w-full h-full flex items-center px-3 duration-200" ref={searchBoxRef}>
          <input type='text' value={link} onChange={(e) => setLink(e.target.value)} placeholder="Put yout tweet link kere..." className="w-full rounded-lg p-1 outline-none h-12 text-black" />
        </div>
      </div>
  )
}