import React from 'react'
import Digital from './Digital'

const Product = () => {
  return (
    <>
    <div className='mt-28 flex md:flex-row flex-col items-center justify-center md:space-x-4 space-y-4 text-center'>
        <div className='w-60 h-16 p-4 rounded-lg shadow-lg' >
            <h4 className='font-bold text-gray-500' >trusted brands <span className='text-2xl font-bold text-black' >62</span> <span className='text-red-600'>+</span></h4>
        </div>

        <div className='w-60 h-16 p-4 rounded-lg shadow-lg' >
            <h4 className='font-bold text-gray-500'  >Happy customers <span className='text-2xl font-bold text-black'>180</span> <span className='text-red-600'>+</span></h4>
        </div>

        <div className='w-60 h-16 p-4 rounded-lg shadow-lg' >
            <h4  className='font-bold text-gray-500' >Projects <span className='text-2xl font-bold text-black'>26</span> <span className='text-red-600'>+</span></h4>
        </div>

        <div className='w-60 h-16 p-4 rounded-lg shadow-lg' >
            <h4 className='font-bold text-gray-500'  >Years of Experience <span className='text-2xl font-bold text-black'>3</span> <span className='text-red-600'>+</span></h4>
        </div>
    </div>

    <Digital />
    </>
  )
}

export default Product