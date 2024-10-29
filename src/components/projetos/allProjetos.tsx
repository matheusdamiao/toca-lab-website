'use client'
import { getFileAsset } from '@sanity/asset-utils';
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React, { useRef } from 'react'

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

  interface ProjectsClientProps {
    posts: Project[];
  }

const AllProjetos = ({posts}: ProjectsClientProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);


  return (
    <div className='px-6 lg:px-0 flex flex-wrap w-full mx-auto max-w-7xl gap-16 py-[100px]'>
      {posts.map((project, index)=>{
            const video = getFileAsset(posts[index].video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'});
            return(
              <div key={index} className='group h-[500px] transition-all w-[600px] object-cover relative '>
                <p className='group-hover:hidden flex transition-all items-center justify-center text-center text-[80px] left-0 right-0 absolute top-[35%] z-50  text-white '>{project.nome}</p>
                <Link href={`/projetos/${project.slug}`}>
                    <button className='group-hover:flex hidden bg-[#C23939] text-white max-w-[250px] py-4 px-4 w-full absolute top-[45%] hover:cursor-pointer z-30 left-0 right-0 mx-auto text-center items-center justify-center'>
                        Ver projeto
                    </button>
                </Link>
                <video
                ref={videoRef} src={video.url} muted autoPlay loop className='group-hover:opacity-100 opacity-40 w-full h-full max-h-[600px] object-cover'></video>
              </div>
            )
          })}
    </div>
  )
}

export default AllProjetos
