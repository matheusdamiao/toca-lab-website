import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './../../../public/images/logo-branca.svg'
import zap from './../../../public/images/ic_outline-whatsapp.svg'
import insta from './../../../public/images/ri_instagram-line.svg'


const FooterSection = () => {
  return (
    <div className='px-6 bg-black flex flex-col text-gray-300'>
        <div className='flex flex-col lg:flex-row justify-between bg-inherit max-w-7xl w-full mx-auto py-[100px]'>
            <div className='flex flex-col'>
                <Image src={logo} width={186} height={95} alt='logo Toca Lab'/>
                <p className='font-extrabold text-xl pt-6'>
                 Procurando conteúdo de qualidade?
                </p>
                <p className='font-normal text-xl pt-2'>
                Pode deixar que a gente toca pra você :)  
                </p>
            </div>

            <div className='mt-[100px] flex gap-[50px] lg:gap-[250px] lg:w-[600px]'>
                <div className='flex flex-col'>
                    <h5> Mapa do Site</h5>
                    <ul className='pt-[50px] text-gray-400 flex flex-col gap-4'>
                        <Link href='#'><li>Quem somos</li></Link>
                        <Link href='#'><li> Nossa missão</li></Link>
                        <Link href='#'><li> Nosso processo</li></Link>
                        <Link href='#'><li>Nossos projetos</li></Link>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h5> Contato</h5>
                    <ul className='pt-[50px] flex flex-col gap-4'>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5521995000199" target='_blank' className='flex items-center gap-2 text-gray-400'>
                               <Image src={zap} width={24} height={24} alt=''/>
                               (21) 99500-0199
                            </a>
                        </li>
                        <li>
                            <a href="" className='flex items-center gap-2  text-gray-400'>
                               <Image src={insta} width={24} height={24} alt=''/>
                               <p>@toca.lab</p>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


        </div>
      
        <div className='w-full py-4 bg-inherit'>
            <div className='max-w-7xl w-full mx-auto flex flex-col items-center gap-4 lg:flex-row justify-between  '>
                <small>
                    Todos os Direitos Reservados - 2024
                </small>
                <small>
                    Toca Lab - Produtora Áudio Visual
                </small>
                <small>
                    Desenvolvido por Matheus Damião
                </small>
            </div>
        </div>
    </div>
  )
}

export default FooterSection
