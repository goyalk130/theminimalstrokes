"use client"
import { signIn } from 'next-auth/react'
import React, { useRef } from 'react'

const Login = () => {
    const userName = useRef("")
    const pass = useRef("")

    async function submit(){
        const result = await signIn("credentials",{
          username:userName.current,
          password:pass.current,
          redirect:true,
          callbackUrl:"/"
        })
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='w-1/2 h-1/3 flex justify-center items-center gap-4 flex-row'>
            <input type='text' placeholder='username' onChange={(e)=>userName.current=e.target.value}></input>
            <input type='password' placeholder='password' onChange={(e)=>pass.current=e.target.value}></input>
            <button onClick={submit}>Submit</button>
        </div>
    </div>
  )
}

export default Login