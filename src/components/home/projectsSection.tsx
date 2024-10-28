import { sanityFetch } from '@/sanity/client';
import { getFileAsset } from '@sanity/asset-utils';
import { div, video } from 'framer-motion/client';
import { SanityDocument } from 'next-sanity';
import React, { useRef } from 'react'
import VideoProject from './videoProject';

interface Project extends SanityDocument {
  _id: string;
  nome: string;
  slug: string;
  date: string;
  description: string;
  image1: any;
  video1: { asset: { _ref: string } };
  tags: string[];
}

const ProjectsSection = async () => {

  const POSTS_QUERY = `*[_type == "post"]{_id, nome, slug, date, description, image1, video1, tags}|order(date desc)`;

  const posts = await sanityFetch<Project[]>({query: POSTS_QUERY});


  return (
    <div className='h-full bg-black'>
      <div className=' px-6 gap-6 bg-inherit lg:gap-0 flex flex-col lg:flex-row-reverse justify-between max-w-7xl mx-auto py-[100px] '>
        <h4 className='text-white font-extrabold  text-[40px] lg:text-[70px] leading-[120%] lg:w-[50%] lg:text-right'>Projetos Selecionados</h4>

        <div className='flex flex-col text-white gap-10'>
          <p className='max-w-[600px] text-lg lg:text-2xl'>Conheça algumas das campanhas que construímos junto de nossos clientes. 
        Da direção de arte ao tráfego pago, tudo aqui é feito sob medida para atender ao seu negócio.
          </p>
          <button className='bg-[#C23939] text-white max-w-[250px] py-4 px-4 w-full '>
            Ver todos os projetos
          </button>
        </div>
        
      </div>

      <div className='flex flex-col w-full h-full'>
          <VideoProject posts={posts}/>
        </div>
    </div>
  )
}

export default ProjectsSection
