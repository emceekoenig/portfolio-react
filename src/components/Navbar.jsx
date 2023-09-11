import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-white.ico";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-gray-300">
      <Link to="home">
        <div className="hover:cursor-pointer">
          <img
            src={Logo}
            alt="Chelsea Koenig Logo"
            style={{ width: "50px" }}
          />
        </div>
      </Link>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/cmkoenig/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-100">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/emceekoenig"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:hello@chelseakoenig.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1wGRDVhfpHLNXohIGRz50NOOX5lJ1KsqY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
