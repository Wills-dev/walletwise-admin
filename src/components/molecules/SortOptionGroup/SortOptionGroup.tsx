import { SortOption } from "@/lib/types";

import OptionValueButton from "../../atoms/OptionValueButton/OptionValueButton";

interface SortOptionGroupProps {
  option: SortOption;
  optionIndex: number;
  selectedValue?: string;
  onSelect: (optionIndex: number, value: string) => void;
}

const SortOptionGroup = ({
  option,
  optionIndex,
  selectedValue,
  onSelect,
}: SortOptionGroupProps) => {
  return (
    <div className="px-4 py-3">
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
        {option.label}
      </div>
      <div className="space-y-1">
        {option.values.map((value, valueIndex) => (
          <OptionValueButton
            key={valueIndex}
            value={value}
            isSelected={selectedValue === value}
            onClick={() => onSelect(optionIndex, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default SortOptionGroup;
