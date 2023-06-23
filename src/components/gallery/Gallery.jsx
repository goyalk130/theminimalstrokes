import React from 'react'
import GalleryComp from '../galleryCom/GalleryComp'

const Gallery = () => {

  const galleryData = [
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354041341_232972149492336_6119728799473241183_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5fWMkqp1pH8AX9LKOkU&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0Mzg0NzI1MDM0OA%3D%3D.2-ccb7-5&oh=00_AfCtb5wFSmrKANGpNKEAYX6QDnahxMKDBX0ccoPIWs5o3g&oe=64991C70&_nc_sid=ee9879"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354036518_232971976159020_5861938972003482494_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=sBeGgTv_8XoAX9dJrhF&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDU5Mzg4ODkzNQ%3D%3D.2-ccb7-5&oh=00_AfD5ZqPumNkzvutujOaFOjEoUDUJEwGja5PwL_nPHkABbQ&oe=6498EF28&_nc_sid=ee9879"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-1.fna.fbcdn.net/v/t39.30808-6/354039297_232972022825682_131605660952638834_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=5TNY2qm0C98AX9W9tAJ&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0Mzk3MzEzMDg3OQ%3D%3D.2-ccb7-5&oh=00_AfBI7I9pCRyAQQKcIdj6svVgmt9gFQP9rpnvPQjKIyRpPg&oe=64997FA3&_nc_sid=ee9879"
    },
    {
      title:"Photo Wallet Card",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-1.fna.fbcdn.net/v/t39.30808-6/354186177_233411262781758_7986688147883671980_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=x-74ZZLROa0AX-528Jj&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDQ5MzIyODA1Ng%3D%3D.2-ccb7-5&oh=00_AfAr_ZeJVOAfAB6PY5aJQQKGDjvUSEFbJcrFLMBawDCweQ&oe=649A3113&_nc_sid=ee9879"
    },
  ]
  return (
    <div className='w-full grid grid-cols-3 relative bg-[#B08968] p-20 m-0'>
    <div className='w-full h-full pattern absolute top-0 left-0'></div>
        {galleryData.map((item,keyval)=>(
          <GalleryComp key={keyval} title={item.title} desc={item.desc} url={item.url}/>
        ))}
    </div>
  )
}

export default Gallery

