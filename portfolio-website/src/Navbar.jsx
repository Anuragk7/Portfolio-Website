import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
   
  return (
    <nav className="bg-gray-800 py-4 navbar text-lg ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold mb-4 md:mb-0 p-2">Portfolio</div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-2">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" hover:text-gray-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" hover:text-gray-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" hover:text-gray-300 cursor-pointer"
            >
              Acheivements
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" hover:text-gray-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
