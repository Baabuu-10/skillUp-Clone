import { Link } from 'react-router-dom';
import logo from '../../public/assets/skillupLogo.svg';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex items-center justify-between p-2 sticky top-0 w-full shadow-lg md:px-6 px-10 bg-white z-10 h-[60px]'>
            {/* logo */}
            <div>
                <Link><img src={logo} alt="Logo" /></Link>
            </div>

            {/* large screen */}
            <div className='hidden md:flex items-center justify-between gap-6'>
                <Link to="/" className='border-b-2 border-red-600 text-gray-400'>Home</Link>
                <Link to="/about-us" className='hover:border-b-2 border-red-600 text-gray-400'>About Us</Link>
                <Link to="/services" className='hover:border-b-2 border-red-600 text-gray-400'>Services</Link>
                <Link to="/project" className='hover:border-b-2 border-red-600 text-gray-400'>Project</Link>
                <Link to="/blogs" className='hover:border-b-2 border-red-600 text-gray-400'>Blog</Link>
            </div>

            <div className='hidden md:flex bg-red-700 text-white px-4 py-2 rounded-lg'>
                <button>Contact</button>
            </div>

            {/* mobile screen */}
            <div className={`fixed top-0 z-50 bg-white w-80 h-screen shadow-2xl ${open ? "left-0" : "left-[100%]"} md:hidden flex flex-col items-center justify-center space-y-10 hover:translate-x-1 duration-100`}>
                <Link><img src={logo} alt="Logo" /></Link>
                <Link to="/" className='border-b-2 border-red-600 w-60'>Home</Link>
                <Link to="/about-us" className='hover:border-b-2 border-red-600 w-60'>About Us</Link>
                <Link to="/services" className='hover:border-b-2 border-red-600 w-60'>Services</Link>
                <Link to="/project" className='hover:border-b-2 border-red-600 w-60'  >Project</Link>
                <Link to="/blogs" className='hover:border-b-2 border-red-600 w-60'>Blog</Link>
                <button className='bg-red-700 px-4 py-2 rounded-md text-white ml-[-155px]'>Contact</button>
            </div>

            {/* toggle button */}
            <div onClick={() => setOpen(!open)} className="md:hidden">
                <IoMenu className={`text-2xl cursor-pointer ${open ? "hidden" : "block"}`} />
                <IoClose className={`text-2xl cursor-pointer ${open ? "block" : "hidden"}`}  />
            </div>
        </div>
    );
};

export default Header;
