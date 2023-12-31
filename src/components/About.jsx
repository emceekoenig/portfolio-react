import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Front End Developer with 8 years of experience working in HR Tech.
            </p>
          </div>
          <div>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals to small-businesses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
