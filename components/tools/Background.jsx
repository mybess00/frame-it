'use client'

import React from 'react'
import { useRef } from "react";

export default function Background({ change }){

  const hyperRef = useRef(null);
  const oceanicRef = useRef(null);
  const cottoncandyRef = useRef(null);
  const gothamRef = useRef(null);
  const sunsetRef = useRef(null);
  const beachsideRef = useRef(null);
  const peachyRef = useRef(null);
  const seafoamRef = useRef(null);
  const pandoraRef = useRef(null);
  const valentineRef = useRef(null);
  const hawaiiRef = useRef(null);
  const lavenderRef = useRef(null);
  const paradiseRef = useRef(null);

  const backgroundContainerInputColor = (e)=>{
    const colorBg = e.target.value;
    change(`linear-gradient(90deg, ${colorBg}, ${colorBg})`)
  }
  const backgroundColorContainerGradient = (elementRef) => {
    const style =  window.getComputedStyle(elementRef.current).getPropertyValue('background-image')
    change(style);

  }

  return (
    <div >
      <h2 className="text-center">Background</h2>
      <div className="flex flex-row flex-wrap gap-4 my-5">
        <input type='color' className="w-14 h-14 rounded-md shadow-lg cursor-pointer" onChange={backgroundContainerInputColor}/>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg cursor-pointer text-center input-background`} ref={hyperRef} onClick={() => backgroundColorContainerGradient(hyperRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow-lg cursor-pointer text-center input-background`} ref={peachyRef} onClick={() => backgroundColorContainerGradient(peachyRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-lg cursor-pointer text-center input-background`} ref={oceanicRef} onClick={() => backgroundColorContainerGradient(oceanicRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-lg cursor-pointer text-center input-background`} ref={cottoncandyRef} onClick={() => backgroundColorContainerGradient(cottoncandyRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg cursor-pointer text-center input-background`} ref={gothamRef} onClick={() => backgroundColorContainerGradient(gothamRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-lg cursor-pointer text-center input-background`} ref={sunsetRef} onClick={() => backgroundColorContainerGradient(sunsetRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 shadow-lg cursor-pointer text-center input-background`} ref={beachsideRef} onClick={() => backgroundColorContainerGradient(beachsideRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-green-200 via-green-300 to-blue-500 shadow-lg cursor-pointer text-center input-background`} ref={seafoamRef} onClick={() => backgroundColorContainerGradient(seafoamRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-green-200 via-green-400 to-purple-700 shadow-lg cursor-pointer text-center input-background`} ref={pandoraRef} onClick={() => backgroundColorContainerGradient(pandoraRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-red-200 to-red-600 shadow-lg cursor-pointer text-center input-background`} ref={valentineRef} onClick={() => backgroundColorContainerGradient(valentineRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 shadow-lg cursor-pointer text-center input-background`} ref={hawaiiRef} onClick={() => backgroundColorContainerGradient(hawaiiRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg cursor-pointer text-center input-background`} ref={lavenderRef} onClick={() => backgroundColorContainerGradient(lavenderRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 shadow-lg cursor-pointer text-center input-background`} ref={paradiseRef} onClick={() => backgroundColorContainerGradient(paradiseRef)}></div>
      </div>
    </div>
  );
}