const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | React.ReactNode;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <div className="text-base font-medium text-gray-900 dark:text-gray-100">
          {value}
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
