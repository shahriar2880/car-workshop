import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='text-slate-900 mt-5 mb-20'>
      <div className='container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className="relative">
        <Image
          src="/assets/images/about_us/person.jpg"
          alt="logo of author"
          width={600}
          height={50}
          className="object-cover" // Maintain aspect ratio
        />
        <Image
          src="/assets/images/about_us/parts.jpg"
          alt="logo of author"
          width={350}
          height={80}
          className="absolute -bottom-12 right-12 object-cover"
          style={{ border: '10px solid white' }}
        />
      </div>
      <div className="space-y-10 ">
        <h1 className="text-red-700 font-bold">About Us</h1>
        <h2 className="text-5xl font-bold">We are qualified & experienced in this field</h2>
        <p>
          Our mission is to achieve customer satisfaction by providing quality services with competitive prices, commitment, and on-time delivery. Our vision is to be known as the reliable, innovative, and user-friendly web & software service provider in the IT industry of Bangladesh, while also creating more employment opportunities for the youth. We believe in working with accuracy and quality.
        </p>
          <button className="btn btn-success">Get More Info</button>
    </div>
      </div>
      </div>
    </div>
  )
}

export default About
