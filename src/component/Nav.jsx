// Nav.jsx
import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from "../assets/logo.jpg"

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/Services" },
    { name: "About Us", link: "/About Us" },
    { name: "Blogs", link: "/Blogs" },
    { name: "Contact", link: "/Contact" },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={logo} className=" w-20 h-20" />
          <span>DROP_TAXI</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 space-x-4 ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li
              key={link.name}
              className={`md:my-0 my-7 font-semibold relative transition duration-300 ${activeLink === link.name ? 'text-orange-500' : 'text-gray-800'}`}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <a
                href={link.link}
                className="block p-2 cursor-pointer"
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transition-all duration-500"></span>
                )}
              </a>
            </li>
          ))}
          <button className="btn bg-orange-500 text-white font-semibold px-3 py-1 rounded duration-500 md:static">99999 77777</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
