'use client'
import React from 'react'
import CellPhoneMockUp from './cellPhoneMockUp'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const MissionSection = () => {

    const [emblaRef] = useEmblaCarousel({loop: true, align: 'center'},  [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 })
      ])

  return (
    <div className='flex flex-col items-center w-full bg-black pb-[100px]'>
      <section className='px-6 z-30 bg-inherit flex flex-col justify-center items-center h-full gap-2 text-white'>
        <h3 className='text-sm text-[#B5B5B5] text-center lg:text-lg'>Nossa missão</h3>
        <h4 className='font-extrabold text-[40px] lg:text-[70px] text-center leading-[120%] lg:w-[65%]'>Acabar com o Stress de Criar Conteúdo</h4>
        <p className='text-[#D1D1D1] lg:w-[40%] pt-4 lg:pt-4 text-[14px] lg:text-[20px] text-center'>
        Sabemos como pode ser desafiador produzir conteúdos de qualidade sem a estrutura e o tempo adequados. 
        <br />
        Deixe esse trabalho pra quem ama fazer isso. 
        </p>
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
