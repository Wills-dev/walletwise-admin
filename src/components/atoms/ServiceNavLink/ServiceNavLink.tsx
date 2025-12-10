"use client";

import Link from "next/link";

import { useActivePath } from "@/lib/hooks/useActivePath";

const ServiceNavLink = ({ name, link }: { name: string; link: string }) => {
  const isActive = useActivePath(link);
  return (
    <Link
      href={link}
      className={`uppercase text-sm h-full flex items-center transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "border-b-2 border-purple-700 text-gray-800 dark:text-gray-400 font-medium"
          : "hover:scale-105 text-gray-700 dark:text-gray-500"
      }`}
    >
      {name}
    </Link>
  );
};

export default ServiceNavLink;
