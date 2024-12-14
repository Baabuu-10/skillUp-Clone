import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import { MdEmail } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import logo from '../../public/assets/skillupLogo.svg'

const Footer = () => {
  return ( 
    <div className='flex md:flex-row flex-col items-center md:justify-start px-4 mt-8 h-[200px] space-x-16'>
        <div>
            <img src={logo} alt="" />
            <p className='p-2'>We are ready to help your company with the <br/> potential for rapid growth.</p>
            <div className='flex items-center justify-start space-x-6 p-2'>
                <FaFacebookF className='text-4xl p-2 border-2 border-gray-400 rounded-full cursor-pointer ' />
                <TfiTwitter className='text-4xl p-2 border-2 border-gray-400 rounded-full cursor-pointer '/>
                <FiLinkedin className='text-4xl p-2 border-2 border-gray-400 rounded-full cursor-pointer '/>
                <IoLogoWhatsapp className='text-4xl p-2 border-2 border-gray-400 rounded-full cursor-pointer '/>
            </div>
        </div>

        <div>
            <h3 className='text-xl font-semibold md:ml-0 mr-60'>Useful Links</h3>
            <div className='flex flex-col p-2'>
            <a href="" className=' hover:text-blue-500 text-gray-400'>Projects</a>
            <a href="" className=' hover:text-blue-500 text-gray-400'>Abut</a>
            <a href="" className=' hover:text-blue-500 text-gray-400'>Service</a>
            <a href="" className=' hover:text-blue-500 text-gray-400'>FAQ's</a>
            </div>
        </div>

        <div>
      <h3 className="text-xl font-semibold md:ml-0 mr-60">Our Company</h3>
      <div className="space-y-4 mt-4">
        <div className="flex items-center gap-4">
          <CiLocationOn className="text-2xl text-red-600" />
          <div>
            <p className="text-gray-400">Jigijga - Ethiopia</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MdOutlineCall className="text-2xl text-red-600" />
          <div>
            <p className="text-gray-400">+252 613406852</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MdEmail className="text-2xl text-red-600" />
          <div>
            <p className="text-gray-400">info@skillup.so</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer