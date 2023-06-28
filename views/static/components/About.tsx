import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen w-[95%] md:w-[80%] mx-auto flex flex-col sm:flex-row md:justify-between justify-center space-y-6 md:py-[96px] p-4">
      <div className="md:max-w-[50%] w-full flex flex-col space-y-6">
        <h1 className="md:text-4xl text-2xl">About Chatter</h1>
        <p className="md:text-xl text-[16px]">
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional
          bookworm’s heaven and a blog to get access to more text based content.
          Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for
          all individuals, regardless of their backgrounds or beliefs. By
          promoting dialogue and understanding, we strive{" "}
        </p>
      </div>
      <div className="cover">
        <Image
          alt="about"
          src="/assets/images/about.png"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default About;
