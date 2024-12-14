import React from "react";
import ai from "../../public/assets/ai.png";
import Service from "./Service";

function Home() {
  return (
    <>
      <section className="bg-gradient-to-l from-red-700  opacity-120 text-black h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              Your <span className="px-2 py-0 rounded-xl bg-red-700 text-white">Digital</span> Transformation Partner
            </h1>
            <p className="text-lg mb-6">
              Welcome to SkillUp, your trusted partner in technology services
              and East Africa's leading IT provider. We develop business
              solutions, innovate strategies, and foster sustainable growth in
              the technological landscape.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={ai}
              alt="Robot Hand"
              className="w-[300px] h-auto md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>
      <Service />
    </>
  );
}

export default Home;
