import React from "react";
import HeroLeft from "../components/HeroLeft";
import Header from "../components/Header";

const Hero = () => {
  return (
    <div className="w-full h-full pt-3">
      {/* This is the navigation bar */}
      <Header />
      {/*  This is the main container for the hero section */}
      <main className="w-[90%] mx-auto lg:mt-10 sm:mt-5 md:mt-5 mt-5">
        <div className="flex flex-wrap justify-between gap-3 items-center h-full">
          {/*  The left side of the hero section, contains a title and description */}
          <HeroLeft />
          <div>
            <div className="w-full h-full rounded-lg overflow-hidden shadow-md shadow-yellow-400">
              <img
                src="https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
