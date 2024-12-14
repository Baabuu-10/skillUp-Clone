import React from 'react';
import logos from '../../public/logo/logo.json';
import Team from './Team';

const Brands = () => {
  return (
    <>
    <div className='bg-white shadow-md w-full max-w-[1240px] h-auto mt-28 mx-4 space-y-6'>
      {/* Title and Description */}
      <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 px-8'>
        <div className='flex md:flex-row flex-col text-center sm:text-left'>
          <h1 className='text-2xl font-bold'>Trusted by Leading Brands in East Africa</h1>
          <p className='text-gray-400'>We partner with innovative businesses to deliver custom technology solutions across industries.</p>
        </div>
        <div className='text-center sm:text-right'>
          <h2 className='text-2xl font-bold'>
            65 <span className='text-red-600'>+</span>
          </h2>
          <p className='text-gray-400'>Trusted Companies</p>
        </div>
      </div>

      <div className='border-b-2 border-gray-400 my-6'></div>

      {/* Logos Section */}
      <div className='flex md:flex-row flex-col justify-center gap-6'>
        {logos.map((logo, index) => (
          <div key={index} className='flex justify-center'>
            <img 
              src={logo.logo} 
              alt={`Logo ${index}`} 
              className='max-w-[150px] max-h-[100px] object-contain' 
            />
          </div>
        ))}
      </div>
    </div>

    <Team />
    </>
  );
}

export default Brands;
