import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { data } from '../serviceData/data'

const Services = () => {


  return (
    <div className='w-[90%] mx-auto mt-4 pb-6' id='services'>
      <h1 className='text-4xl font-bold text-center text-gray-200'>Why should You go ahead with us?</h1>

      <div className='flex flex-wrap items-center justify-center mt-8 gap-2'>
        {data.map((item) => {
          return (
            <ServiceCard key={item.id} title={item.title} description={item.description} />
          )
        })}
      </div>

    </div>
  )
}

export default Services
