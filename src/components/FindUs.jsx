import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-primary mb-5 font-semibold">Find Us</h3>
      <div className="join join-vertical *:text-secondary w-full rounded-lg *:justify-start *:bg-white">
        <button className="btn join-item">
          {" "}
          <SiFacebook /> Facebook
        </button>
        <button className="btn join-item">
          <AiFillInstagram /> Instagram
        </button>
        <button className="btn join-item">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
