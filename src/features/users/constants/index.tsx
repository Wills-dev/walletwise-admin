import { ChartConfigType } from "../types";

export const adminBreadcrumb = [
  { label: "Admin management", href: "/manage-admin" },
  { label: "Admin Info" },
];

export const userBreadcrumb = [
  { label: "User management", href: "/manage-user" },
  { label: "User Info" },
];

export const genderRole = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

export const userSortOptions = [
  { label: "Order", values: ["newest", "oldest"] },
];

export const kycBreadcrumb = [
  { label: "KYC management", href: "/manage-kyc" },
  { label: "KYC Info" },
];

export const chartConfig: ChartConfigType = {
  count: {
    label: "Users",
  },
  Abia: { label: "Abia", color: "#4CAF50" },
  Adamawa: { label: "Adamawa", color: "#2196F3" },
  AkwaIbom: { label: "Akwa Ibom", color: "#FFC107" },
  Anambra: { label: "Anambra", color: "#DDDDDD" },
  Bauchi: { label: "Bauchi", color: "#F44336" },
  Bayelsa: { label: "Bayelsa", color: "#9C27B0" },
  Benue: { label: "Benue", color: "#00BCD4" },
  Borno: { label: "Borno", color: "#E91E63" },
  CrossRiver: { label: "Cross River", color: "#8BC34A" },
  Delta: { label: "Delta", color: "#FF9800" },
  Ebonyi: { label: "Ebonyi", color: "#3F51B5" },
  Edo: { label: "Edo", color: "#009688" },
  Ekiti: { label: "Ekiti", color: "#CDDC39" },
  Enugu: { label: "Enugu", color: "#673AB7" },
  FCT: { label: "FCT", color: "#795548" },
  Gombe: { label: "Gombe", color: "#607D8B" },
  Imo: { label: "Imo", color: "#FF5722" },
  Jigawa: { label: "Jigawa", color: "#BDBDBD" },
  Kaduna: { label: "Kaduna", color: "#C2185B" },
  Kano: { label: "Kano", color: "#0288D1" },
  Katsina: { label: "Katsina", color: "#7B1FA2" },
  Kebbi: { label: "Kebbi", color: "#2E7D32" },
  Kogi: { label: "Kogi", color: "#00695C" },
  Kwara: { label: "Kwara", color: "#558B2F" },
  Lagos: { label: "Lagos", color: "#AD1457" },
  Nasarawa: { label: "Nasarawa", color: "#1976D2" },
  Niger: { label: "Niger", color: "#1E88E5" },
  Ogun: { label: "Ogun", color: "#D32F2F" },
  Ondo: { label: "Ondo", color: "#F57C00" },
  Osun: { label: "Osun", color: "#FFA000" },
  Oyo: { label: "Oyo", color: "#C0CA33" },
  Plateau: { label: "Plateau", color: "#9E9D24" },
  Rivers: { label: "Rivers", color: "#5D4037" },
  Sokoto: { label: "Sokoto", color: "#90A4AE" },
  Taraba: { label: "Taraba", color: "#B39DDB" },
  Yobe: { label: "Yobe", color: "#80CBC4" },
  Zamfara: { label: "Zamfara", color: "#A5D6A7" },
};

export const colorPalette = [
  "#4CAF50", // green
  "#2196F3", // blue
  "#FFC107", // amber
  "#DDDDDD", // gray
  "#F44336", // red
  "#9C27B0", // purple
  "#00BCD4", // cyan
  "#E91E63", // pink
  "#8BC34A", // light green
  "#FF9800", // orange
  "#3F51B5", // indigo
  "#009688", // teal
  "#CDDC39", // lime
  "#673AB7", // deep purple
  "#795548", // brown
  "#607D8B", // blue gray
  "#FF5722", // deep orange
  "#BDBDBD", // light gray
  "#C2185B", // strong pink
  "#0288D1", // vivid blue
  "#7B1FA2", // dark purple
  "#2E7D32", // dark green
  "#00695C", // dark teal
  "#558B2F", // olive green
  "#AD1457", // dark pink
  "#1976D2", // deep blue
  "#1E88E5", // bright blue
  "#D32F2F", // strong red
  "#F57C00", // strong orange
  "#FFA000", // gold
  "#C0CA33", // lime green
  "#9E9D24", // mustard
  "#5D4037", // deep brown
  "#90A4AE", // soft gray blue
  "#B39DDB", // lavender
  "#80CBC4", // mint teal
  "#A5D6A7", // pale green
  "#FFCCBC", // light peach
];
