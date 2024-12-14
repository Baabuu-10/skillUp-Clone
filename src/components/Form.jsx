
import { MdEmail } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import Footer from "./Footer";

const Form = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-between px-10 bg-gray-900 text-white">
      <div className="container mx-auto p-6 md:flex md:justify-between md:items-start gap-8">
        {/* Left Side - Form */}
    
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Company Email"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Company Phone"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
            >
              Send Message
            </button>
          </form>
        </div>

      

        {/* Right Side - Contact Info */}
        <div className="mt-8 md:mt-0 md:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <h3 className="text-4xl font-bold mb-4">Let's talk about your project</h3>
          <p className="text-gray-400 mb-6">
            We're excited to partner with you on your growth journey. Contact us today to uncover tailored solutions
            designed for your unique business needs.
          </p>
          <div className="border border-b-gray-400"></div>
          <div className="space-y-4 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <MdEmail className='text-4xl bg-white text-black p-2 rounded-lg'/>
              <div>
                <h4>Our Email</h4>
                <p className="text-gray-400">info@skillup.so</p>
              </div>
              
            </div>
            <div className="flex items-center gap-4">
                <MdOutlineCall className="bg-white p-2 text-4xl text-black rounded-lg"/>
                <div>
                    <h4>Our Phone</h4>
                    <p className="text-gray-400 text-1lx">+252 613406852</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Form;
