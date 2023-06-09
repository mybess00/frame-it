'use client'

import { useRef, useContext, useState, useEffect } from "react"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import { TweetProperties } from "../TweetContext"

export default function Background(){

  const colors = require('tailwindcss/colors');

  const { setBgContainer } = useContext(TweetProperties)

  const [randGradient, setRandGradient] = useState('linear-gradient(to bottom left, #dc2626, #b91c1c)')

  const randomRef = useRef(null)
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
  const forestRef = useRef(null);
  const limeRef = useRef(null);
  const lowskyRef = useRef(null);
  const tealeyeRef = useRef(null);
  const snowflakeRef = useRef(null)
  const soilRef = useRef(null)

  const colorsList = ['stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
  const values = ['300', '400', '500', '600', '700', '800', '900']
  const directions = ['to top', 'to top right', 'to right', 'to bottom right', 'to bottom', 'to bottom left', 'to left', 'to top left']

  const randColor = () => {return colorsList[Math.floor(Math.random() * 17)]}
  const randValues = () => {return values[Math.floor(Math.random() * 6)]}
  const randDirections = () => {return directions[Math.floor(Math.random() * 7)]}

  const setRandomGradient = () => {
    setRandGradient(`linear-gradient(${randDirections()}, ${colors[randColor()][randValues()]}, ${colors[randColor()][randValues()]})`)
  }

  useEffect(() => {
    setBgContainer(randGradient)
  }, [randGradient])

  const backgroundContainerInputColor = (e)=>{
    const colorBg = e.target.value;
    setBgContainer(`linear-gradient(90deg, ${colorBg}, ${colorBg})`)
  }
  const backgroundColorContainerGradient = (elementRef) => {
    const style =  window.getComputedStyle(elementRef.current).getPropertyValue('background-image')
    setBgContainer(style);
  }

  return (
    <div >
      <h2 className="text-center">Background</h2>
      <div className="flex flex-row flex-wrap gap-4 my-5">
        <input type='color' className="w-14 h-14 rounded-md shadow-lg cursor-pointer" onChange={backgroundContainerInputColor}/>
        <div className='w-14 h-14 rounded-md shadow-lg cursor-pointer flex justify-center items-center text-white text-3xl input-background' onClick={setRandomGradient} ref={randomRef}
        style={{
          backgroundImage: randGradient
        }}>
          <GiPerspectiveDiceSixFacesRandom />
        </div>
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

        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-900 shadow-lg cursor-pointer text-center input-background`} ref={forestRef} onClick={() => backgroundColorContainerGradient(forestRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-lime-400 to-lime-500 shadow-lg cursor-pointer text-center input-background`} ref={limeRef} onClick={() => backgroundColorContainerGradient(limeRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg cursor-pointer text-center input-background`} ref={lowskyRef} onClick={() => backgroundColorContainerGradient(lowskyRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-teal-400 to-yellow-200 shadow-lg cursor-pointer text-center input-background`} ref={tealeyeRef} onClick={() => backgroundColorContainerGradient(tealeyeRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-lg cursor-pointer text-center input-background`} ref={snowflakeRef} onClick={() => backgroundColorContainerGradient(snowflakeRef)}></div>
        <div className={`w-14 h-14 rounded-md bg-gradient-to-r from-stone-500 to-stone-700 shadow-lg cursor-pointer text-center input-background`} ref={soilRef} onClick={() => backgroundColorContainerGradient(soilRef)}></div>
      </div>
    </div>
  );
}