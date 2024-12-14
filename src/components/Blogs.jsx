import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import arday from "../../public/assets/arday.jpg";
import chat from "../../public/assets/chat.jpg";
import cyber from "../../public/assets/cyber.webp";
import Footer from "./Footer";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const studentBlog = {
    title: "Ardayda iyo ChatGPT",
    author: "Skillup Technology",
    date: "Dec 14, 2024",
    content:
      "ChatGPT waxa uu noqday mid kamid ah tools ka ay ardaydu ugu isticmaalka badanyihiin gaar ahaan iney ku qashaan imtaxanka ama ay kaga shaqeeyaan laylis yada loo so direy, si guudna waa hab laga wanagsanyahay marka ay timaado in cilmiga aad baranaysayi...",
    image: arday,
  };

  const cyberBlog = {
    title: "Cyber Security",
    author: "Skillup Technology",
    date: "Dec 14, 2024",
    content:
      "Understanding Cybersecurity: Safeguarding the Digital Realm. In today's interconnected world, cybersecurity has become more critical than ever.",
    image: cyber,
  };

  return (
    <>
      {!selectedBlog ? (
        <div>
          {/* Header Section */}
          <div
            className="relative h-[300px] text-white items-center"
            style={{
              backgroundImage:
                "url('https://www.weetechsolution.com/wp-content/uploads/2022/04/Laptop-for-Web-Development-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <h1 className="text-center text-4xl font-semibold text-white p-2">
              Blogs
            </h1>
            <div>
              <div className="flex items-center justify-center">
                <div className="bg-gray-400 bg-opacity-60 p-2 flex items-center justify-center space-x-4">
                  <IoHomeOutline className="text-white" />
                  <p className="text-white font-bold cursor-pointer">Home</p>
                  <FaGreaterThan className="text-white" />
                  <p className="text-red-600">Blogs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog List Section */}
          <div className="mt-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold p-2">
                Explore Our Recent Blogs Created by SkillUp <br /> Technology
              </h1>
              <p className="text-gray-400">
                Unlock insights, trends, and expert tips in technology and
                innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 items-center justify-center px-20 space-x-4 mt-8 space-y-4">
              {/* Student Blog */}
              <div
                className="cursor-pointer"
                onClick={() => handleBlogClick(studentBlog)}
              >
                <img
                  src={arday}
                  alt=""
                  className="w-[1450px] h-[300px] rounded-lg"
                />
                <h2 className="text-3xl font-bold mt-2">ardayda iyo chatgbt</h2>
                <div className="flex space-x-8">
                  <p className="text-red-300">Skillup Technology</p>
                  <p className="text-gray-400">Dec 14, 2024</p>
                </div>
                <p className="text-gray-400 p-2">
                  Chatgbt waxa uu noqday mid kamid ah tools ka ay ardaydu ugu
                  isticmaalka badanyihiin gaar ahaan iney ku qashaan imtaxanka
                  ama ay kaga shaqeeyaan laylis yada loo so direy...
                </p>
              </div>

              {/* Chat Blog (unchanged) */}
              <div>
                <div className="relative">
                  <img src={chat} alt="" className="rounded-lg cursor-pointer" />
                  <button className="bg-red-400 px-2 rounded-lg text-white absolute top-2 left-2">
                    Blog
                  </button>
                </div>
                <h2>ardayda iyo chatgbt</h2>
                <div className="flex space-x-8">
                  <p className="text-red-300">Skillup Technology</p>
                  <p className="text-gray-400">Dec 14, 2024</p>
                </div>
                <p>
                  Chatgbt waxa uu noqday mid kamid ah tools <br /> ka ay ardaydu
                  ugu isticmaalka badanyihiin gaar ahaan iney ku qashaan
                  imtaxanka ama ay <br /> kaga shaqeeyaan laylis...
                </p>
              </div>

              {/* Cyber Blog */}
              <div
                className="relative cursor-pointer"
                onClick={() => handleBlogClick(cyberBlog)}
              >
                <img
                  src={cyber}
                  alt=""
                  className="rounded-lg w-[355px] cursor-pointer"
                />
                <button className="bg-red-400 px-2 rounded-lg text-white absolute top-2 left-2">
                  Blog
                </button>
                <h2>ardayda iyo chatgbt</h2>
                <div className="flex space-x-8">
                  <p className="text-red-300">Skillup Technology</p>
                  <p className="text-gray-400">Dec 14, 2024</p>
                </div>
                <p>
                  Chatgbt waxa uu noqday mid kamid ah tools <br /> ka ay ardaydu
                  ugu isticmaalka badanyihiin gaar ahaan iney ku qashaan
                  imtaxanka ama ay <br /> kaga shaqeeyaan laylis...
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          {/* Detailed Blog Section */}
          <button
            className="bg-red-400 text-white px-4 py-2 rounded"
            onClick={() => setSelectedBlog(null)}
          >
            Back to Blogs
          </button>
          <h1 className="text-3xl font-bold mt-4">{selectedBlog.title}</h1>
          <p className="text-gray-600">
            {selectedBlog.author} • {selectedBlog.date}
          </p>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-[400px] object-cover rounded-lg mt-4"
          />
          <p className="text-gray-700 mt-4">{selectedBlog.content}</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Blogs;
