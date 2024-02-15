import React from "react";

const Offer = () => {
  return (
    <div className="w-[90%] h-full mx-auto mt-4 bg-gray-700 p-4 lg:p-12 rounded-md ">
      <div className="offerEle p-2 lg:p-10 flex flex-wrap border-2 border-white rounded-lg">
        {/* Left container */}
        <div className="w-[70%] lg:border-r-2 left">
          <h1 className="text-white text-xl lg:text-[2rem] font-bold">
            Special Launch Offer (Save INR 1799)
          </h1>
          <div className="text-white pl-2 ">
            <li>Learn the tools to become Professional</li>
            <li>Enjoy the discount price of 499</li>
            <li>The launch offer will expire soon, grab your seat NOW!</li>
          </div>
        </div>

        {/* Right Container */}
        <div className="mt-3 lg:mt-0 w-[30%] pl-4 right text-white">
          <p className="font-semibold">Price of the Program</p>
          <div className="flex flex-wrap justify-start gap-2 items-center">
            <p className="text-yellow-500 text-[2rem] font-bold">₹499</p>
            <p className="line-through text-sm">1999</p>
          </div>
          <button className="p-4 bg-yellow-400 text-gray-800 rounded-lg hover:text-white hover:bg-green-500 transition duration-300">Register now!</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
