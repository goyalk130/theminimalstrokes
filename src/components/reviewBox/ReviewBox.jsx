import React from 'react'

const ReviewBox = ({review,name}) => {
  return (
    <div className=' bg-highlight flex flex-col w-1/4 rounded-2xl  p-10'>
            <div className='flex flex-col justify-start content-between h-full  gap-10 w-full'>
                <div className='flex inline w-1/4 rounded-full overflow-hidden'><img className='w-full h-fit' src="https://res.cloudinary.com/dk0qsqbcy/image/upload/v1687811504/DreamShaper_v6_a_background_full_of_colors_and_popping_digita_0_s5xmcz.webp" /></div>
                <div className=' text-primary text-xl flex-grow'><h3>{review}</h3></div>
                <div className=' text-primary text-2xl'><h2>{name}</h2></div>
            </div>
    </div>  
  )
}

export default ReviewBox