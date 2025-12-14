import { DateOptions, DateRange, FilterOption } from "../types";

export const convertDateFormat = (oldDate: string) => {
  const date = new Date(oldDate).toString().split(" ");
  const newFormat = ` ${date[2]}  ${date[1]}, ${date[3]}`;
  return newFormat;
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const formatFilterDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatDateRange = (start: Date, end: Date): string => {
  if (start.toDateString() === end.toDateString()) {
    return formatFilterDate(start);
  }

  if (start.getFullYear() === end.getFullYear()) {
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString("en-US", {
        month: "short",
      })} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} - ${formatFilterDate(end)}`;
  }

  return `${formatFilterDate(start)} - ${formatFilterDate(end)}`;
};

const getStartOfWeek = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.setDate(diff));
};

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

export const formatCreatedAt = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export const getDateRange = (
  filterType: FilterOption,
  today: Date = new Date()
): DateRange => {
  const startOfToday = new Date(today.setHours(0, 0, 0, 0));

  switch (filterType) {
    case "yesterday":
      const yesterday = addDays(startOfToday, -1);
      return { start: yesterday, end: yesterday };

    case "today":
      return { start: new Date(startOfToday), end: new Date(startOfToday) };

    case "last7days":
      return { start: addDays(startOfToday, -6), end: new Date(startOfToday) };

    case "thisweek":
      return {
        start: getStartOfWeek(startOfToday),
        end: new Date(startOfToday),
      };

    case "lastweek":
      const lastWeekEnd = addDays(getStartOfWeek(startOfToday), -1);
      return { start: getStartOfWeek(lastWeekEnd), end: lastWeekEnd };

    case "thismonth":
      return {
        start: new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 1),
        end: new Date(startOfToday),
      };

    case "lastmonth":
      const lastMonth = addMonths(startOfToday, -1);
      return {
        start: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1),
        end: new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 0),
      };

    case "last6months":
      const sixMonthsAgo = addMonths(startOfToday, -6);
      return {
        start: new Date(sixMonthsAgo.getFullYear(), sixMonthsAgo.getMonth(), 1),
        end: new Date(startOfToday),
      };

    case "thisyear":
      return {
        start: new Date(startOfToday.getFullYear(), 0, 1),
        end: new Date(startOfToday),
      };

    case "lastyear":
      return {
        start: new Date(startOfToday.getFullYear() - 1, 0, 1),
        end: new Date(startOfToday.getFullYear() - 1, 11, 31),
      };

    default:
      return { start: new Date(startOfToday), end: new Date(startOfToday) };
  }
};
