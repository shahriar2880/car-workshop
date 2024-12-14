import React from 'react'
import ServiceCard from '../card/ServiceCard'
import {services} from '../../lib/services'

const getServices = async () =>{
  const res = await fetch('http://localhost:3000/Services/api/get-all')
  const services = res.json()
  return services;
}

const Services = async () => {
   
    const {services} = await getServices() 
  return (
    <div className='text-slate-800 mb-24'>
      <div className='text-center container mx-auto'>
        <h3 className=''>Our Services</h3>
        <h2 className='text-4xl font-bold'>Our Service Area</h2>
        <p>First appearing early 1900s,[2] many filling stations offered vehicle repair services as part of their full service operation. This once popular trend has declined significantly over the years as many locations found it more profitable to exchange vehicle service bays for grocery isles, which ultimately led to the emergence of the quick oil change industry.</p>
      </div>
      <div className='container mx-auto justify-items-center mt-12 font-bold text-red-700 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          services?.length > 0 &&  services?.map((service) =>(
                <ServiceCard service={service} key={service._id}/>
            ))
        }
      </div>
    </div>
  )
}

export default Services
