"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { optionsType } from "@/lib/types";

interface ReusableDropdownProps {
  value: string;
  onChange: (value: string) => void;
  filterOptions: optionsType[];
  buttonLabel: string;
  filterLabel: string;
}

const ReusableDropdown = ({
  value,
  onChange,
  filterOptions,
  buttonLabel,
  filterLabel,
}: ReusableDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="dark:bg-gray-800">
          {buttonLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-gray-800">
        <DropdownMenuLabel>{filterLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {filterOptions.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ReusableDropdown;
