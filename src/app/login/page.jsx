"use client"
import Image from 'next/image'
import React from 'react'
import {signIn} from "next-auth/react"
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import SocialSignIn from '@/components/shared/SocialSignIn';

const page = () => {
  const router = useRouter()
  const handleLogin = async (event) =>{
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    const  resp = await signIn('credentials',{
      email,password, redirect : false
    });
    if(resp.status === 200){
      router.push('/')
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
            <form onSubmit={handleLogin} action=''>
            <label htmlFor='email'>Email</label><br/>
            <input type="text" name='email' placeholder="Your Email" className="mt-3 input input-bordered w-full" /> <br/><br/>
            <label htmlFor='email'>Password</label><br/>
            <input type="text" name='password' placeholder="Your Password" className="mt-3 input input-bordered w-full" />
            <br/><br/>
            <button type='submit' className='w-full btn btn-primary'>Log In</button>
            </form>
            <div>
                <h6 className='my-12 text-center'>Or Sign In With</h6>
                <SocialSignIn/>
                <h6 className='my-12 text-center'>Not have an account ? <Link className='text-primary font-semibold' href={'/signup'}>Sign Up</Link></h6>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
