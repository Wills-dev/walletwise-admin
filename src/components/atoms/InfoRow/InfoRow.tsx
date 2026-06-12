import Link from "next/link";
import React from "react";

type InfoRowProps = {
  label: string;
  value: string;
  href?: string;
};

const InfoRow = ({ label, value, href }: InfoRowProps) => {
  const formattedValue =
    href !== undefined ? (
      <Link
        href={href}
        className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full"
      >
        {value}
      </Link>
    ) : (
      <p className="mt-1 break-all font-medium text-gray-900 dark:text-white">
        {value}
      </p>
    );
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>

      {formattedValue}
    </div>
  );
};

export default InfoRow;
