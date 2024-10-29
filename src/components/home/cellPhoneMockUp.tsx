'use client'
import React, { useRef, useState } from 'react'

interface MockProps {
    videoPath: string
}
const CellPhoneMockUp = ({videoPath}: MockProps) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [opacity, setOpacity] = useState<number>(0.4);

    const handleMouseEnter = () => {
        // videoRef.current?.play();
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        // videoRef.current?.pause();
        setOpacity(0.4);
      };


  return (
    <div className='absolute'>
        <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
            className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[500px] w-[250px]">
            <div className="h-[32px] w-[3px] bg-gray-900 dark:bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-900 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-900 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-900 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[222px] h-[462px] bg-black  ">
                <video autoPlay style={{ opacity: opacity }} ref={videoRef} src={videoPath} className='object-cover transition-opacity h-[462px]' loop muted></video>
            </div>
        </div>
    </div>
  )
}

export default CellPhoneMockUp
