import React from 'react'
import about3 from '../../public/assets/kow.jpg'
import aboutUs from '../../public/assets/laba.jpg'
import Product from './Product'

const Help = () => {
  return (
    <>
    <div className='bg-gray-700 md:h-screen h-[1480px] flex md:flex-row flex-col items-center justify-between px-16 pt-32 object-cover'>
        <div>
            <h2 className='text-white text-4xl font-bold p-2'>Who is Skillup?</h2>
            <p className='text-gray-400 p-2'>Skillup is dedicated to unlocking East Africa's digital potential by providing industry-leading technology solutions, comprehensive training programs, and strategic partnerships.</p>

            <div className='mt-6 m-8'>
                <img src={about3} alt="" className='w-80 h-[400px] rounded-lg'/>
            </div>
        </div>

        <div>
            <h2 className='text-white text-4xl font-bold p-2 mt-[-50px]'>We help companies with tailored IT solutions to build their digital presence and drive growth.</h2>

            <div className='md:mt-12 mt-8 md:ml-28 ml-0'>
                <img src={aboutUs} alt="" className='w-[430px] h-[400px] rounded-lg'/>
            </div>
        </div>
    </div>
    <Product/>
    </>
  )
}

export default Help