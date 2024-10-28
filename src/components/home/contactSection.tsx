import React from 'react'

const ContactSection = () => {
  return (
    <div className='bg-white h-full '>
      
      <div className=' px-6 flex flex-col items-center justify-center pb-[50px] pt-[100px]'>
        <h3 className='text-sm text-[#B5B5B5] lg:text-lg'>Entre em contato </h3>
        <h4 className='font-extrabold text-[40px] lg:text-[70px] leading-[120%] lg:w-[50%] text-center'>Pronto para elevar seu conteúdo?</h4>
        <p className='text-[#1D1D1D] lg:w-[70%] pt-4 lg:pt-10 text-[14px] lg:text-[20px] text-center'>
             Pare de se preocupar com o processo de criação e comece a colher os resultados. 
             <br />
             Fale conosco hoje e vamos criar conteúdo que faz a diferença.
        </p>
        <button className='bg-[#C23939] text-white max-w-[250px] py-4 px-4 w-full mt-8 '>
            Entre em contato
          </button>
      </div>

      <video src="/videos/contact-video.mp4" className='h-[300px] object-cover w-full' autoPlay loop muted></video>
    </div>
  )
}

export default ContactSection

