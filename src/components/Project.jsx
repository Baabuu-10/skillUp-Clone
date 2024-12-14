import React, { useState } from 'react';
import { FaGreaterThan } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import one from '../../public/assets/one.jpg';
import two from '../../public/assets/two.jpg';
import three from '../../public/assets/three.jpg';
import four from '../../public/assets/four.jpg';
import five from '../../public/assets/five.jpg';
import { IoMdArrowBack } from "react-icons/io";
import Form from './Form';
import Footer from './Footer';
import Text from './Text';

const Project = () => {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setIsDetailedView(true);
  };

  const handleBackClick = () => {
    setIsDetailedView(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Conditionally render the header section */}
      {!isDetailedView && (
        <div
          className="relative h-[200px] text-white items-center"
          style={{
            backgroundImage: `url(${one})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <h1 className="text-center text-4xl font-semibold text-white p-2">
            Our Services
          </h1>
          <div className="flex items-center justify-center">
            <div className="bg-gray-400 bg-opacity-60 p-2 flex items-center justify-center space-x-4">
              <IoHomeOutline className="text-white" />
              <p className="text-white font-bold cursor-pointer">Home</p>
              <FaGreaterThan className="text-white" />
              <p className="text-red-600">Projects</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="mt-10">
        {isDetailedView ? (
          <>
          <div className="p-4 max-w-4xl mx-auto">
            <button
              onClick={handleBackClick}
              className="text-gray-600 mb-4 flex items-center"
            >
              <span><IoMdArrowBack/> </span> All Projects
            </button>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={selectedImage}
                alt="Detailed Project View"
                className="w-full"
              />
              <div className="p-6 grid grid-cols-2 space-x-4 space-y-4">
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className="text-gray-600">
                11/14/2024</p>
                <h3>Client:</h3>
                <p>
                marwo</p>
                <h3>Overview:</h3>
                <p>Marwo, a renowned local NGO focused on women's development and empowerment, has been a cornerstone of progress and positive change in the region. Recognized for its exceptional work, Marwo continues to uplift communities through innovative programs and initiatives. To support their mission, we developed a professional branding strategy and a modern, user-friendly website designed to enhance their visibility and impact, reflecting their commitment to making a difference.</p>
                <button className='bg-red-600 px-4 py-2 rounded-lg text-white w-28'><span>All Porjects</span></button>
              </div>
            </div>
          </div>
          <Form/>
          <Footer/>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between px-4 space-x-8">
              <h2 className="font-bold text-4xl">
                Take a look at our best projects
              </h2>
              <button className="bg-red-600 px-4 py-2 rounded-lg text-white">
                See More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[one, two, three, four, five].map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => handleCardClick(image)}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="rounded-md shadow-lg"
                  />
                  <h2 className="absolute md:top-80 top-40 left-6 text-4xl text-white">
                    Project {index + 1}
                  </h2>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Text/>
    </>
  );
};

export default Project;
