'use client'

import { useRef } from 'react';
import NavBar from '../components/NavBar'
import ToolBox from '../components/ToolBox';
import MainTweet from '../components/MainTweet';
import TweetLayout from '../components/TweetLayout';
import TweetContext from '../components/TweetContext'

export default function Home() {

  const loaderScreen = useRef(null);

  const showLoader = () => {
    loaderScreen.current.classList.remove('hidden');
  }
  const hideLoader = () => {
    loaderScreen.current.classList.add('hidden');
  }

  return (
    <TweetContext>
      <div className="App flex flex-row">
        <NavBar loader={{showLoader, hideLoader}}/>
        <TweetLayout>
          <MainTweet />  
        </TweetLayout>
        <div className='container-tools pt-20 px-6 right-0 w-2/5 h-screen overflow-y-auto overflow-x-clip shadow-lg shadow-bg-100'>
          <ToolBox />
        </div>
      </div>
      <div className='fixed top-0 left-0 w-full h-full z-[9999] bg-[#00000054] hidden' ref={loaderScreen}>
        <span className='loader flex w-full h-full justify-center items-center'></span>  
      </div>
    </TweetContext>
  )
}

