'use client'
import { useScroll, useTransform, motion} from 'framer-motion';
import React, { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Scales the video based on section's scroll visibility
  });
  
  // Use scroll progress to control video scaling
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]); // Scaling from 1x to 1.5x

  return (
    <div ref={ref} className='relative flex flex-col items-center w-full pt-[100px] bg-black overflow-hidden'>
      <section className=' px-6 z-30 flex flex-col bg-inherit justify-center h-full gap-4  lg:h-[700px] text-white'>
        <h3 className='text-sm text-[#B5B5B5] lg:text-lg'>Quem somos</h3>
        <h4 className='font-extrabold text-[40px] lg:text-[70px] leading-[120%] lg:w-[65%]'>Viciados em produzir conteúdo</h4>
        <p className='text-[#D1D1D1] lg:w-[60%] pt-4 lg:pt-10 text-[14px] lg:text-[20px]'>
        Produzimos conteúdos audiovisuais que não apenas chamam atenção, mas que também engajam e convertem.
        <br/> <br />
        Da ideia inicial à entrega final, cuidamos de tudo, 
        garantindo que cada peça de conteúdo seja única e impactante.
        </p>
      </section>
      <motion.video  src='/videos/about-section.mp4'  loop muted autoPlay className='z-40 lg:absolute pt-10 object-cover w-full h-[500px] lg:h-full lg:w-[450px] top-0 right-40'></motion.video>
    </div>
  )
}

export default AboutSection
