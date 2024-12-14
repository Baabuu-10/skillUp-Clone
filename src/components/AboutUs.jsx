import React from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import Help from './Help';

const AboutUs = () => {
  return (
    <>
    <div 
      className="w-full h-80 bg-cover bg-center bg-black bg-opacity-75" 
      style={{ backgroundImage: 'url(/assets/ABOUTUS.jpg)' }}
    >
        <h1 className='text-center text-4xl font-semibold text-white p-2'>About Us</h1>

        <div className='flex items-center justify-center'>
            <div className='bg-gray-400 bg-opacity-60 p-2 flex items-center justify-center space-x-4'>
                <IoHomeOutline className='text-white'/>
                <p className='text-white font-sans cursor-pointer'>Home</p>
                <FaGreaterThan className='text-white'/>
                <p className='text-red-600'>About</p>
            </div>
        </div>

    </div>

    <Help/>
    </>
  );
};

export default AboutUs;
