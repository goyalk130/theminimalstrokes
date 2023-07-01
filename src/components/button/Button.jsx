"use client"
import React from 'react'
import {DM_Sans} from "next/font/google"



const dmsans = DM_Sans({subsets:["latin"],weight:["400","500","700"]})


const Button = ({name,color,func,textcolor}) => {
    const s = "bg-"+color
    console.log(s)
  return (
    <div className={`${s} p-2 px-3 lg:p-3 lg:px-4 lg:rounded-lg rounded-md flex justify-center items-center` }>
    <button className={`p-0 m-0 text-${textcolor} ${dmsans.className} font-medium`} onClick={func}>{name}</button>
    </div>
  )
}

export default Button