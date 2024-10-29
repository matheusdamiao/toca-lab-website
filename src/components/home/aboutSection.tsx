'use client'
import { motion} from 'framer-motion';
import React, { useRef } from 'react'
import useAnimateOnView from '../../../utils/useAnimationOnView';

const AboutSection = () => {
  const {animationControls, ref } = useAnimateOnView()

  
  

  return (
    <div  className='relative flex flex-col items-center w-full pt-[100px] bg-black overflow-hidden'>
      <section ref={ref} className=' px-6 z-30 flex flex-col bg-inherit justify-center h-full gap-4  lg:h-[700px] text-white'>
        <motion.h3
         initial='hidden'
         animate={animationControls}
          variants={{
           hidden: {
               opacity: 0, y: '80px',
             },
             show: {
               opacity: 1, y: '0'
             }
          }}
        transition={{delay: 0.1, duration: 1}}
        className='text-sm text-[#B5B5B5] lg:text-lg'>Quem somos</motion.h3>
        <motion.h4
        
        initial='hidden'
        animate={animationControls}
         variants={{
          hidden: {
              opacity: 0, y: '80px',
            },
            show: {
              opacity: 1, y: '0'
            }
         }}
       transition={{delay: 0.2, duration: 1}}
       className='font-extrabold text-[40px] lg:text-[70px] leading-[120%] lg:w-[65%]'>Viciados em produzir conteúdo</motion.h4>
        <motion.p
        
        initial='hidden'
        animate={animationControls}
         variants={{
          hidden: {
              opacity: 0, y: '80px',
            },
            show: {
              opacity: 1, y: '0'
            }
         }}
       transition={{delay: 0.3, duration: 1}}
        className='text-[#D1D1D1] lg:w-[60%] pt-4 lg:pt-10 text-[14px] lg:text-[20px]'>
        Produzimos conteúdos audiovisuais que não apenas chamam atenção, mas que também engajam e convertem.
        <br/> <br />
        Da ideia inicial à entrega final, cuidamos de tudo, 
        garantindo que cada peça de conteúdo seja única e impactante.
        </motion.p>
      </section>
      <motion.video  src='/videos/about-section.mp4'  loop muted autoPlay className='z-40 lg:absolute pt-10 object-cover w-full h-[500px] lg:h-full lg:w-[450px] top-0 right-40'></motion.video>
    </div>
  )
}

export default AboutSection
