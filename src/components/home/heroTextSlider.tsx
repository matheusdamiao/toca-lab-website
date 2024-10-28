'use client'
import Image from 'next/image'
import React from 'react'
import bubble from './../../../public/images/red-bubble.svg'

const HeroTextSlider = () => {
  return (
    <div className='whitespace-nowrap overflow-hidden parent bg-black'>
        <div className='inline-block whitespace-nowrap gap-12 child animate-slider text-[#D1D1D1]  py-9'>
            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>

            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'> 
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>

        </div>
        <div className='inline-block whitespace-nowrap child flex-0 gap-12 text-nowrap  animate-slider text-[#D1D1D1]  py-9'>
            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>

            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>


            <div className='inline-block whitespace-nowrap mx-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap gap-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>


            <div className='inline-block whitespace-nowrap gap-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Laboratório criativo</p>
            </div>


            <div className='inline-block whitespace-nowrap gap-8'>
                <Image src={bubble} width={18} height={18} alt='red bubble' className='mr-4 align-middle inline-block'/>
                <p className='text-[30px] inline-block align-middle'>Produtora Audiovisual</p>
            </div>

        </div>
    </div>
  )
}

export default HeroTextSlider
