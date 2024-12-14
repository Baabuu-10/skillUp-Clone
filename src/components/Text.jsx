import React from 'react'
import Companys from './Companys'
import Footer from './Footer'

const Text = () => {
  return (
    <>
    <div className='w-full h-auto bg-white sticky top-0 left-0 p-2'>
        <h1 className='text-4xl font-bold text-black text-center'>We've worked with over <span className='text-red-600 font-bold'>65+</span> companies globally</h1>
    </div>

    <Companys/>
    </>
  )
}

export default Text