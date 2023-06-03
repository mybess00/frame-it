'use client'

import { createContext, useState } from "react";

export const TweetProperties = createContext();

export default function TweetContext({ children }) {
    
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
 
    return (
        <TweetProperties.Provider value={{bgContainer, setBgContainer, bgTweet, setBgTweet, bgTweetOpacity, setBgTweetOpacity, tweetPadding, setTweetPadding, tweetMargin, setTweetMargin, fontColor, setFontColor, fontStyle, setFontStyle, borderRadius, setBorderRadius, borderColor, setBorderColor, borderWidth, setBorderWidth, tweetWidth, setTweetWidth, statsDisplay, setStatsDisplay, imageOptions, setImageOptions, textSize, setTextSize, userName, setUserName, userID, setUserID, userImg, setUserImg, tweetText, setTweetText, tweetDate, setTweetDate, tweetFav, setTweetFav, tweetRetweet, setTweetRetweet, tweetComment, setTweetComment, mediaTweet, setMediaTweet}}>
            {children}
        </TweetProperties.Provider>
    )
}