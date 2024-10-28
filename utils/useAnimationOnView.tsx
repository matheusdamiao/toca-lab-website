import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const useAnimateOnView = () => {

    const ref = useRef<HTMLDivElement>(null)

    const isView = useInView(ref);
    const animationControls = useAnimation();
  
    const TitleAnimation = {
      hidden: {
        opacity: 0, y: '80px',
      },
      show: {
        opacity: 1, y: '0'
      }
    }

    useEffect(()=>{
        if(isView){
            animationControls.start('show')
        }
   // eslint-disable-next-line
    },[isView])
  return {
    ref, isView, animationControls, TitleAnimation
  }
}

export default useAnimateOnView