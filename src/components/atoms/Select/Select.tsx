import { optionsType } from "@/lib/types";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: optionsType[];
  placeholder?: string;
}

const Select = ({
  options,
  placeholder,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div className="relative flex items-center backdrop-blur-2xl bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 dark:text-gray-500 transition-all focus-within:border-[#5c24cc] dark:focus-within:border-purple-700 duration-300 sm:h-11 h-10">
      <select
        style={{ fontSize: "16px" }}
        className={`w-full bg-inherit h-full placeholder-gray-400 dark:placeholder-gray-600 outline-none ${className}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
