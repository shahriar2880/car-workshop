import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
    const router = useRouter()
    const session = useSession()
    const handleSocialLogIn =  (provider) => {
        const resp = signIn(provider,{redirect: false})
        // console.log(resp)
    }
    if(session.status === 'authenticated'){
        router.push('/')
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
