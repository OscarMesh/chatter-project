import React from "react";
import Card from "./Card";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";

const Faq = () => {
  return (
    <div className="h-full w-[95%] md:w-[80%] mx-auto flex flex-col items-center space-y-6 md:py-[96px] p-4">
      {/* header */}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-center text-2xl md:text-4xl font-semibold ">
          Why you should join chatter
        </h2>
        <p className="md:text-xl text-[16px]">
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
      </div>

      {/* card */}

      <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0 items-center">
        <Card
          icon={BsGraphUpArrow}
          title="Analytics"
          description="Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
        />
        <Card
          icon={HiUserGroup}
          title="Social interactions"
          description="Users on the platform can interact with posts they like, comment and engage in discussions"
        />
        <Card
          icon={ImNewspaper}
          title="Content creation"
          description="Write nice and appealing with our in-built markdown, a rich text editor"
        />
      </div>
    </div>
  );
};

export default Faq;
