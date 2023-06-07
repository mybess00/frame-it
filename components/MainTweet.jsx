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

  return (
    <div className='flex flex-col flex-nowrap gap-2 border-solid'
      style={{
        backgroundColor: `rgba(${hexToRgb(bgTweet)}, ${bgTweetOpacity})`, 
        padding: `${tweetPadding}rem`,
        borderRadius: `${borderRadius}px`,
        borderColor: borderColor,
        borderWidth: `${borderWidth}px`,
        fontSize: `${textSize-10}px`,
        }}>
        <Profile userName={userName} userID={userID} profileImage={userImg} fontColor={fontColor} fontStyle={fontStyle}/>
        <TextBody text={tweetText} fontColor={fontColor} fontStyle={fontStyle}/>
        <ImageBody img={mediaTweet} options={imageOptions}/>
        <BottomBar favCount={tweetFav} rtCount={tweetRetweet} commentCount={tweetComment} date={tweetDate} statsVisibility={statsDisplay} fontColor={fontColor} fontStyle={fontStyle}/>
      </div>
  );
}