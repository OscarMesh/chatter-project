import Button from "@/components/Button";
import React from "react";

const Blog = () => {
  return (
    <div className="-full w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0 md:py-[96px] p-4">
      <div className="flex space-x-6 md:space-x-0 md:flex-col md:space-y-6">
        <div className="rounded-full overflow-hidden">
          <img
            alt="Adebobola Muhydeen"
            src="https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
            className="object-cover h-16 w-16 md:h-32 md:w-32"
          />
        </div>
        <div className="rounded-full overflow-hidden">
          <img
            alt="Adebobola Muhydeen"
            src="https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
            className="object-cover h-16 w-16 md:h-32 md:w-32"
          />
        </div>
        <div className="rounded-full overflow-hidden">
          <img
            alt="Adebobola Muhydeen"
            src="https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
            className="object-cover h-16 w-16 md:h-32 md:w-32"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-6 md:max-w-[60%]">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Write, read and connect with great minds on chatter
        </h3>
        <p>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <Button onClick={() => {}}>Get Started</Button>
      </div>
    </div>
  );
};

export default Blog;
