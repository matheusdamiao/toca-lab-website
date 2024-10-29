'use client'
import React from 'react'
import { Standard } from "@typebot.io/nextjs";

const ContactSection = () => {
  return (
    <div id="contact" className='bg-white h-full '>
      
      <div className=' px-6 flex flex-col items-center justify-center pb-[50px] pt-[100px]'>
        <h3 className='text-sm text-[#B5B5B5] lg:text-lg'>Entre em contato </h3>
        <h4 className='font-extrabold text-[40px] lg:text-[70px] leading-[120%] lg:w-[50%] text-center'>Pronto para elevar seu conteúdo?</h4>
        <p className='text-[#1D1D1D] lg:w-[70%] pt-4 lg:pt-10 text-[14px] lg:text-[20px] text-center'>
             Pare de se preocupar com o processo de criação e comece a colher os resultados. 
             <br />
             Fale conosco hoje e vamos criar conteúdo que faz a diferença.
        </p>
        <div className='w-full max-w-[550px] pt-2 lg:pt-10'>
          <Standard
            typebot="lead-generation-zay30q4"
            style={{ width: "100%", height: "400px" }}
          />
        </div>

      </div>

      <video src="/videos/contact-video.mp4" className='h-[300px] object-cover w-full' autoPlay loop muted></video>
    </div>
  )
}

export default ContactSection

