'use client'

import React, { useContext } from 'react';
import Profile from './tweet/Profile';
import TextBody from './tweet/TextBody';
import BottomBar from './tweet/BottomBar';
import ImageBody from './tweet/ImageBody';
import { TweetProperties } from './TweetContext';
import { hexToRgb } from './options/tweet-options'


export default function MainTweet(){
  const {bgTweet, bgTweetOpacity, tweetPadding, fontColor, fontStyle, borderRadius, borderColor, borderWidth, statsDisplay, imageOptions, textSize, userName, userID, userImg, tweetText, mediaTweet, tweetFav, tweetRetweet, tweetComment, tweetDate} = useContext(TweetProperties);
  const pElements = Object.values([].slice.call(document.getElementsByTagName('p')));

  return (
    <div className='flex flex-col flex-nowrap gap-2 border-solid'
      style={{
        backgroundColor: `rgba(${hexToRgb(bgTweet)}, ${bgTweetOpacity})`, 
        padding: `${tweetPadding}rem`,
        borderRadius: `${borderRadius}px`,
        borderColor: borderColor,
        borderWidth: `${borderWidth}px`,
        fontSize: `${textSize-10}px`
        }}>
        <Profile userName={userName} userID={userID} profileImage={userImg}/>
        <TextBody text={tweetText}/>
        {pElements.forEach(element => {
          const elementStyle = element.style;
          elementStyle.color = fontColor;
          elementStyle.fontStyle = fontStyle.italic ? 'italic' : '';
          elementStyle.fontWeight = fontStyle.bold ? 'bold' : '400';
        })}
        <ImageBody img={mediaTweet} options={imageOptions}/>
        <BottomBar favCount={tweetFav} rtCount={tweetRetweet} commentCount={tweetComment} date={tweetDate} statsVisibility={statsDisplay}/>
      </div>
  );
}