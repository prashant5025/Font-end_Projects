import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // const [isShown, setIsShown] = React.useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px]  mx-auto px-4 text-gray-400 bg-[#0b0c0b]">
      <h1 className="text-2xl text-center text-white">Navbar</h1>

      <ul className="md:flex justify-items-center gap-8 hidden">
        <li className="px-2">Home</li>
        <li className="px-2">About</li>

        <li className="px-2">Contact Us</li>
        <li className="px-2">Projects</li>
      </ul>
      

      <div onClick={handleNav} className="md:hidden">
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}      
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 md:w-[60%] h-full flex flex-col items-center justify-center text-4xl border-r border-r-gray-900 bg-[#0b0c0b] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed top-0 left-[-100%]"
        }>
        <li className="py-4 mt-4">Home</li>
        <li className="py-4 mt-4">About</li>
        <li className="py-4 mt-4">Contact Us</li>
        <li className="py-4 mt-4">Projects</li>
      </ul>
      <button className="px-3 py-1 hidden md:block">Get in Touch</button>
    </div>
  );
};

export default Navbar;
