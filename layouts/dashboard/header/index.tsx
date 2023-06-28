import Avatar from "@/components/Avatar";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const DashboardHeader = () => {
  return (
    <div className="fixed lg:static inset-0 w-full max-h-[50px] lg:max-h-[70px] bg-white border-b z-40">
      <div className="lg:static w-[93%] lg:w-[90%] mx-auto py-[10px] lg:py-[10px] flex justify-between items-center">
        {/* search bar */}
        <div className="flex border-gray-300 gap-2 px-4 py-2 rounded-md items-center border ">
          <BsSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none focus:ring-0"
          />
        </div>
        {/* notification */}

        {/* user profile */}
        <div className="flex items-center gap-2">
          <Avatar />
          <Link href="/dashboard/notifications">
            <IoNotificationsOutline className="text-gray-400" size={30} />
          </Link>
        </div>

        {/* dropdown */}
      </div>
    </div>
  );
};

export default DashboardHeader;
