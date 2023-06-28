import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label?: string;
  icon?: any;
  active?: boolean;
  onClick?: () => void;
  path: string;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  active = false,
  onClick,
  path,
  
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={path}
        className={clsx(
          `
          group 
          flex 
          gap-x-3 
          rounded-md 
          p-3 
          text-sm 
          leading-6 
          font-semibold 
          text-gray-500 
         ${label !== "Logout" && "hover:text-primary"}
          ${label === "Logout" && "text-red-500"}
        `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
