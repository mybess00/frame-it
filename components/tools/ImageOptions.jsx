'use client'

import { useRef, useState, useEffect, useContext} from "react";
import { TweetProperties } from "../TweetContext";

export default function ImageOptions () {

  const { setImageOptions } = useContext(TweetProperties)

  const heightManualContainerRef = useRef(null);
  const heightManualInputRef = useRef(null);
  const [width, setWidth] = useState('auto');
  const [height, setHeight] = useState('380px');
  const [visibility, setVisibility] = useState(true);

  const setImagesOptions = () => {
    setImageOptions({width, height, visibility})
  }

  const heightSelect = (e) => {
    if (e.target.value == 'Manual'){
      heightManualContainerRef.current.classList.remove('hidden');
      heightManualContainerRef.current.classList.add('flex');
      setManualHeight();
    } else {
      heightManualContainerRef.current.classList.add('hidden');
      setHeight(e.target.value);
    }
  }

  const setManualHeight =  () => {
    setHeight(`${heightManualInputRef.current.value}px`);
  }
  const widthSelect = (e) => {
    setWidth(e.target.value);
  }
  const visibilityImages = (e) => {
    setVisibility(e.target.checked ? false : true);
  }

  useEffect(() => {
    setImagesOptions();
  }, [width, height, visibility]);
  
  return(
    <div className="mt-5">
      <h2 className="text-center">Tweet Image Options</h2>
      <div className="mt-2">
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
          <b className="flex-1">Images Height</b>
          <div className="w-3/4">
            <select className="select select-primary w-full" onChange={heightSelect}>
              <option>100%</option>
              <option>Manual</option>
              <option selected value='380px'>380</option>
            </select>
          </div>
        </div>
        <div className="flex-row flex-nowrap my-3 items-center justify-around gap-3 hidden" ref={heightManualContainerRef}>
          <b className="flex-1">Set Height</b>
          <div className="w-3/4">
            <input type='number' defaultValue='380' className="text-bg-900 rounded-md p-1" onChange={setManualHeight} ref={heightManualInputRef}/>
          </div>
        </div>
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
          <b className="flex-1">Images Width</b>
          <div className="w-3/4">
            <select className="select select-primary w-full" onChange={widthSelect}>
              <option selected value='auto'>Auto</option>
              <option>100%</option>
            </select>
          </div>
        </div>
        <div className="dualInputContainer my-3">
        <label for='display-imgBody' className="cursor-pointer">Hide images</label>
        <input className="checkbox checkbox-primary" type='checkbox' id="display-imgBody" onChange={visibilityImages}/>
      </div>
      </div>
    </div>
  )
}
