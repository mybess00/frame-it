'use client'

import { useEffect, useState, useRef } from "react";
import Background from "./tools/Background";
import BackgroundTweet from "./tools/BackgroundTweet";
import Fonts from "./tools/Fonts";
import Spacing from "./tools/Spacing";
import Size from "./tools/Size";
import ImageOptions from "./tools/ImageOptions";

export default function ToolBox({ change }){

  const getBackgroundContainer = (value) => {
    change.setContainerBackground(value);
  }
  const getBackgroundTweet = (value) => {
    change.setTweetBackground(value);
  }
  const getBackgroundTweetOpacity = (value) => {
    change.setTweetBackgroundOpacity(value)
  }
  const getTweetPadding = (value) => {
    change.setTweetPaddingValue(value);
  }
  const getTweetMargin = (value) => {
    change.setTweetMarginValue(value);
  }
  const getFontColor = (value) => {
    change.setFontTweetColor(value);
  }
  const getFontStyle = (value) => {
    change.setFontTweetStyle(value)
  }
  const getBorderRadius = (value) => {
    change.setBorderTweetRadius(value)
  }
  const getBorderColor = (value) => {
    change.setBorderTweetColor(value)
  }
  const getBorderWidth = (value) => {
    change.setBorderTweetWidth(value)
  }
  const getTweetWidth = (value) => {
    change.setWidth(value);
  }
  const getStatsDisplay = (value) => {
    change.setStatsVisibility(value);
  }
  const getImageOptions = (value) => {
    change.setImageTweetOptions(value);
  }
  const getTextSize = (value) => {
    change.setGlobalTextSize(value);
  }

  const btnBgRef = useRef(null);
  const btnMarginRef = useRef(null);
  const btnSizeRef = useRef(null);
  const btnFontRef = useRef(null);
  const btnImageRef = useRef(null);

  const spacingContainerRef = useRef(null);
  const fontContainerRef = useRef(null);
  const backgroundContainerRef = useRef(null);
  const sizeContainerRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [bgDisplay, setBgDisplay] = useState(true);
  const [fontDisplay, setFontDisplay] = useState(false);
  const [marginDisplay, setMarginDisplay] = useState(false);
  const [sizeDisplay, setSizeDisplay] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);

  const toggleDisplay = () => {
    setBgDisplay(false);
    setFontDisplay(false);
    setMarginDisplay(false);
    setSizeDisplay(false);
    setImageDisplay(false);
  }
  const deleteBgBt = () => {
    btnBgRef.current.style.backgroundColor = "transparent";
    btnMarginRef.current.style.backgroundColor = "";
    btnSizeRef.current.style.backgroundColor = "";
    btnFontRef.current.style.backgroundColor = "";
    btnImageRef.current.style.backgroundColor = "";
  }
  const showBg = () => {
    toggleDisplay();
    setBgDisplay(true);
    deleteBgBt();
    btnBgRef.current.style.backgroundColor = "#274e69";
  }
  const showFont = () => {
    toggleDisplay();
    setFontDisplay(true);
    deleteBgBt();
    btnFontRef.current.style.backgroundColor = "#274e69";
  }
  const showMargin = () => {
    toggleDisplay();
    setMarginDisplay(true);
    deleteBgBt();
    btnMarginRef.current.style.backgroundColor = "#274e69";
  }
  const showSize = () => {
    toggleDisplay();
    setSizeDisplay(true);
    deleteBgBt();
    btnSizeRef.current.style.backgroundColor = "#274e69";
  }
  const showImageOptions = () => {
    toggleDisplay();
    setImageDisplay(true);
    deleteBgBt();
    btnImageRef.current.style.backgroundColor = "#274e69";
  }

  useEffect(() => {
    marginDisplay ? spacingContainerRef.current.style.display = 'block' : spacingContainerRef.current.style.display = 'none';
    fontDisplay ? fontContainerRef.current.style.display = 'block' : fontContainerRef.current.style.display = 'none';
    bgDisplay ? backgroundContainerRef.current.style.display = 'block' : backgroundContainerRef.current.style.display = 'none';
    sizeDisplay ? sizeContainerRef.current.style.display = 'block' : sizeContainerRef.current.style.display = 'none';
    imageDisplay ? imageContainerRef.current.style.display = 'block' : imageContainerRef.current.style.display = 'none';
  })

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap gap-x-2 justify-between">
        <div className="hidden">
          <input type='checkbox' id="size-input" onChange={showSize}/>
          <input type='checkbox' id="bg-input" onChange={showBg}/>
          <input type='checkbox' id="spacing-input" onChange={showMargin}/>
          <input type='checkbox' id="font-input" onChange={showFont}/>
          <input type='checkbox' id="image-input" onChange={showImageOptions}/>
        </div>
        <label className="btn btn-ghost text-xl bg-[#274e69]" for="bg-input" ref={btnBgRef}>
          Background
        </label>
        <label className="btn btn-ghost text-xl" for="spacing-input" ref={btnMarginRef}>
          Margins
        </label>
        <label className="btn btn-ghost text-xl" for="font-input" ref={btnFontRef}>
          Font
        </label>
        <label className="btn btn-ghost text-xl" for="image-input" ref={btnImageRef}>
          Images
        </label>
        <label className="btn btn-ghost text-xl" for="size-input" ref={btnSizeRef}>
          Size
        </label>
      </div>
      <div className="hidden" ref={backgroundContainerRef}>
        <Background change={getBackgroundContainer}/>
        <BackgroundTweet change={{getBackgroundTweet, getBackgroundTweetOpacity, getStatsDisplay}}/>
      </div>
      <div className="hidden" ref={spacingContainerRef}>
        <Spacing change={{getTweetPadding, getTweetMargin, getBorderRadius, getBorderColor, getBorderWidth}}/>
      </div>
      <div className="hidden" ref={fontContainerRef}>
        <Fonts change={{getFontColor, getFontStyle, getTextSize}}/>
      </div>
      <div className="hidden" ref={imageContainerRef}>
        <ImageOptions change={getImageOptions}/>
      </div>
      <div className="hidden" ref={sizeContainerRef}>
        <Size change={getTweetWidth}/>
      </div>
    </div>
  );
}