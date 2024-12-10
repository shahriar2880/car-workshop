import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
    const handleSocialLogIn = async (provider) => {

    }
  return (
    <div className="flex items-center justify-center space-x-2">
      <button onClick={() => handleSocialLogIn('google')} className="btn flex items-center justify-center text-primary">
        <FcGoogle />
      </button>
      <button onClick={() => handleSocialLogIn('github')} className="btn flex items-center justify-center text-primary">
        <BsGithub />
      </button>
      <button onClick={() => handleSocialLogIn('facebook')} className="btn flex items-center justify-center text-primary">
        <FaFacebook />
      </button>
    </div>
  );
};

export default SocialSignIn;
