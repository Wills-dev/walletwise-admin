"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

import { ChevronDown, Filter } from "lucide-react";

import { SelectedValues, SortDropdownProps } from "@/lib/types";
import { getDisplayText, hasAnySelectedValues } from "@/lib/helpers";

import ClearButton from "@/components/atoms/ClearButton/ClearButton";
import SortDropdownMenu from "@/components/molecules/SortDropdownMenu/SortDropdownMenu";

const SortDropdown = ({
  sortOptions = [],
  onSortChange,
  placeholder = "Sort by...",
  className = "",
  onFilter,
}: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionIndex: number, value: string): void => {
    const newSelectedValues: SelectedValues = {
      ...selectedValues,
      [optionIndex]: value,
    };
    setSelectedValues(newSelectedValues);
    onSortChange?.(newSelectedValues);
  };

  const clearSelection = (e: MouseEvent<HTMLSpanElement>): void => {
    e.stopPropagation();
    setSelectedValues({});
    onSortChange?.({});
  };

  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayText = getDisplayText(selectedValues, sortOptions, placeholder);
  const hasSelectedValues = hasAnySelectedValues(selectedValues);

  return (
    <div
      className={`relative flex items-center max-md:hidden text-left ${className}`}
      ref={dropdownRef}
    >
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter className="w-4 h-4" />
        <span className="truncate max-w-[200px] text-sm">{displayText}</span>
        <div className="flex items-center ml-2">
          {hasSelectedValues && <ClearButton onClick={clearSelection} />}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <SortDropdownMenu
          sortOptions={sortOptions}
          selectedValues={selectedValues}
          onSelect={handleOptionClick}
          onFilter={onFilter}
          hasSelectedValues={hasSelectedValues}
        />
      )}
    </div>
  );
};

export default SortDropdown;
