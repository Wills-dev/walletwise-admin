interface StatChipProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatChip = ({ icon, label, value }: StatChipProps) => {
  return (
    <div className="flex items-center gap-2 flex-1 min-w-[120px] px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
      <span className="text-gray-400 dark:text-gray-500 shrink-0">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
          {label}
        </p>
        <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-100">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatChip;
