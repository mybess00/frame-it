'use client'

import { useRef } from "react";

export default function Fonts({ change }){

  const italicInputRef = useRef(null);
  const boldInputRef = useRef(null);

  const fontColorInputColor = (e) => {
    change.getFontColor(e.target.value)
  }
  const fontStyleInputsChackbox = () => {
    const italic = italicInputRef.current.checked;
    const bold = boldInputRef.current.checked;
    change.getFontStyle({"bold": bold, "italic": italic})
  }
  const textSizeInput = (e) => {
    change.getTextSize(e.target.value);
  }
  return (
    <div className="mt-7">
      <h2 className="text-center">Fonts Options</h2>
      <div className="flex flex-row gap-6">
        <div className="dualInputContainer my-3">
          <label for='colorFont' className="cursor-pointer">Color</label>
          <input className="w-6 h-6 rounded-md shadow-lg" type='color' id="colorFont" onChange={fontColorInputColor}/>
        </div>
        <div className="dualInputContainer my-3">
          <label for='bold-text' className="cursor-pointer">Bold</label>
          <input type='checkbox' ref={boldInputRef} id="bold-text" className="checkbox checkbox-primary" onChange={fontStyleInputsChackbox}/>
        </div>
        <div className="dualInputContainer my-3">
          <label for='italic-text' className="cursor-pointer">Italic</label>
          <input type='checkbox' ref={italicInputRef} id='italic-text' className="checkbox checkbox-primary" onChange={fontStyleInputsChackbox}/>
        </div>
      </div>
      <div className="mt-7">
        <div className="dualInputContainer my-3 items-center justify-around">
          <label className="flex-1">Font Size</label>
          <input type='range' className="range range-primary flex-1" min='15' max='60' defaultValue='42' onChange={textSizeInput}/>
        </div>
      </div>
    </div>
  );
}