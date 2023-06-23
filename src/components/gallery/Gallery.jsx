import React from 'react'
import GalleryComp from '../galleryCom/GalleryComp'

const Gallery = () => {

  const galleryData = [
    {
      title:"Culpa nisi non ipsum reprehenderit",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
    {
      title:"Culpa nisi non ipsum reprehenderit",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
    {
      title:"Culpa nisi non ipsum reprehenderit",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
    {
      title:"Culpa nisi non ipsum reprehenderit",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
    {
      title:"Culpa nisi non ipsum reprehenderit",
      desc:"Exercitation elit laboris culpa officia qui eu. Reprehenderit do deserunt dolor labore culpa ipsum ullamco dolore minim sit. Ea id magna enim id commodo voluptate duis ad qui deserunt non ea.",
      url:"https://instagram.fjai1-2.fna.fbcdn.net/v/t39.30808-6/354251440_232971882825696_1298585836395405273_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=jzxlqevosr0AX_Pr6TB&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEyNTUxNjM0NDA0ODYwNzQwNQ%3D%3D.2-ccb7-5&oh=00_AfCqHu9lEW3kr03TrAvPl8wgYEOqDrOeUUGseMkQYCW9Ag&oe=64999985&_nc_sid=ee9879"
    },
  ]
  return (
    <div className='w-screen grid grid-cols-3 relative bg-[#B08968] p-20 m-0'>
    <div className='w-screen h-full pattern absolute top-0 left-0'></div>
        {galleryData.map((item,key)=>(
          <GalleryComp key title={item.title} desc={item.desc} url={item.url}/>
        ))}
    </div>
  )
}

export default Gallery

