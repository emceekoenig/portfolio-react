import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Let's get in touch.</p>
          </div>

          <div className="contact-links pt-3">
            <a
              href="mailto:hello@chelseakoenig.com"
              className="hover:text-pink-600 duration-300"
            >
              hello@chelseakoenig.com
            </a>
          </div>
        </div>

        {/* Social icons*/}
        <footer>
          <div className="sm:hidden absolute left-1">
            <ul className="mt-5">
              <li className="inline-block hover:scale-110 duration-300">
                <a
                  className=""
                  href="https://www.linkedin.com/in/cmkoenig/"
                  target="_blank"
                  rel="noreferrer"
                  alt="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>

              <li className="inline-block hover:scale-110 duration-300">
                <a
                  className=""
                  href="https://github.com/emceekoenig"
                  target="_blank"
                  rel="noreferrer"
                  alt="GitHub"
                  title="GitHub"
                >
                  <FaGithub size={30} />
                </a>
              </li>

              <li className="inline-block hover:scale-110 duration-300">
                <a
                  className=""
                  href="mailto:hello@chelseakoenig.com"
                  alt="Email"
                  title="Email"
                >
                  <HiOutlineMail size={30} />
                </a>
              </li>

              <li className="inline-block hover:scale-110 duration-300">
                <a
                  className=""
                  href="https://drive.google.com/file/d/1wGRDVhfpHLNXohIGRz50NOOX5lJ1KsqY/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  alt="Resume"
                  title="Resume"
                >
                  <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
