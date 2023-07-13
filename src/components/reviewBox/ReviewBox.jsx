import React from 'react'

const ReviewBox = ({review,name}) => {
  return (
    <div className='flex-grow bg-minimal flex flex-col w-full rounded-2xl p-3 lg:p-10 m-2'>
            <div className='flex flex-col justify-start content-between h-full gap-4 lg:gap-6 w-full'>
                <div className='flex inline w-1/4 rounded-full overflow-hidden'><img className='w-full h-fit' src="https://res.cloudinary.com/dk0qsqbcy/image/upload/v1687811504/DreamShaper_v6_a_background_full_of_colors_and_popping_digita_0_s5xmcz.webp" /></div>
                <div className='w-48 sm:w-full text-primary text-xs lg:text-base flex-grow'><h3 >{review}</h3></div>
                <div className=' text-primary text-base  lg:text-xl'><h2>{name}</h2></div>
            </div>
    </div>  
  )
}

export default ReviewBox