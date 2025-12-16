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
        link: "all-transactions",
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
    name: "giftcards",
    link: "/services/giftcards",
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
    icon: Phone,
  },
  {
    label: "Betting",
    value: "betting",
    color: "rgba(239, 68, 68, 0.8)",
    icon: Dices,
  },
  { label: "Cable", value: "cable", color: "rgba(34, 197, 94, 0.8)", icon: Tv },
  {
    label: "Data",
    value: "data",
    color: "rgba(168, 85, 247, 0.8)",
    icon: Wifi,
  },
  {
    label: "Electricity",
    value: "electricity",
    color: "rgba(234, 179, 8, 0.8)",
    icon: Zap,
  },
  {
    label: "Giftcard",
    value: "giftcard",
    color: "rgba(236, 72, 153, 0.8)",
    icon: Gift,
  },
  {
    label: "Transfer",
    value: "transfer",
    color: "rgba(20, 184, 166, 0.8)",
    icon: Send,
  },
];
