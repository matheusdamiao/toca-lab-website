'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';    
import Image from 'next/image';
import bubble from './../../../public/images/black-bubble.svg'

const AnimatedBanner = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
      });

      const scrollX1 = useTransform(scrollYProgress, [1, 0], ["100px", "-400px"], {});

      const scrollX2 = useTransform(scrollYProgress, [1, 0], ["0px", "600px"], {});




  return (
    <div ref={ref} className='h-[300px] bg-black lg:h-[480px] w-full relative overflow-hidden'>
      
      <motion.div style={{x: scrollX1, rotate: '-8deg'}} className='align-middle inline-block pt-[5px] lg:py-4 bg-slate-50 absolute top-[-10px] lg:top-[180px] left-[-180px]  w-[2000px] lg:w-[3400px] h-[45px] lg:h-[60px]'>
        <div className='inline-block align-middle'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  px-14 '> Tráfego Pago </p>
        </div>

          <div className='inline-block align-middle mx-8'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block' />
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  px-14'> Fotografia profissional </p>
        </div>

        <div className='inline-block align-middle'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block align-middle mx-8' />
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  align-middle'> Edição Profissional e Criativa </p>
        </div>


        <div className='inline-block align-middle mx-10'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block mx-8'/>
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block '> Tráfego Pago </p>
        </div>

        <div className='inline-block align-middle mx-8'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-14 '> Fotografia profissional </p>
        </div>


        <div className='inline-block align-middle'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-14'> Tráfego Pago </p>
        </div>


        <div className='inline-block align-middle'>
            <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
            <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-14 '> Gravação e Produção de Vídeos </p>
        </div>


        <div className='inline-block align-middle'>
            {/* <Image src={bubble} alt='' width={18} height={18} className='inline-block'/> */}
            {/* <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-14 '> Tráfego Pago </p> */}
        </div>
    
        <div className='inline-block align-middle'>
            {/* <Image src={bubble} alt='' width={18} height={18} className='inline-block'/> */}
            {/* <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-14 '> Fotografia profissional </p> */}
        </div>
      

      </motion.div>

      <motion.div style={{x: scrollX2, rotate: '8deg'}} className='align-middle inline-block lg:py-2 bg-slate-50 top-[120px] lg:top-[200px] right-[-180px] absolute h-[45px] lg:h-[60px] w-[2000px] lg:w-[3400px]'>


            <div className='inline-block align-middle'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block' />
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Tráfego Pago </p>
            </div>

            <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block' />
                <p className='text-[#C23939] font-bold text-xs lg:text-lginline-block mx-8 '> Tráfego Pago </p>
            </div>


            <div className='inline-block align-middle'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Fotografia profissional </p>
            </div>

            <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Gravação e Produção de Vídeos </p>
            </div>

            <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Edição Profissional e Criativa </p>
            </div>

            <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block' />
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Tráfego Pago </p>
            </div>

            <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '>  Fotografia profissional </p>
            </div>

             <div className='inline-block align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Gravação e Produção de Vídeos </p>
            </div>

           
            <div className='lg:inline-block hidden align-middle mx-8'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block' />
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Tráfego Pago </p>
            </div>

            <div className='lg:inline-block align-middle mx-8 hidden'>
                <Image src={bubble} alt='' width={18} height={18} className='inline-block'/>
                <p className='text-[#C23939] font-bold text-xs lg:text-lg inline-block  mx-8 '> Edição Profissional e Criativa </p>
            </div>

            
     </motion.div>

    </div>
  )
}

export default AnimatedBanner
