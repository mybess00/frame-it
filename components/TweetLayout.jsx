'use client'
import InfiniteViewer from 'react-infinite-viewer';
import { useState, useRef, useContext } from 'react';
import { HiOutlineZoomIn, HiOutlineZoomOut } from 'react-icons/hi'
import { TbKeyframeAlignCenter } from 'react-icons/tb'
import { TweetProperties } from './TweetContext';


export default function TweetLayout ({ children }) {

    const { bgContainer, tweetMargin, tweetWidth } = useContext(TweetProperties)
    
    const viewerRef = useRef(null)

    const [zoom, setZoom] = useState(.5)

    const zoomIn = () => {
        setZoom(zoom+0.1)
    }
    const zoomOut = () => {
        setZoom(zoom <= 0.4 ? zoom-0.05 : zoom-0.1)
    }
    const center = () => {
        viewerRef.current.scrollCenter()
    }

    return (
        <div className='container-tweet flex flex-col left-0 w-3/5 h-screen overflow-y-auto bg-space-work items-center justify-center'>
            <div className='sticky sm:absolute left-[80%] sm:left-[unset] sm:right-[5%] top-[10%] z-10 flex flex-row gap-2'>
                <div className='text-3xl sm:text-2xl text-[#01090e] desktop:hover:bg-gray-500 transition-all duration-200 bg-[#fafafd] p-2 rounded-full cursor-pointer'
                    onClick={center}>
                    <TbKeyframeAlignCenter/>
                </div>
                <div className='text-3xl sm:text-2xl text-[#01090e] desktop:hover:bg-gray-500 transition-all duration-200 bg-[#fafafd] p-2 rounded-full cursor-pointer'
                    onClick={zoomIn}>
                    <HiOutlineZoomIn/>
                </div>
                <div className='text-3xl sm:text-2xl text-[#01090e] desktop:hover:bg-gray-500 transition-all duration-200 bg-[#fafafd] p-2 rounded-full cursor-pointer'
                    onClick={zoomOut}>
                    <HiOutlineZoomOut/>
                </div>
            </div>
                <InfiniteViewer
                ref={viewerRef}
                className="viewer w-full h-full"
                margin={0}
                usePinch={true}
                useWheelScroll={true}
                useGesture={true}
                useMouseDrag={true}
                threshold={0}
                rangeX={[-2048, 2048]}
                rangeY={[-2048, 2048]}
                zoom={zoom}>
                    <div className='body-tweet viewport cursor-grab active:cursor-grabbing duration-[50ms]' style={{
                        backgroundImage: bgContainer, 
                        padding: `${tweetMargin}rem`,
                        width: `${tweetWidth}px`,
                    }}>
                        {children}
                    </div>
                </InfiniteViewer>
        </div>
    )
}