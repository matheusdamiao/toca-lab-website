'use client'
import React from 'react'
import {  motion} from 'framer-motion';
import CellPhoneMockUp from './cellPhoneMockUp'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import useAnimateOnView from '../../../utils/useAnimationOnView'

const MissionSection = () => {

  const {animationControls, ref } = useAnimateOnView()


    const [emblaRef] = useEmblaCarousel({loop: true, align: 'center'},  [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 })
      ])

  return (
    <div className='flex flex-col items-center w-full bg-black pb-[100px]'>
      <section ref={ref} className='px-6 z-30 bg-inherit flex flex-col justify-center items-center h-full gap-2 text-white'>
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
        className='text-sm text-[#B5B5B5] text-center lg:text-lg'>Nossa missão</motion.h3>
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
       className='font-extrabold text-[40px] lg:text-[70px] text-center leading-[120%] lg:w-[65%]'>Acabar com o Stress de Criar Conteúdo</motion.h4>
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
        className='text-[#D1D1D1] lg:w-[40%] pt-4 lg:pt-4 text-[14px] lg:text-[20px] text-center'>
        Sabemos como pode ser desafiador produzir conteúdos de qualidade sem a estrutura e o tempo adequados. 
        <br />
        Deixe esse trabalho pra quem ama fazer isso. 
        </motion.p>
      </section>

      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>

               
            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post1.mp4'/>
            </div>

            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post2.mp4'/>
            </div>

            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post3.mp4'/>
            </div>


            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post5.mp4'/>
            </div>



            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post4.mp4'/>
            </div>


            <div className='embla__slide'>
                <CellPhoneMockUp videoPath='/videos/post6.mp4'/>
            </div>

         
        </div>
      </div>
      
    </div>
  )
}

export default MissionSection
