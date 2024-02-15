import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";

const HeroLeft = () => {
  return (
    <div className="flex flex-col items-start flex-1">
      <p className="text-green-700 font-semibold leading-tight spa">
        Register for your favorite workshop.
      </p>
      <h1 className="font-bold text-white text-4xl mt-2">
        Now learn from workshop,
        <br /> <span className="text-green-600">and build your carrer.</span>
      </h1>
      <div className="pr-3">
        <p className="line-clamp-10 text-lg text-gray-400 mt-4 text-ellipsis text-wrap">
          Learn from the best in the industry. Get the skills you need to get a
          job or advance in your career with our curated list of top rated
          online coding boot camps. Join us at our Workshop UTMKM 2024 and be
          part of the community of developers, designers, and tech enthusiasts.
        </p>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="flex flex-col items-center gap-2 border-2 border-gray-400 p-2 rounded-md">
          <CiCalendarDate className="text-white text-3xl inline-block" />
          <p className="font-bold text-white">3rd March</p>
        </div>

        <div className="flex flex-col items-center gap-2 border-2 border-gray-400 p-2 rounded-md">
          <IoTimeOutline className="text-white text-3xl inline-block" />
          <p className="font-bold text-white">at 1 PM</p>
        </div>

        <div className="flex flex-col items-center gap-2 border-2 border-gray-400 p-2 rounded-md">
          <CiStopwatch className="text-white text-3xl inline-block" />
          <p className="font-bold text-white">2.5 Hours</p>
        </div>
      </div>

      <button className="bg-yellow-500 hover:bg-green-600 transition duration-500 text-white font-semibold rounded-md py-3 px-4 mt-4">
        Register now at ₹599 <span className="line-through text-sm">1999</span>
      </button>
      <a href="#" className="text-sm underline hover:no-underline text-white mt-2">
        click here to get team discount!
      </a>
    </div>
  );
};

export default HeroLeft;
