'use client'

import { useState, useEffect, useRef, useContext} from "react";
import { TweetProperties } from "../TweetContext";

export default function Spacing (){

  const { setTweetPadding, setTweetMargin, setBorderRadius, setBorderColor, setBorderWidth } = useContext(TweetProperties)

  const borderColorRef = useRef(null);
  const borderWidthRef = useRef(null);

  const paddingTweetInputRange = (e) => {
    setTweetPadding(e.target.value)
  }
  const marginTweetInputRange = (e) => {
    setTweetMargin(e.target.value)
  }
  const borderRadiusTweet = (e) => {
    setBorderRadius(e.target.value)
  }
  const borderColorTweet = (e) => {
    setBorderColor(borderColorRef.current.value)
  }
  const borderWidthTweet = (e) => {
    setBorderWidth(borderWidthRef.current.value)
  }

  const [borderStatus, setBorderStatus] = useState(true)
  const statusBorder = () => {
    setBorderStatus(!borderStatus);
  }
  useEffect(() => {
    borderWidthRef.current.disabled = borderStatus;
    borderColorRef.current.disabled = borderStatus;
    if (borderStatus){
      setBorderColor('transparent');
      setBorderWidth('0');
    } else {
      borderColorTweet();
      borderWidthTweet();
    }
  })

  return (
    <div className="mt-7">
      <div>
        <h2 className="text-center">Margins</h2>
        <div className="dualInputContainer my-3 items-center justify-around">
          <label className="flex-1">Tweet Margin</label>
          <input type='range' className="range range-primary flex-1" min='0' max='7.5' defaultValue='2.25' step='0.1' onChange={marginTweetInputRange}/>
        </div>
        <div className="dualInputContainer my-3 items-center justify-around">
          <label className="flex-1">Tweet Padding</label>
          <input type='range' className="range range-primary flex-1" min='0' max='7.5' defaultValue='2.50' step='0.1' onChange={paddingTweetInputRange}/>
        </div>
      </div>
      <div>
        <h2 className="text-center">Border</h2>
        <div>
          <div className="dualInputContainer my-3 items-center justify-around">
            <label className="flex-1">Border Radius</label>
            <input type='range' className="range range-primary flex-1" min='0' max='70' defaultValue='20' step='1' onChange={borderRadiusTweet}/>
          </div>
          <div className="dualInputContainer my-3 items-center justify-around gap-3">
            <b>No Borders</b>
            <input type='checkbox' className="toggle" onClick={statusBorder} defaultChecked='true'/>
          </div>
          <div className="dualInputContainer my-3 items-center justify-around">
            <label className="flex-1">Border Width</label>
            <input type='range' className="range range-primary flex-1" min='0' max='20' defaultValue='4' step='1' ref={borderWidthRef} onChange={borderWidthTweet}/>
          </div>
          <div className="dualInputContainer my-3">
            <label className="cursor-pointer" for="borderColorTweet">Border Color</label>
            <input className="w-6 h-6 rounded-md shadow-lg" ref={borderColorRef} type='color' onChange={borderColorTweet}/>
          </div>
        </div>
      </div>
    </div>
  );
}
