import { FilterOption } from "../types";

export const filterLabels: Record<FilterOption, string> = {
  yesterday: "Yesterday",
  today: "Today",
  last7days: "Last 7 days",
  thisweek: "This week",
  lastweek: "Last week",
  thismonth: "This month",
  lastmonth: "Last month",
  last6months: "Last 6 months",
  thisyear: "This year",
  lastyear: "Last year",
  custom: "Custom range",
};

export const menuItems: { label: string; value: FilterOption }[] = [
  { label: "Yesterday", value: "yesterday" },
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "last7days" },
  { label: "This week", value: "thisweek" },
  { label: "Last week", value: "lastweek" },
  { label: "This month", value: "thismonth" },
  { label: "Last month", value: "lastmonth" },
  { label: "Last 6 months", value: "last6months" },
  { label: "This year", value: "thisyear" },
  { label: "Last year", value: "lastyear" },
  { label: "Custom range", value: "custom" },
];

export const sortOptions = [
  { label: "Order", values: ["newest", "oldest"] },
  { label: "Sort by", values: ["highest", "lowest"] },
];

export const transferTab = [
  {
    value: "",
    label: "All",
    content: <></>,
  },
  {
    value: "inbound",
    label: "Inbound",
    content: <></>,
  },
  {
    value: "outbound",
    label: "Outbound",
    content: <></>,
  },
];
