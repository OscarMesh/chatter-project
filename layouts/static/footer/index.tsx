import Logo from "@/components/Logo";
import React from "react";

const Footer = () => {
  return (
    <div
      className="h-full bg-[#FFEDCC] flex flex-col md:flex-row 
 md:justify-between items-center
    p-[16px] md:px-[10%] md:py-[64px]"
    >
      <Logo />

      <div className="max-w-[70%] w-full flex flex-col md:flex-row md:justify-between">
        <div>
          <h4 className="text-lg font-semibold">Explore</h4>
          <ul className="mt-2 md:space-y-6">
            <li>
              <a href="#">community</a>
            </li>
            <li>
              <a href="#">Trending blogs</a>
            </li>
            <li>
              <a href="#">Chatter for teams</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="mt-2 md:space-y-6">
            <li>
              <a href="#">Support docs</a>
            </li>
            <li>
              <a href="#">Join slack</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Official blog</h4>
          <ul className="mt-2 md:space-y-6">
            <li>
              <a href="#">Official blog</a>
            </li>
            <li>
              <a href="#">Engineering blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
