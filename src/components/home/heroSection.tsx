import Image from 'next/image'
import React from 'react'
import logo from './../../../public/images/logo-branca.svg'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center relative h-[85svh] bg-black'>
      <video src='/videos/hero-section.mp4' loop muted autoPlay className='absolute bg-black top-0 left-0 h-full opacity-45 right-0 w-full object-cover'></video>
      <Image src={logo} width={180} height={95} alt='logo' className='absolute w-[120px] top-4 left-0 right-0 mx-auto z-40' />
      <section className='px-6 pt-10 flex flex-col bg-transparent text-white items-center justify-center z-50 gap-6 lg:gap-10'>
        <h1 className='font-extrabold text-[50px] lg:text-[80px] max-w-[850px] w-full text-center leading-[60px] lg:leading-[78px]'>Conteúdo para conectar e converter</h1>
        <h2 className='font-regular text-base leading-6 lg:leading-8 lg:text-[20px] max-w-[700px] w-full text-center'>Somos o seu parceiro criativo para deixar a criação de conteúdo leve, com estratégias sob medida para atingir seu público-alvo com exatidão.</h2>
      </section>  
    </div>
  )
}

export default HeroSection
