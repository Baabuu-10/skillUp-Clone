import React from 'react'
import visual from '../../public/assets/visual-insights.png'
import Testimonials from './Testimonials';

const Marketing = () => {
  return (
    <>
    <div className='mt-8 flex md:flex-row flex-col items-center justify-between px-4'>
        <div>
            <h4 className='text-red-600 font-semibold text-lg p-2'>Marketing Insights</h4>
            <h2 className='text-4xl font-semibold p-2'>Transforming Business with Data-Driven Insights</h2>
            <p className='p-2'>At SkillUp, we provide advanced data analytics that go beyond metrics. We deliver actionable insights that empower your business to make smarter, faster decisions. Discover how our data-driven strategies translate into measurable outcomes that fuel growth, efficiency, and long-term client success.</p>
        </div>

        <div>
            <img src={visual} alt="" />
        </div>
    </div>
    <Testimonials />
    </>
  )
}

export default Marketing;