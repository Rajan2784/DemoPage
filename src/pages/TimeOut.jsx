import React, { useEffect, useState } from "react";

const TimeOut = () => {
  const [hours, setHours] = useState(20);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <div className="w-[90%] mx-auto mt-4 bg-gray-700 rounded-xl p-4 relative">
      <h2 className="text-center font-bold text-2xl text-white">
        Time is runnig out <br /> Grab your spot fast!
      </h2>
      <p className="text-center font-bold text-2xl text-white mt-4">
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>


      <div className="flex items-center justify-center">
        <button className="bg-yellow-500 hover:bg-green-600 transition duration-500 text-white font-semibold rounded-md py-3 px-4 mt-4">
          Register now at ₹499{" "}
          <span className="line-through text-sm">1999</span>
        </button>
      </div>
    </div>
  );
};

export default TimeOut;
