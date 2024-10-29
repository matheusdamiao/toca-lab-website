'use client'
import { useScroll, useTransform, motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import logo from './../../public/images/logo-branca.svg'
import insta from './../../public/images/ri_instagram-line.svg'
import zap from './../../public/images/ic_outline-whatsapp.svg'



const Menu = () => {


    
  const ref = useRef(null)

  // Detecta o scroll da página
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Transforma o tamanho da logo e a opacidade do fundo
  const logoSize = useTransform(scrollYProgress, [0, 1], ["180px", "80px"])
  const menuSize = useTransform(scrollYProgress, [0, 1], ["120px", "60px"])

  const bgColor = useTransform(scrollYProgress, [0, 1], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"])



  const [isOpen, setIsOpen] = useState(false);


  const handleMenuMobile = () =>{
    setIsOpen(!isOpen)
  }
  return (
    
    <div className=' relative h-[100px] z-[99999] bg-black'>
          
        <motion.div
        style={{ backgroundColor: bgColor, height: menuSize}} className="fixed top-0 left-0 flex items-center justify-between w-full z-[999999]">  
          
          <div className='flex items-center gap-4 pl-8'>
            <Link href='https://wa.me/1234567890' target="_blank" rel="noopener noreferrer">
              <Image src={zap} width={25} height={80} alt=''/>
            </Link>
            <Link href="https://instagram.com/toca.lab" target="_blank" rel="noopener noreferrer">
                <Image src={insta} width={30} height={80} alt=''/>
            </Link>
          </div>

          <Link href='/'>
            <motion.div style={{ width: logoSize }} className="absolute top-3 left-1/2 transform -translate-x-1/2">
              <Image src={logo} alt='logo' width={140} height={95} className='w-full max-w-[140px]' />
            </motion.div>
          </Link>

          <div className='hidden sm:flex items-center text-white pr-8 gap-4'>
            <Link href='/projetos'> Projetos
             
            </Link>
            <Link href='/#'>
                  Contato            
            </Link>
          </div>

          <div onClick={()=> handleMenuMobile()} className={`relative z-[99999999] right-6  bg-gray-100 border  transition-colors  sm:hidden w-[44px] h-[44px] !flex-shrink-0 rounded-full  flex items-center justify-center gap-1 flex-col`}>
            <span className={`${isOpen ? 'translate-y-[3px] rotate-45 !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
            <span className={`${isOpen ? 'hidden' : ''} w-[14px] h-[2px] bg-gray-600 block rounded-lg !flex-shrink-0`}> </span>
            <span className={`${isOpen ? 'translate-y-[-3px] rotate-[-45deg] !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
          </div>


          {isOpen ?  
            <div  className={`absolute top-0 translate-x-[0px] duration-500 transition-all bg-menu-aberto text-white w-full h-[50svh]`}>
              <ul className='px-[20px] pt-[150px] flex flex-col gap-8 items-center ' >
                <li className='py-spacing-lg px-spacing-xl'>
                  <Link href='/sobre' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute text-4xl after:bottom-[-10px]'>Contato</Link>
                </li>
                <li className='py-spacing-lg px-spacing-xl'>
                  <Link href='/projetos' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute text-4xl after:bottom-[-10px]'>Projetos</Link>
                </li>
               
              
              </ul>
            </div>
            :
            <div className={` transition-all absolute top-0 translate-x-[-2000px] duration-1000 w-full  h-[80svh]`}>
            </div>
          }

        </motion.div>  
    </div>
  )
}

export default Menu
