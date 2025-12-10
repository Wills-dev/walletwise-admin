import { MouseEvent } from "react";

import { X } from "lucide-react";

interface ClearButtonProps {
  onClick: (e: MouseEvent<HTMLSpanElement>) => void;
}

const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <span
      onClick={onClick}
      className="mr-1 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full cursor-pointer transition-colors"
      title="Clear selection"
      role="button"
      aria-label="Clear selection"
    >
      <X className="w-4 h-4 text-red-500 dark:text-red-400" />
    </span>
  );
};

export default ClearButton;
