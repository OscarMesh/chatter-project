"use client";

import { IconType } from "react-icons";
import clsx from "clsx";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isLoading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isLoading,
  loadingText,
  buttonType = "button",
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={buttonType}
      className={clsx(
        `
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-fit
        ${outline ? "bg-white" : "bg-primary"}
        ${outline ? "border-primary" : "border-primary"}
        ${outline ? "text-primary" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-4" : "py-4"}
        ${small ? "px-6" : "px-8"}
        ${small ? "font-light" : "font-bold"}
        ${small ? "border-[1px]" : "border-2"}
      `,
        className
      )}
    >
      {isLoading ? <span>{loadingText || "Loading..."}</span> : <>{children}</>}
    </button>
  );
};

export default Button;
