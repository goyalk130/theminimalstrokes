"use client"
import React from 'react'
import Button from '../button/Button'
import {Unica_One} from "next/font/google"



const unicaone = Unica_One({subsets:["latin"],weight:["400"]})
const Sell = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dk0qsqbcy/image/upload/v1687809702/DreamShaper_v6_An_image_illustration_of_majestic_dark_greenish_0_uxnbxj.jpg')] bg-cover  w-full p-10 md:p-20 lg:p-30 xl:p-40">
        <div className='w-full break-normal h-full flex gap-10 md:gap-16 lg:gap-24 flex-col justify-center items-start grayscale-0'>
            <div className={`${unicaone.className} break-words flex-grow text-primary text-4xl md:text-6xl lg:text-7xl xl:text-8xl`}><h2>Elevate your memories with minimal strokes. dive in now</h2></div>
            <div className='flex-grow gap-4 flex flex-row'>
                <Button className="bg-primary" name={"Shop Now"} color="primary" textcolor={"text"} func={()=>{console.log("shop now")}} />
                <Button className="bg-secondary" name={"Browse Gallery"} color="secondary" textcolor={"text"} func={()=>{console.log("shop now")}} />
            </div>
        </div>
    </div>
  )
}

export default Sell