import { useState, useEffect, useRef, useContext } from "react";
import { TweetProperties } from "../TweetContext";

export default function Size () {

  const { setTweetWidth } = useContext(TweetProperties)

  const fieldWidthRef = useRef(null);
  const selectWidthRef = useRef(null);

  const [widthStatus, setWidthStatus] = useState(true);
  const selectWidth = (e) => {
    setTweetWidth(e.target.value)
  }
  const statusWidth = () => {
    setWidthStatus(!widthStatus);
  }
  const fieldWidth = () => {
    setTweetWidth(fieldWidthRef.current.value);
  }

  useEffect(() => {
    fieldWidthRef.current.disabled = widthStatus;
    selectWidthRef.current.disabled = !widthStatus;
    widthStatus ? setTweetWidth(selectWidthRef.current.value) : fieldWidth();
  });

  return(
    <div className="mt-7">
      <h2 className="text-center">Size of Image</h2>
      <div className="flex flex-col">
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
          <b className="flex-1">Width</b>
          <div className="w-3/4">
            <select className="select select-primary w-full" ref={selectWidthRef} onChange={selectWidth}>
              <option>2100</option>
              <option>1800</option>
              <option selected>1600</option>
              <option>1250</option>
              <option>1000</option>
              <option>800</option>
            </select>
          </div>
        </div>
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
          <b className="flex-1">Height</b>
          <div className="w-3/4">
            <select className="select select-primary w-full">
              <option selected disabled>Auto</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
          <b>Manually define width</b>
          <input type='checkbox' className="toggle" onClick={statusWidth}/>
        </div>
        <div className="dualInputContainer my-3 items-center justify-around gap-3">
            <b className="flex-1">Width</b>
            <div className="w-3/4">
              <input type='number' disabled ref={fieldWidthRef} onChange={fieldWidth} defaultValue="1600" className="text-bg-900 rounded-md p-1"/>
            </div>
        </div>
      </div>
    </div>
  )
}
