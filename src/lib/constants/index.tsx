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
        link: "/services/transfer",
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

// export const services = [
//   {
//     name: "/services/transfers",
//     icon: <BiTransfer />,
//   },
//   {
//     name: "/services/airtime",
//     icon: <IoPhonePortraitOutline />,
//   },
//   {
//     name: "/services/cable",
//     icon: <PiTelevisionSimple />,
//   },
//   {
//     name: "/services/data",
//     icon: <GoDatabase />,
//   },
//   {
//     name: "/services/betting",
//     icon: <IoIosFootball />,
//   },
//   {
//     name: "/services/electricity",
//     icon: <FaRegLightbulb />,
//   },
//   {
//     name: "/services/giftcards",
//     icon: <GoGift />,
//   },
//   {
//     name: "/services/book-flight",
//     icon: <BiSolidPlaneAlt />,
//   },
//   {
//     name: "/services/virtual-card",
//     icon: <CiCreditCard1 />,
//   },
//   {
//     name: "/services/hotel-reservations",
//     icon: <IoHomeOutline />,
//   },
// ];
