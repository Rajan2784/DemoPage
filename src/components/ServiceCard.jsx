import React from "react";
import SmileIcon from '../assets/misc-5.svg'

const ServiceCard = ({title,description}) => {
  return (
    <>
      <div className="w-60 h-64 bg-green-500 overflow-hidden rounded-lg shadow-md mx-2 relative">
        <div className="rounded-br-[80px] bg-zinc-500 w-full h-full p-2 overflow-hidden">
          <h1 className="text-xl font-bold text-center text-gray-200 z-2">
            {title}
          </h1>
          <p className="text-gray-200 text-center mt-4 line-clamp-[6] z-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
