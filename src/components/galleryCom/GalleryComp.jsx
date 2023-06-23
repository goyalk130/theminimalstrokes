import Image from 'next/image'
import React from 'react'
import {Unica_One} from "next/font/google"


const unicaone = Unica_One({subsets:["latin"],weight:["400"]})
const GalleryComp = ({title,desc,url}) => {
  return (
    <div className=' grayscale  p-2 px-20 hover:grayscale-0 group duration-200 ease-in-out ' >
    <div className='flex w-full p-4 rounded-3xl  flex-col gap-4 justify-center items-start border-solid border-[1px] border-[#35101000] group-hover:border-[#35101045]' >
        <div className='rounded-3xl w-full h-fit overflow-hidden'><img  className='group-hover:scale-125 duration-200 ease-in-out ' src={url} /></div>
        <div><h2 className={`${unicaone.className} text-3xl`}>{title}</h2></div>
        <div><p className='text-xl text-white'>{desc}</p></div>
    </div>
    </div>
  )
}

export default GalleryComp