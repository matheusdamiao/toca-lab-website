import { sanityFetch } from '@/sanity/client';
import { getFileAsset } from '@sanity/asset-utils';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image'
import React from 'react'
import logo from './../../../../public/images/logo-branca.svg'
import {PortableText} from '@portabletext/react'
import Link from 'next/link';
import ContactSection from '@/components/home/contactSection';
import FooterSection from '@/components/home/footerSection';
import CustomCursor from '@/components/customCursor';
import Menu from '@/components/menu';


const NEXT_PROJECT_QUERY = `*[_type == "post" && _createdAt > $createdAt] | order(_createdAt asc)[0]{
  _id,
  nome,
  slug,
  _createdAt,
  description,
  image1,
  video1,
  tags
}`;

const PREVIOUS_PROJECT_QUERY = `*[_type == "post" && _createdAt < $createdAt] | order(_createdAt asc)[0]{
  _id,
  nome,
  slug,
  _createdAt,
  description,
  image1,
  video1,
  tags
}`;

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

export default async function PageProject({params}: {params: {slug: string} }){
  const PROJECT_QUERY = `*[slug == $slug]`;

    const post = await sanityFetch<Project[]>({query: PROJECT_QUERY, params: {slug: params.slug[0]}});

    const video = getFileAsset(post[0].video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'});
    const video2 = getFileAsset(post[0].video2.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'});


    const nextPost = await sanityFetch<Project>({query: NEXT_PROJECT_QUERY, params: {createdAt: post[0]._createdAt}});
    const previousPost = await sanityFetch<Project>({query: PREVIOUS_PROJECT_QUERY, params: {createdAt: post[0]._createdAt}});

    const previousVideo = previousPost ? getFileAsset(previousPost.video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'}): null;

   
    const nextVideo = nextPost ? getFileAsset(nextPost.video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'}) : null;


    console.log(nextPost);
    console.log(previousPost);

    
  return (
    <div className='bg-black'>
      <CustomCursor/>
      <Menu/>
        <Image src={logo} width={180} height={95} alt='logo' className='absolute w-[120px] top-4 left-0 right-0 mx-auto z-40' />
      

     
            <div className='flex flex-col items-center justify-center relative h-[65svh] bg-black'>
              <video src={video.url} loop muted autoPlay className='absolute top-0 left-0 h-full opacity-25 right-0 w-full object-cover'></video>
              <section className='px-6 pt-10 flex flex-col text-white items-center justify-center z-50 gap-6 lg:gap-10'>
                <h1 className='font-extrabold text-[50px] lg:text-[80px] max-w-[850px] w-full text-center leading-[60px] lg:leading-[78px]'>{post[0].nome}</h1> 
                <p className='text-center'><PortableText value={post[0].post} /> </p>
              </section>  
            </div>

          
          <div className='px-6 flex flex-col py-[150px] items-center justify-center bg-black'>
             <video src={video.url}  controls className=' h-full  w-[800px] object-cover'></video>
             <video src={video2.url}  controls className=' h-full  w-[800px] object-cover'></video>

          </div>
          

         <div className='px-6 max-w-5xl mx-auto flex-wrap flex items-center justify-between pb-[150px]'>
            {previousPost && 
            <Link href={`${previousPost.slug}`} className='flex flex-col'>
              <div className='hover:cursor-pointer text-2xl text-white' >{previousPost.nome}</div>
              {previousVideo && <video controls className='max-w-[400px] w-full' muted src={previousVideo.url}></video>}
            </Link>
            } 
             {nextPost && 
            <Link href={`${nextPost.slug}`}>
              <div className='hover:cursor-pointer text-2xl text-white' >{nextPost.nome}</div>
              {nextVideo && <video controls className='max-w-[400px] w-full' muted  src={nextVideo.url}></video>}
            </Link>
            } 

            
         </div>

         <ContactSection/>

         <FooterSection/>

    </div>
  )
}


