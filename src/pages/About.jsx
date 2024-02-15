import React from "react";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

const About = () => {
  return (
    <div id="about" className="w-full h-fit mt-10 pb-3">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-200">
          About us
        </h1>
        <p className="text-clip text-center font-semibold text-white p-2">We believe in empowering individuals with the skills they need to excel in the ever-evolving tech industry</p>
        <div className="flex flex-wrap justify-between h-full items-center gap-3">
          <div>
            <AboutLeft />
          </div>
          <div className="flex-1 w-full h-full">
            <AboutRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
