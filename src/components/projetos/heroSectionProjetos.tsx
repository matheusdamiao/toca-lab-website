import Image from 'next/image'
import React from 'react'
import logo from './../../../public/images/logo-branca.svg'

const HeroSectionsProjetos = () => {
  return (
    <div className='flex flex-col items-center justify-center relative h-[65svh] bg-black'>
      <video src='/videos/hero-desktop.mp4' loop muted autoPlay className='absolute top-0 left-0 h-full opacity-25 right-0 w-full object-cover'></video>
      <Image src={logo} width={180} height={95} alt='logo' className='absolute w-[120px] top-4 left-0 right-0 mx-auto z-40' />
      <section className='px-6 pt-10 flex flex-col text-white items-center justify-center z-50 gap-6 lg:gap-10'>
        <h1 className='font-extrabold text-[50px] lg:text-[80px] max-w-[850px] w-full text-center leading-[60px] lg:leading-[78px]'>Portfólio de Projetos</h1>
        {/* <h2 className='font-regular text-base leading-6 lg:leading-8 lg:text-[20px] max-w-[700px] w-full text-center'>Descubra as soluções criativas e estratégicas que desenvolvemos para nossos clientes.</h2> */}
      </section>  
    </div>
  )
}

export default HeroSectionsProjetos
