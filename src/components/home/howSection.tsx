'use client'
import { MotionValue, useScroll, useSpring, useTransform, motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

interface SectionProps {
    subtitle: string;
    title: string;
    text: string;
    index: number;
}



const data = [
    {
        subtitle: 'Como fazemos isso?',
        title: 'Criamos estratégias personalizadas',
        text: ' Sabemos que não basta ter edição de qualidade, sem ter objetivos de negócio claros. Nossos projetos são focados em fazer seu conteúdo ser engajado. Esse é nosso motor.'
    },
    {
        subtitle: '',
        title: 'Alcançamos seu público com tráfego',
        text: 'Conectamos sua marca ao público ideal através de tráfego pago eficiente, gerando resultados reais e mensuráveis.'
    },
    {
        subtitle: '',
        title: 'Somos o seu braço de comunicação',
        text: '  Oferecemos soluções completas, desde a pré-produção até a distribuição. Nossa missão é ser o braço de comunicação do seu negócio, facilitando o caminho para o sucesso.'
    }
]


function Section({subtitle, title, text, index}: SectionProps){

    return(
        <section  className='px-6 z-50 flex flex-col snap-center justify-center h-[80svh] gap-2 text-black'>
            <h3 className='text-sm text-white lg:text-[#353535] lg:text-lg'>{subtitle}</h3>
            <h4 className='font-extrabold text-[40px] text-white lg:text-black lg:text-[70px] leading-[120%] lg:w-[65%]'><p className=' inline text-red-500'>{index + 1}.</p> {title}</h4>
            <p className='lg:w-[40%] text-white lg:text-black pt-4 lg:pt-4 text-[14px] lg:text-[20px]'>
            {text}
            </p>
        </section>
    )

}  

const HowSection = () => {
 const parentRef = useRef(null);

 const { scrollYProgress } = useScroll({container: parentRef})

 const ref = useRef<HTMLDivElement>(null)

 const isView = useInView(ref);
 const animationControls = useAnimation();

 useEffect(()=>{
    if(isView){
        animationControls.start({
            scaleX: 0.2,
            transition: {duration: 1, ease: 'easeOut'}
        })
    }
 },[animationControls, isView])

 const scaleXProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

const scaleX = useSpring(scaleXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
})
  return (
    <div ref={ref} className='px-6 w-full relative flex flex-col bg-black lg:bg-white'>
        
        <motion.div animate={animationControls} style={{scaleX}} className='absolute w-full bg-red-500 top-0 z-50 left-0 border-2 border-red-500 right-0 h-[10px] bg-red'/>

        <div className='absolute top-0 right-0 h-full'>
            <video src='/videos/how-section.mp4' loop muted autoPlay className='opacity-30 lg:opacity-100 sticky top-0 object-cover h-full w-[650px]'></video>

        </div>
      
        <div ref={parentRef}  className='relative h-[75svh] snap-y snap-mandatory overflow-y-auto no-scrollbar'>

        
            {data.map((sec, index)=>{
                return(
                    <Section key={sec.title} subtitle={sec.subtitle} title={sec.title} index={index} text={sec.text}/>
                )
            })}
        </div>
      
    </div>
  )
}

export default HowSection
