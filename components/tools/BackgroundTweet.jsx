'use client'

import { useContext } from "react";
import { TweetProperties } from "../TweetContext";

export default function BackgroundTweet(){

  const { setBgTweet, setBgTweetOpacity, setStatsDisplay } = useContext(TweetProperties)

  const backgroundTweetInputColor = (e) => {
    setBgTweet(e.target.value)
  }
  const opacityTweetInputRange = (e) => {
    setBgTweetOpacity(e.target.value/100)
  }
  const statsDisplay = (e) => {
    setStatsDisplay(e.target.checked ? 'hidden' : '');
  }

  return (
    <div className="mt-7">
      <h2 className="text-center">Background Tweet</h2>
      <div className="dualInputContainer my-3">
        <label for='backgroundTweet' className="cursor-pointer">Background Color</label>
        <input className="w-6 h-6 rounded-md shadow-lg" type='color' onChange={backgroundTweetInputColor} defaultValue='#ffffff'/>
      </div>
      <div className="dualInputContainer my-3 items-center justify-around">
        <label className="flex-1">Background Opacity</label>
        <input type='range' className="range range-primary flex-1" min='0' max='100' defaultValue='75' onChange={opacityTweetInputRange}/>
      </div>
      <div className="dualInputContainer my-3">
        <label for='display-stats' className="cursor-pointer">Hide stats</label>
        <input className="checkbox checkbox-primary" type='checkbox' id='display-stats' onChange={statsDisplay}/>
      </div>
    </div>
  );
}