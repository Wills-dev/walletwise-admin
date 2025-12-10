import { SelectedValues, SortOption } from "@/lib/types";
import SortOptionGroup from "../SortOptionGroup/SortOptionGroup";

interface DropdownMenuProps {
  sortOptions: SortOption[];
  selectedValues: SelectedValues;
  onSelect: (optionIndex: number, value: string) => void;
  onFilter?: () => void;
  hasSelectedValues: boolean;
}

const SortDropdownMenu = ({
  sortOptions,
  selectedValues,
  onSelect,
  onFilter,
  hasSelectedValues,
}: DropdownMenuProps) => {
  return (
    <div className="absolute left-0 top-full z-10 mt-2 w-72 origin-top-right bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg focus:outline-none">
      <div className="py-1">
        {sortOptions.map((option, optionIndex) => (
          <SortOptionGroup
            key={optionIndex}
            option={option}
            optionIndex={optionIndex}
            selectedValue={selectedValues[optionIndex]}
            onSelect={onSelect}
          />
        ))}
      </div>
      {onFilter && (
        <div className="pb-6 px-4 pt-4">
          <button
            className={`px-4 py-2 rounded hover:opacity-90 text-white text-center text-sm transition-all w-full font-medium bg-purple-600 ${
              !hasSelectedValues && "opacity-35 cursor-not-allowed"
            }`}
            onClick={onFilter}
            disabled={!hasSelectedValues}
          >
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default SortDropdownMenu;
