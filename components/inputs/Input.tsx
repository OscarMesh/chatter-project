import clsx from "clsx";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
  disabled?: boolean;
  iconRight?: IconType;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required = false,
  register,
  errors,
  className,
  disabled = false,
  iconRight: Icon,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const hasIconRight = type !== "password" && Icon;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(
            "form-input block w-full rounded-md border-0 shadow-sm py-3 px-3 text-gray-900 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary",
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default",
            hasIconRight && "pr-10", // Add padding for iconRight
            className
          )}
          {...register(id, { required })}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <MdOutlineVisibility className="h-5 w-5 text-gray-400" />
            ) : (
              <MdOutlineVisibilityOff className="h-5 w-5 text-gray-400" />
            )}
          </div>
        )}
        {hasIconRight && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Input;
