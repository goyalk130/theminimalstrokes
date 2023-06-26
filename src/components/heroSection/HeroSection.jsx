import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen w-full bg-[#EDE0D4]  bg-cover bg-center bg-text grayscale'>
        <div className='h-full w-full flex gap-5 flex-row justify-center items-center '>
                <div className='m-5w-full justify-center flex '>
                    <div className='w-1/3 rounded-full motion-safe:animate-spin overflow-hidden  duration-[10s] rounded-full bg-[#7F5539]'><img src='minmal2.png' /></div>
                </div>
                
        </div>
        
    </div>
  )
}

export default HeroSection