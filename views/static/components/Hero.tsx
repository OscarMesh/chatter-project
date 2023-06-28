import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <div
      className="
  bg-[url('/assets/images/hero.png')] bg-cover bg-center 
  md:h-[calc(100vh-100px)] bg-no-repeat
  h-[calc(100vh-70px)] 
    flex flex-col justify-center items-center
    bg-opacity-50 bg-blend-multiply bg-black 
    px-6
  "
    >
      <div className="max-w-[984px] flex flex-col space-y-6">
        {/* content */}
        <h2 className="text-[28px] md:text-[48px] text-white font-semibold">
          Welcome to Chatter: A Haven for Text-Based Content
        </h2>
        <p className="text-[16px] md:text-[24px] text-white font-medium">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <Button onClick={() => {}}>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
