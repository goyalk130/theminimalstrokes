"use client"
import React from 'react'
import {DM_Sans} from "next/font/google"



const dmsans = DM_Sans({subsets:["latin"],weight:["400","500","700"]})


const Button = ({name,color,func,textcolor}) => {
    console.log(color)
  return (
    <div className={`bg-${color} p-3 px-4 rounded-lg flex justify-center items-center` }>
    <button className={`p-0 m-0 text-${textcolor} ${dmsans.className} font-medium`} onClick={func}>{name}</button>
    </div>
  )
}

export default Button