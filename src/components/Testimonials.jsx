import React from 'react'
import { IoIosStar } from "react-icons/io";
import todobo from '../../public/assets/todobo.jpg'
import shan from '../../public/assets/shan.jpg';
import sideed from '../../public/assets/sideed.jpg';
import lix from '../../public/assets/lix.jpg'
import Companys from './Companys';
const Testimonials = () => {
  return (
    <>
    <div className='h-[1840px] md:h-[990px] bg-blue-950'>
        <h1 className='text-white text-4xl p-2 font-semibold'>Testimonials</h1>


        <div className='text-center flex md:flex-row flex-col items-center justify-between px-4 flex-wrap space-y-2'>

        <div className='w-[400px] h-[430px] border border-white rounded-lg'>
            <p className='px-4 py-6 text-white'>"SkillUp Technology delivered exceptional solutions that improved our operations at Aafi Health Services. Their professionalism, expertise, and communication were outstanding. We're grateful for their dedication and look forward to future collaborations."</p>
            <div className='flex items-center justify-center space-x-4 text-2xl text-yellow-500 mt-2'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <img src={todobo} alt="" className='w-20 rounded-full block m-auto mt-8'/>
            <h4 className='text-white font-bold'>Dr. Mahamed Areis Tahir</h4>
            <p className='text-gray-400 '>CEO & Founder of Aaﬁ Health Services</p>
        </div>


        <div className='w-[400px] h-[430px] border border-white rounded-lg'>
            <p className='px-6 py-6 text-white'>"During the Siraad campaign, SkillUp impressed us by attracting new customers and enhancing our company's image through modern and effective digital marketing strategies. We sincerely thank the entire SkillUp team for their exceptional work."</p>
            <div className='flex items-center justify-center space-x-4 text-2xl text-yellow-500 mt-2'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <img src={shan} alt="" className='w-20 rounded-full block m-auto mt-8'/>
            <h4 className='text-white font-bold'>Abdibasid bedri ismail</h4>
            <p className='text-gray-400 '>Abdibasid bedri ismail</p>
        </div>

        <div className='w-[400px] h-[430px] border border-white rounded-lg'>
            <p className='px-6 py-6 text-white'>"On behalf of Daray Agribusiness, we extend our deepest gratitude to SkillUp, a premier technology platform, for providing us with a comprehensive design and branding solution. Thank you to the entire SkillUp team."</p>
            <div className='flex items-center justify-center space-x-4 text-2xl text-yellow-500 mt-2'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <img src={sideed} alt="" className='w-20 h-20 rounded-full block m-auto mt-8'/>
            <h4 className='text-white font-bold'>Abdihakim ibrahim</h4>
            <p className='text-gray-400 '>General Manager, Darey Agribusiness</p>
        </div>


        <div className='w-[400px] h-[440px] border border-white rounded-lg'>
            <p className='px-6 py-6 text-white'>"SkillUp has been instrumental in our success in integrating Dugsiiye with the Ebirr mobile money service. Their expertise in software development made a significant impact on this project. The team was professional, responsive, and dedicated to delivering high-quality results. We couldn't have asked for a better partner."</p>
            <div className='flex items-center justify-center space-x-4 text-2xl text-yellow-500 mt-2'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <img src={lix} alt="" className='w-20 h-20 rounded-full  block m-auto mt-8'/>
            <h4 className='text-white font-bold'>Mohamud Osman</h4>
            <p className='text-gray-400 '>Ceo of Dugsiiye
            </p>
        </div>

        </div>
        
    </div>
    <Companys/>
    </>
  )
}

export default Testimonials;