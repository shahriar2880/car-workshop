import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <button className="btn flex items-center justify-center text-primary">
        <FcGoogle />
      </button>
      <button className="btn flex items-center justify-center text-primary">
        <BsGithub />
      </button>
      <button className="btn flex items-center justify-center text-primary">
        <FaFacebook />
      </button>
    </div>
  );
};

export default SocialSignIn;
