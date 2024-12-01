import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='text-slate-900 mt-5 mb-3'>
      <div className='container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <div className="relative">
        <Image
          src="/assets/images/about_us/person.jpg"
          alt="logo of author"
          width={800}
          height={50}
          className="object-cover" // Maintain aspect ratio
        />
        <Image
          src="/assets/images/about_us/parts.jpg"
          alt="logo of author"
          width={350}
          height={80}
          className="absolute bottom-3 right-4 border-10 border-white object-cover"
        />
      </div>
        <div className='full'>
            <h1 className='text-red-700'>About Us</h1>
            <h1 className='text-5xl'>We are qualified & experienced in this field</h1>
            <p>
              Our mission is to achieve customer satisfaction by providing quality services with competitive prices, commitment and on-time delivery.
              Our vision is to be known as the reliable, innovative and user friendly web & software service provider in the IT industry of Bangladesh at the same time creating more employment opportunities for the youth. We believe in working with accuracy and quality.
            </p>
            <button className='btn btn-success'>Get More Info</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
