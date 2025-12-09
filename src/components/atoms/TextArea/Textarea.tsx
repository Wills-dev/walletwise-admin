import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className = "", ...props }: TextareaProps) => {
  return (
    <textarea
      style={{ fontSize: "16px" }}
      className={`backdrop-blur-2xl bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 dark:text-gray-500 transition-all focus-within:border-[#5c24cc] dark:focus-within:border-purple-700 duration-300 p-2 ${className}`}
      {...props}
    ></textarea>
  );
};

export default Textarea;
