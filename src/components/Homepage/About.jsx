import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='text-slate-900 mt-5'>
      <div className='container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
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
        <div>
            Content
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
