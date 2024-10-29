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

const VideoProject: React.FC<ProjectsClientProps> = ({posts}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
       {posts.map((project, index)=>{
            const video = getFileAsset(posts[index].video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'});
            return(
              <Link key={index} href={`/projetos/${project.slug}`}>
                <div   className='group h-[300px] hover:h-[600px] transition-all w-full object-cover relative '>
                  <p className='group-hover:flex hidden transition-all items-center justify-center text-[60px]  sm:text-[90px] absolute left-[15px] top-[20%] sm:left-[50px] lg:top-[30%] lg:left-[200px] text-white '>{project.nome}</p>
                  <button className='group-hover:flex hidden bg-[#C23939] text-white max-w-[250px] py-4 px-4 w-full absolute left-[15px] top-[40%] sm:left-[50px] lg:top-[55%] lg:left-[200px] text-center items-center justify-center'> Ver projeto</button>
                  <video
                  ref={videoRef} src={video.url} muted autoPlay loop className='w-full h-full max-h-[600px] object-cover'></video>
                </div>
              </Link>
            )
          })}
      
    </div>
  )
}

export default VideoProject

