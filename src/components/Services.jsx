import React from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import software from '../../public/assets/software-icon.png';
import web from '../../public/assets/website-icon.png'
import digital from '../../public/assets/digital-icon.png';
import Future from './Future';

const Services = () => {
  return (
    <>
    <div 
      className="relative h-[400px] text-white items-center"
      style={{ backgroundImage: "url('https://www.weetechsolution.com/wp-content/uploads/2022/04/Laptop-for-Web-Development-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>


      <h1 className='text-center text-4xl font-semibold text-white p-2'>Our Services</h1>

      <div>
      <div className='flex items-center justify-center'>
            <div className='bg-gray-400 bg-opacity-60 p-2 flex items-center justify-center space-x-4'>
                <IoHomeOutline className='text-white'/>
                <p className='text-white font-bold cursor-pointer'>Home</p>
                <FaGreaterThan className='text-white'/>
                <p className='text-red-600'></p>
            </div>
        </div>
      </div>
        
      
    </div>

<div className='md:h-[1160px] h-[2520px]'>
<h1 className='text-center md:text-5xl text-4xl text-black p-2 font-semibold'>Our Services</h1>

<div className='flex md:flex-row flex-col items-center justify-center space-y-4 space-x-4'>
    <div className='w-[490px] h-[660px] border border-white rounded-lg mt-4 bg-gray-300 shadow-lg '>
        <h2 className='text-3xl text-black p-2'>Software Development</h2>
        <p className='text-gray-400 p-2'>partner with us to unlock the potential of innovative software solutions. we focus on understanding your unique business challenges and developing custom software that integrates seamlessly with your operations</p>

        <div className='flex items-center justify-between px-6'>
            <img src={software} alt="" className='md:w-20 w-16'/>
            <button className='text-white border-b-2 border-white'>Contact</button>
        </div>
    </div>

    <div className='space-y-4'>
        <div className='md:w-[460px] w-[490px] h-[320px] border border-white rounded-lg mr-4 bg-gray-300 shadow-lg'>
            <h2 className='text-2xl text-black p-2'>Website
            Development</h2>
            <p className='text-gray-400 p-2'>unlock the potential of your online presence with visually stunning and user-friendly website designed to attract and engage your target audience, our team specializes in creating impactful online experiences that drive customer engagement and turn your visitors into loyal customers, boosting your business growth</p>
            <div className='flex items-center justify-between px-6'>
                <img src={web} alt="" />
                <button className='text-white border-b-2 border-white'>Contact</button>
            </div>
        </div>

        <div className='md:w-[460px] w-[490px] h-[320px] border border-white rounded-lg bg-gray-300 shadow-lg'>
            <h2 className='text-2xl text-black p-2'>Website
            Development</h2>
            <p className='text-gray-400 p-2'>unlock the potential of your online presence with visually stunning and user-friendly website designed to attract and engage your target audience, our team specializes in creating impactful online experiences that drive customer engagement and turn your visitors into loyal customers, boosting your business growth</p>
            <div className='flex items-center justify-between px-6'>
                <img src={web} alt="" />
                <button className='text-white border-b-2 border-white'>Contact</button>
            </div>
        </div>
    </div>


</div>


<div className='flex md:flex-row flex-col items-center justify-between mt-6 space-x-2 space-y-4 px-4'>
    <div className='md:w-[390px] w-[490px] h-[330px] border border-white rounded-lg mt-2 bg-gray-300 shadow-lg'>
        <h1 className='text-3xl text-black p-2'>Branding & DigitalMarketing</h1>
        <p className='text-gray-400 p-2'>transform your brand’s presence with strategic digital marketing and innovative branding solutions. skillup enables you to engage your audience and boost online visibility for exceptional results</p>

        <div className='flex items-center justify-between px-6'>
            <img src={digital} alt="" className='md:h-20 h-16'/>
            <button>Contact us</button>
        </div>
    </div>


    <div className='md:w-[390px] w-[490px] h-[330px] border border-white rounded-lg bg-gray-300 shadow-lg'>
        <h1 className='text-3xl text-black p-2'>Cybersecurity
        Services</h1>
        <p className='text-gray-400 p-2'>protect your business with comprehensive cybersecurity services tailored to your needs, skillup safeguards your digital assets ensuring security and resilience against evolving threats.</p>

        <div className='flex items-center justify-between px-6'>
            <img src={digital} alt="" className='md:20 w-16'/>
            <button>Contact us</button>
        </div>
    </div>

    <div className='md:w-[390px] w-[490px] h-[330px] border border-white rounded-lg bg-gray-300 shadow-lg'>
        <h1 className='text-3xl text-black p-2'>Graphic Design </h1>
        <p className='text-gray-400 p-2'>bring your vision to life with innovative graphic design solutions from skillup. we create visually stunning materials that captivate your audience and enhance your brand identity</p>

        <div className='flex items-center justify-between px-6'>
            <img src={digital} alt="" className='md:h-20 w-16'/>
            <button>Contact us</button>
        </div>
    </div>            
</div>

</div>

<Future />

</>
  );
};

export default Services;
