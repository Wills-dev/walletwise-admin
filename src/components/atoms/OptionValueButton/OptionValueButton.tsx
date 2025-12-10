interface OptionValueButtonProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionValueButton = ({
  value,
  isSelected,
  onClick,
}: OptionValueButtonProps) => {
  return (
    <button
      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
        isSelected
          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default OptionValueButton;
