import React from 'react'
import about from '../../public/assets/about-icon.svg'
import Marketing from './Marketing'

const About = () => {
  return (
    <>
     <div className='mt-4 flex md:flex-row flex-col  items-center justify-between px-10 md:space-x-10 space-y-10'>
        <div>
            <img src={about} alt="" />
        </div>

        <div>
            <a href="" className='text-red-600 text-xl font-semibold p-2'>About Us</a>
            <h1 className='text-4xl p-2'>Our mission is to empower businesses by optimizing their digital landscape.</h1>
            <p className='p-2 text-gray-400 w-[500px]'>Skillup offers a comprehensive suite of technology services, from software development to digital marketing. We are dedicated to enhancing your business operations and driving your success.</p>
            <button className='border border-blue-300 hover:border-blue-500 hover:translate-x-1 duration-100 px-4 py-2'>Learn more</button>
        </div>
    </div>

    <Marketing />
    </>
   
  )
}

export default About