import React from 'react'
import ServiceCard from '../card/ServiceCard'

const Services = () => {
  return (
    <div className='text-slate-800 min-h-screen'>
      <div className='text-center container mx-auto'>
        <h3 className=''>Our Services</h3>
        <h2 className='text-4xl font-bold'>Our Service Area</h2>
        <p>First appearing in the early 1900s,[2] many filling stations offered vehicle repair services as part of their full service operation. This once popular trend has declined significantly over the years as many locations found it more profitable to exchange vehicle service bays for grocery isles, which ultimately led to the emergence of the quick oil change industry.</p>
      </div>
      <div className='container mx-auto mt-12 font-bold text-red-700'>
        <ServiceCard/>
      </div>
    </div>
  )
}

export default Services
