import React from "react";
import { IconType } from "react-icons";

interface CardProps {
  icon?: IconType;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col space-y-6 p-6 rounded-md border max-w-[306px] w-full  h-[324px]">
      <div className="p-5 bg-[#D6D1F8] rounded-full mr-auto ">
        {Icon && <Icon size={30} />}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-[16px]">{description}</p>
    </div>
  );
};

export default Card;
