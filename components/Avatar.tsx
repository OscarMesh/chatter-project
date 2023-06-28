"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <div className="relative">
      <div
        className="
          relative 
          inline-block 
          rounded-full 
          overflow-hidden
          h-9 
          w-9 
          md:h-11 
          md:w-11
        "
      >
        <Image
          fill
          src={user?.image || "/assets/images/placeholder.jpg"}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
