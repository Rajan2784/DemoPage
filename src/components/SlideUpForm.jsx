import React, { useEffect, useState } from "react";

const SlideUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    (isVisible && <div className="w-80 h-80 p-5 bg-gray-500 rounded-xl relative slide-up">
      <h1
        className="absolute top-4 right-4 font-bold text-xl text-yellow-400 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        X
      </h1>
      <form className="flex flex-col justify-center items-center w-full h-full gap-5">
        <h1 className="text-white text-lg font-bold">
          Grab the deal until its over!
        </h1>
        <div className="w-[80%] items-center flex justify-center rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full h-full p-3"
            required
          />
        </div>
        <div className="w-[80%] items-center flex justify-center rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full h-full p-3"
            required
          />
        </div>
        <div>
          <button className="bg-yellow-500 hover:bg-green-600 transition duration-500 text-white font-semibold rounded-md py-3 px-4 mt-4">
            Register now at ₹599{" "}
            <span className="line-through text-sm">1999</span>
          </button>
        </div>
      </form>
    </div>)
  );
};

export default SlideUpForm;
