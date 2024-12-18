"use client"
import SocialSignIn from '@/components/shared/SocialSignIn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const page = () => {
  const handleSignUp = async (event) =>{
    event.preventDefault();
    const newuser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    // console.log(newuser)
    const resp = await fetch("http://localhost:3000/signup/api",{
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "content-type" : "application/json"
      }
    })
    console.log(resp);
    if(resp.status === 200){
      event.target.reset()
    }
  }
  return (
    <div className='container px-24 mx-auto py-24'>
      <div className='grid grid-cols-2 gap-12 items-center'>
        <div>
            <Image src='/assets/images/login/login.svg' height="540" width="540" alt='login Image'/>
        </div>
        <div className='border-2 p-12'>
        <h6 className='text-3xl font-semibold text-center mb-12'>Log In</h6>
            <form onSubmit={handleSignUp} action=''>
            <label htmlFor='name'>Name</label><br/>
            <input type="text" name='name' placeholder="Your Name" className="mt-3 input input-bordered w-full" /> <br/><br/>
            <label htmlFor='email'>Email</label><br/>
            <input type="text" name='email' placeholder="Your Email" className="mt-3 input input-bordered w-full" /> <br/><br/>
            <label htmlFor='password'>Password</label><br/>
            <input type="password" name='password' placeholder="Your Password" className="mt-3 input input-bordered w-full" />
            <br/><br/>
            <button type='submit' className='w-full btn btn-primary'>Sign Up</button>
            </form>
            <div>
                <h6 className='my-12 text-center'>Or Sign Up With</h6>
                <SocialSignIn/>
                <h6 className='my-12 text-center'>Already have an account ? <Link className='text-primary font-semibold' href={'/login'}>Log In</Link></h6>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
