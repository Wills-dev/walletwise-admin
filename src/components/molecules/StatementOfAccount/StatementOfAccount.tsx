"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, DownloadIcon, FileTextIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetUserAccountStatement } from "@/features/users/hooks/useGetUserAccountStatement";

interface StatementOfAccountProps {
  userId: string;
  userName?: string;
}

export function StatementOfAccount({
  userId,
  userName,
}: StatementOfAccountProps) {
  const { dateRange, setDateRange, downloadStatement, isPending, isSuccess } =
    useGetUserAccountStatement();

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4 w-fit mt-10 dark:bg-gray-800">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <FileTextIcon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">
            Statement of Account
          </p>
          {userName && (
            <p className="text-xs text-muted-foreground mt-0.5">{userName}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Select Date Range
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !dateRange && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <span>
                    {format(dateRange.from, "MMM d, yyyy")} –{" "}
                    {format(dateRange.to, "MMM d, yyyy")}
                  </span>
                ) : (
                  format(dateRange.from, "MMM d, yyyy")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={{ after: new Date() }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {isSuccess && (
        <p className="text-xs text-purple-600 dark:text-purple-400">
          Statement downloaded successfully.
        </p>
      )}

      <Button
        onClick={() => downloadStatement(userId)}
        disabled={isPending}
        className="w-full gap-2"
      >
        <DownloadIcon className="h-4 w-4" />
        {isPending ? "Generating..." : "Download Statement"}
      </Button>
    </div>
  );
}
