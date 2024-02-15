import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const AboutRight = () => {
  return (
    <div className="rounded-md p-3 bg-gray-700 w-full h-full flex-1">
      <p className="text-white mb-1 tracking-wider">
        
        <strong><FaRegHandPointRight className="inline" /> Expert-Led Courses:</strong> Our online coding boot camps are
        carefully curated to provide you with the latest insights and knowledge
        from industry experts.{" "}
      </p>

      <p className="text-white mb-1 tracking-wider">
        <strong><FaRegHandPointRight className="inline" /> Career Advancement:</strong> We understand the importance of
        acquiring in-demand skills to secure a job or progress in your career.
        Our programs are designed to equip you with practical, job-ready skills.
      </p>

      <p className="text-white mb-1 tracking-wider">
        <strong><FaRegHandPointRight className="inline" /> Community Engagement:</strong> Joining Workshop UTMKM 2024 means
        becoming part of a vibrant community of developers, designers, and tech
        enthusiasts. Through interactive workshops, networking events, and
        collaborative projects, you'll have the opportunity to connect with
        like-minded individuals and expand your professional network.
      </p>

      <p className="text-white text-balance tracking-wider">
        <strong><FaRegHandPointRight className="inline" /> Personalized Learning: </strong> We recognize that everyone
        learns at their own pace. That's why our flexible learning platform
        allows you to tailor your learning experience to fit your schedule and
        learning style.
      </p>
    </div>
  );
};

export default AboutRight;
