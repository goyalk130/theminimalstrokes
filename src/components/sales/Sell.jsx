"use client"
import React from 'react'
import Button from '../button/Button'
import {Unica_One} from "next/font/google"



const unicaone = Unica_One({subsets:["latin"],weight:["400"]})
const Sell = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dk0qsqbcy/image/upload/v1687809702/DreamShaper_v6_An_image_illustration_of_majestic_dark_greenish_0_uxnbxj.jpg')] bg-cover  w-full p-40">
        <div className='w-full h-full flex gap-24 flex-col justify-center items-start grayscale-0'>
            <div className={`${unicaone.className} flex-grow text-primary text-8xl`}><h2>Elevate your memories with minimal strokes. dive in now</h2></div>
            <div className='flex-grow gap-4 flex flex-row'>
                <Button name={"Shop Now"} color={"primary"} textcolor={"text"} func={()=>{console.log("shop now")}} />
                <Button name={"Browse Gallery"} color="secondary" textcolor={"text"} func={()=>{console.log("shop now")}} />
            </div>
        </div>
    </div>
  )
}

export default Sell