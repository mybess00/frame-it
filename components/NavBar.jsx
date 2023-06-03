'use client'

import { useRef, useState } from "react";
import { BiCloudDownload, BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

export default function NavBar({ downloadAction, searchAction }){
  const searchBoxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const searchButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);

  const openBox = () => {
    searchBoxRef.current.classList.add('active')
    downloadButtonRef.current.classList.add('hidden');
    closeButtonRef.current.classList.remove('hidden')
  }
  const closeBox = () => {
    searchBoxRef.current.classList.remove('active')
    downloadButtonRef.current.classList.remove('hidden');
    closeButtonRef.current.classList.add('hidden');
  }

  const [link, setLink] = useState('');

  const handleSubmit = () => {
    closeButtonRef.current.classList.length !== 0 ? openBox() : searchAction(link);
  }

  return (
    <div className="topBar absolute top-0 left-0 w-full h-16 py-5 px-4 flex justify-between items-center bg-bg-900 z-[999]">
        <a className="font-logo text-4xl" onClick={() => console.log(closeButtonRef.current.classList.length)}>Frame it!</a>
        <div className="relative flex justify-center items-center cursor-pointer z-10 gap-2">
          <div ref={downloadButtonRef}>
            <BiCloudDownload fontSize='2rem' onClick={downloadAction}/>
          </div>
          <div ref={closeButtonRef} className='hidden'>
            <AiOutlineClose onClick={closeBox} fontSize='2rem'/>
          </div>
          <div ref={searchButtonRef}>
            <BiSearch onClick={handleSubmit} fontSize='2rem'/>
          </div>
          <div>
          <label htmlFor="modal-tweet-mockup" className="btn hidden">open modal</label>
          </div>
        </div>
        <div className="absolute right-full w-full h-full flex items-center px-3 duration-200" ref={searchBoxRef}>
          <input type='text' value={link} onChange={(e) => setLink(e.target.value)} placeholder="Put yout tweet link kere..." className="w-full rounded-lg p-1 outline-none h-12 text-black" />
        </div>
      </div>
  )
}