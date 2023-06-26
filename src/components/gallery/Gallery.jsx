import React from 'react'
import GalleryComp from '../galleryCom/GalleryComp'

const Gallery = () => {

  const galleryData = [
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"1.jpg"},
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"2.jpg"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"3.jpg"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"4.jpg"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"5.jpg"
    },
  ]
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative bg-[#B08968] p-10 2xl:p-20 m-0'>
    <div className='w-full h-full pattern absolute top-0 left-0'></div>
        {galleryData.map((item,keyval)=>(
          <GalleryComp key={keyval} title={item.title} desc={item.desc} url={item.url}/>
        ))}
    </div>
  )
}

export default Gallery

