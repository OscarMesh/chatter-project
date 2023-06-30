"use client";
import Button from "@/components/Button";
import React from "react";

const NewPostWrapper = () => {
  return (
    <div className="">
      {/* feed top */}

      <div className="flex justify-between">
        {/* feed top left */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold uppercase">Feed</h3>
          <p className="text-sm text-gray-400">
            Explore different content you’d love
          </p>
        </div>
        {/* feed top right */}
        <Button onClick={() => {}}>Post a Content</Button>
      </div>
    </div>
  );
};

export default NewPostWrapper;
