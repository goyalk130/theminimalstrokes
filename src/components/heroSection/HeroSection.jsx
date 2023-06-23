import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen w-full bg-[#EDE0D4]'>
        <div className='h-full w-full flex gap-5 flex-row justify-around items-center '>
                <div className='m-5'>
                    <div className='h-20 w-20 rounded-full bg-[#7F5539]'></div>
                </div>
                <div className='m-5'>
                    <div className='h-20 w-20 rounded-full bg-[#7F5539]'></div>
                </div>
                <div className='m-5'>
                    <div className='h-20 w-20 rounded-full bg-[#7F5539]'></div>
                </div>
        </div>
    </div>
  )
}

export default HeroSection