import Image from 'next/image'
import React from 'react'

const GalleryComp = ({title,desc,url}) => {
  return (
    <div className='flex grayscale hover:grayscale-0 duration-200 ease-in-out flex-col justify-center items-start' >
    <div className='flex p-10 px-28 flex-col justify-center items-start' >
        <div className='  '><img  className='rounded-3xl w-full h-fit ' src={url} /></div>
        <div><h2>{title}</h2></div>
        <div><p>{desc}</p></div>
    </div>
    </div>
  )
}

export default GalleryComp