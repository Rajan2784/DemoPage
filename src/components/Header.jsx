import React from "react";
import Logo from "../assets/scholarship.png";

const Header = () => {
  return (
    <nav>
      <div className="w-[90%] mx-auto mt-4 flex items-center justify-between ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-10">
          <a
            href="/"
            className="text-gray-200 hover:text-green-500 transition duration-300 ease-in-out font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-200 hover:text-green-500 transition duration-300 ease-in-out font-semibold"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-200 hover:text-green-500 transition duration-300 ease-in-out font-semibold"
          >
            Services
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
