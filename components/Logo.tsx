import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-primary bold text-[20px] lg:text-[24px]">CHATTER</h1>
    </Link>
  );
};

export default Logo;
