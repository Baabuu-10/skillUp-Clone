import React from 'react';
import victor from '../../public/assets/Vector1.png';
import victor2 from '../../public/assets/Vector2.png';
import icon from '../../public/assets/Icon1.png';
import about from '../../public/assets/ABOUTUS.jpg';
import { IoHome } from "react-icons/io5";
import about2 from '../../public/assets/about3.jpg';
import Brands from './Brands';

const Digital = () => {
  return (

    <>
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 space-x-4 mt-40 gap-6">

      {/* Left Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="w-full h-[250px] shadow-lg rounded-lg">
          <img src={victor} alt="Web Development Icon" className="w-10 h-10 p-2 bg-red-400 rounded-lg m-2" />
          <h2 className="text-2xl font-bold p-2">Web Development</h2>
          <p className="text-gray-400 p-2">Empowering your business with modern and responsive websites designed to convert visitors into loyal customers.</p>
        </div>

        <div className="w-full h-[250px] shadow-lg rounded-lg border-2 border-gray-400">
          <img src={icon} alt="Business Icon" className="bg-red-400 w-10 h-10 p-2 rounded-lg m-2" />
          <h2 className="text-2xl font-bold p-2">Strategic Business Solutions</h2>
          <p className="text-gray-400 p-2">We offer strategic business planning and tech consulting, ensuring your business stays ahead in a competitive digital world.</p>
        </div>

        <div className="w-full h-[250px] shadow-lg rounded-lg border-2 border-gray-400">
          <img src={victor2} alt="Tech Icon" className="bg-red-400 w-10 h-10 rounded-lg p-2 m-2" />
          <h2 className="text-2xl font-bold p-2">Cloud Solutions</h2>
          <p className="text-gray-400 p-2">We provide innovative cloud computing services that help you scale and manage your business securely.</p>
        </div>

        <div className="w-full h-[250px] shadow-lg rounded-lg border-2 border-gray-400">
          <IoHome className="w-10 h-10 bg-red-400 rounded-lg p-2 m-2" />
          <h2 className="text-2xl font-bold p-2">Home Automation</h2>
          <p className="text-gray-400 p-2">We bring the latest in smart home technology, offering solutions that enhance convenience and security.</p>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <p className="text-red-600 font-semibold p-2">WHAT WE DO</p>
        <h2 className="text-2xl font-bold p-2">Empowering East Africa's Digital Future</h2>
        <p className="text-gray-500">Skillup is driving digital transformation across the Somali state and beyond, providing innovative solutions that fuel rapid and measurable business growth.</p>

        <div className="flex flex-col md:flex-row items-start justify-between px-4 mt-4">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-black">How we help your business</h2>
            <ul className="list-disc pl-5 text-gray-500">
              <li>Tailored Software Solutions</li>
              <li>Secure Web Development</li>
              <li>Active involvement</li>
              <li>Mobile App Development</li>
              <li>Strategic Branding & Marketing</li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Read more</button>
          </div>

          <div className="flex-1 relative">
            <img src={about} alt="About us image" className="w-full h-[290px] object-cover rounded-lg" />
            <img src={about2} alt="" className='w-16 h-16 rounded-full p-1 absolute bottom-[-25px] left-29 right-4 bg-white'  />
          </div>
        </div>
      </div>

    </div>

    <Brands/>
    </>
  );
};

export default Digital;
