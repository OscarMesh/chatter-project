"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import PostCard from "./components/PostCard";

const FeedWrapper = () => {
  const router = useRouter();
  const handlePost = () => {
    router.push("/dashboard/new");
  };

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
        <Button onClick={handlePost}>Post a Content</Button>
      </div>

      <div className="mt-6 flex flex-col items-center space-y-8">
        <PostCard />
        <PostCard />
        {/* <PostCard /> */}
        {/* <PostCard /> */}
      </div>
    </div>
  );
};

export default FeedWrapper;
