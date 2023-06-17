"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const SigninButton = () => {

    const {data: session} = useSession()

    if(session && session.user){
        return (<div className='flex gap-4 ml-auto'>
                <p className='text-sky-600'>{session.user.name}</p>
                <button onClick={()=>{
                    return signOut()
                }} className='text-red-600'>
                    SignOut
                </button>
        </div>)
    }
  return (
    <button onClick={()=>{
        return signIn()
    }} className='text-green-600'>
        SignIn
    </button>
  )
}

export default SigninButton