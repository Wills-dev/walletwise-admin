import {
  ArrowLeftRight,
  BookmarkCheck,
  ChartNoAxesCombined,
  Database,
  GitCompareArrows,
  HandCoins,
  LayoutGrid,
  Settings,
  ShieldCheck,
  User,
  UserLock,
  UserRoundPen,
  UserRoundPlus,
  Users,
  UserStar,
  Phone,
  Dices,
  Tv,
  Wifi,
  Zap,
  Gift,
  Send,
} from "lucide-react";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        link: "/overview",
        icon: <LayoutGrid className="w-4 h-4" />,
      },
      {
        name: "analytics",
        link: "/analytics",
        icon: <ChartNoAxesCombined className="w-4 h-4" />,
      },
      {
        name: "earnings",
        link: "/earnings",
        icon: <HandCoins className="w-4 h-4" />,
      },
      {
        name: "commission",
        link: "/commission",
        icon: <GitCompareArrows className="w-4 h-4" />,
      },
      {
        name: "referrals",
        link: "/referrals",
        icon: <UserRoundPlus className="w-4 h-4" />,
      },
      {
        name: "all transactions",
        link: "/all-transactions",
        icon: <ArrowLeftRight className="w-4 h-4" />,
      },
      {
        name: "usertag",
        link: "/usertag",
        icon: <UserStar className="w-4 h-4" />,
      },
      {
        name: "services",
        link: "/services/airtime",
        icon: <Database className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "tickets",
        link: "/tickets",
        icon: <ShieldCheck className="w-4 h-4" />,
      },
    ],
  },

  {
    title: "admin management",
    links: [
      {
        name: "manage admin",
        link: "/manage-admin",
        icon: <UserLock className="w-4 h-4" />,
      },
      {
        name: "manage user",
        link: "/manage-user",
        icon: <Users className="w-4 h-4" />,
      },
      {
        name: "manage kyc",
        link: "/manage-kyc",
        icon: <BookmarkCheck className="w-4 h-4" />,
      },
      {
        name: "roles",
        link: "/roles",
        icon: <UserRoundPen className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        name: "profile",
        link: "/profile",
        icon: <User className="w-4 h-4" />,
      },
      {
        name: "security",
        link: "/security",
        icon: <Settings className="w-4 h-4" />,
      },
    ],
  },
];

export const services = [
  {
    name: "airtime",
    link: "/services/airtime",
  },
  { name: "betting", link: "/services/betting" },
  {
    name: "cable",
    link: "/services/cable",
  },
  {
    name: "data",
    link: "/services/data",
  },

  {
    name: "electricity",
    link: "/services/electricity",
  },
  {
    name: "giftcard",
    link: "/services/giftcard",
  },
  {
    name: "redeem gift",
    link: "/services/gift-redeem",
  },
  { name: "transfer", link: "/services/transfer" },
  { name: "book flight", link: "/services/book-flight" },
  {
    name: "hotel reservation",
    link: "/services/hotel-reservations",
  },
];

export const servicesData = [
  {
    label: "Airtime",
    value: "airtime",
    color: "rgba(59, 130, 246, 0.8)",
    bgColor: "rgb(239 246 255)",
    icon: Phone,
  },
  {
    label: "Betting",
    value: "betting",
    color: "rgba(239, 68, 68, 0.8)",
    bgColor: "rgb(254 242 242)",
    icon: Dices,
  },
  {
    label: "Cable",
    value: "cable",
    color: "rgba(34, 197, 94, 0.8)",
    bgColor: "rgb(240 253 244)",
    icon: Tv,
  },
  {
    label: "Data",
    value: "data",
    color: "rgba(168, 85, 247, 0.8)",
    bgColor: "rgb(250 245 255)",
    icon: Wifi,
  },
  {
    label: "Electricity",
    value: "electricity",
    color: "rgba(234, 179, 8, 0.8)",
    bgColor: "rgb(254 252 232)",
    icon: Zap,
  },
  {
    label: "Giftcard",
    value: "giftcard",
    color: "rgba(236, 72, 153, 0.8)",
    bgColor: "rgb(250 245 255)",
    icon: Gift,
  },
  {
    label: "Transfer",
    value: "transfer",
    color: "rgba(20, 184, 166, 0.8)",
    bgColor: "rgb(240 253 244)",
    icon: Send,
  },
];

export const commissionSortOptions = [
  { label: "Sort by", values: ["revenue"] },
  { label: "Period", values: ["daily", "weekly", "monthly"] },
  { label: "Order", values: ["asc", "desc"] },
];

export const TransactionSortOptions = [
  { label: "Order", values: ["ASC", "DESC"] },
  { label: "Status", values: ["pending", "success", "reversed", "failed"] },
];

export const dataPlanSortOptions = [
  { label: "Sort by", values: ["all plans", "custom plans", "original plans"] },
  { label: "Status", values: ["all plans", "active plans", "inactive plans"] },
];

export const redeemGiftSortOptions = [
  { label: "Currency", values: ["USD", "NGN", "EUR", "GBP"] },
  { label: "Order", values: ["asc", "desc"] },
  { label: "Status", values: ["pending", "success", "reversed", "failed"] },
];

const currentYear = new Date().getFullYear();
const startYear = 2024;

export const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, i) => {
    const year = (startYear + i).toString();
    return { label: year, value: year };
  }
);
