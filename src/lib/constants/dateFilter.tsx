import { FilterOption } from "../types";

export const filterLabels: Record<FilterOption, string> = {
  yesterday: "Yesterday",
  today: "Today",
  last7days: "Last 7 days",
  thisWeek: "This week",
  lastWeek: "Last week",
  thisMonth: "This month",
  lastMonth: "Last month",
  last6Months: "Last 6 months",
  thisYear: "This year",
  lastYear: "Last year",
  custom: "Custom range",
};

export const menuItems: { label: string; value: FilterOption }[] = [
  { label: "Yesterday", value: "yesterday" },
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "last7days" },
  { label: "This week", value: "thisWeek" },
  { label: "Last week", value: "lastWeek" },
  { label: "This month", value: "thisMonth" },
  { label: "Last month", value: "lastMonth" },
  { label: "Last 6 months", value: "last6Months" },
  { label: "This year", value: "thisYear" },
  { label: "Last year", value: "lastYear" },
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
