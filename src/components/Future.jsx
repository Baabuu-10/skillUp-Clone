import React from 'react'
import Footer from './Footer'

const Future = () => {
  return (
    <>
    <div className='h-[500px] bg-blue-900 text-center flex items-center justify-center'>
        <div>
            <h1 className='text-white font-bold md:text-4xl text-2xl p-4 text-center'>Empower Your Digital Future with <br /> SkillUp's Expert Solutions.</h1>
            <h3 className='text-white text-2xl font-bold p-2'>Unlock your potential with customized IT solutions, from software <br /> development to digital marketing</h3>

            <div className='flex items-center justify-center space-x-4 mt-6'>
                <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-900 hover:border border-white'>Get Started</button>

                <button className='bg-blue-900 px-4 py-2 rounded-lg text-white font-bold border border-white hover:bg-red-600 '>Contact Us</button>
            </div>
        </div>
    </div>

    <Footer />

    </>
  )
}

export default Future