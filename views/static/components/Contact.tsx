import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="h-full bg-[#FFEDCC] flex flex-col md:flex-row justify-between 
        items-center space-x-6
        p-[16px] md:px-[15%] md:py-[64px]"
    >
      <div className="rounded-full overflow-hidden">
        <img
          alt="Adebobola Muhydeen"
          src="https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
          className="object-cover h-32 w-32 md:h-64 md:w-64"
        />
      </div>

      <div className="flex flex-col space-y-6 md:max-w-[70%]">
        <p>
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions.”
        </p>
        <p>
          Adebobola Muhydeen, <span>Software developer at Apple</span>{" "}
        </p>

        <Button onClick={() => {}}>Jion Chatter</Button>
      </div>
    </div>
  );
};

export default Contact;
