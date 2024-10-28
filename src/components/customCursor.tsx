'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {

    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [cursorColor, setCursorColor] = useState('black');
    const [lastBgColor, setLastBgColor] = useState<string | null>(null);

    const moveCursor = (e: MouseEvent):void =>{
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY
        }),
        gsap.to(followerRef.current, {
            x: e.clientX,
            y: e.clientY,
            delay: 0.2
        })
    }

    const handleMouseOver = (e: MouseEvent): void => {
        const target = e.target as HTMLElement;

        // Get the background color of the element under the cursor
        const bgColor = window.getComputedStyle(target).backgroundColor;

        if (bgColor !== lastBgColor) {
            if (bgColor === 'rgb(255, 255, 255)') {
                setCursorColor('black');
            } else if (bgColor === 'rgb(0, 0, 0)') {
                setCursorColor('white');
            } else {
                // Default cursor color for elements without specific background colors
                setCursorColor('black');
            }
            setLastBgColor(bgColor); // Update the last color
        }
    };
    
    useEffect(()=>{
        gsap.set(
            cursorRef, {
                xPercent: 100,
                yPercent: 100
            }            
        )
        gsap.set(
            followerRef, {
                xPercent: -20,
                yPercent: -20
            }
        )

        window.addEventListener('mousemove', moveCursor)

        const debounceMouseOver = (e: MouseEvent) => {
            requestAnimationFrame(() => handleMouseOver(e));
        };

        window.addEventListener('mouseover', debounceMouseOver);
        return ()=>{
        window.removeEventListener('mousemove', moveCursor)
        window.removeEventListener('mouseover', debounceMouseOver);
        }
    },[])



  return (
    <div className='absolute'>
        <div ref={followerRef} style={{backgroundColor: cursorColor}} className='w-[60px] h-[60px] left-[22px] rounded-full fixed z-50' ></div>
        <div ref={cursorRef}  className='width bg-no-repeat bg-cursor-image fixed h-[30px] w-[30px] z-50'></div>
    </div>
  )
}

export default CustomCursor
