interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean;
}

const ActionButton = ({
  icon,
  label,
  onClick,
  danger = false,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] cursor-pointer font-medium
        border transition-all duration-150 active:scale-95
        ${
          danger
            ? "border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500/20"
            : "border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
};

export default ActionButton;
