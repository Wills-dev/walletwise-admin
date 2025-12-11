import { formatDate } from "@/lib/helpers/dateFormats";
import { Calendar, Mail, Phone, User } from "lucide-react";
import React from "react";

const AdminInfoHeader = ({
  adminData,
}: {
  adminData: {
    first_name: string;
    last_name: string;
    role_name: string;
    email: string;
    phone_number: string;
    gender?: string;
    last_login?: string;
  };
}) => {
  return (
    <div className="dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-8 shadow-sm">
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
          {adminData?.first_name[0]}
          {adminData?.last_name[0]}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-1">
            {adminData?.first_name} {adminData?.last_name}
          </h2>
          <p className="dark:text-gray-400 text-gray-600 mb-4">
            {adminData?.role_name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 dark:text-gray-300 text-gray-700">
              <Mail className="w-5 h-5 dark:text-gray-500 text-gray-600" />
              <span>{adminData?.email}</span>
            </div>
            <div className="flex items-center gap-3 dark:text-gray-300 text-gray-700">
              <Phone className="w-5 h-5 dark:text-gray-500 text-gray-600" />
              <span>{adminData?.phone_number}</span>
            </div>
            {adminData?.gender && (
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-700">
                <User className="w-5 h-5 dark:text-gray-500 text-gray-600" />
                <span className="capitalize">{adminData.gender}</span>
              </div>
            )}
            {adminData?.last_login && (
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-700">
                <Calendar className="w-5 h-5 dark:text-gray-500 text-gray-600" />
                <span>Last login: {formatDate(adminData.last_login)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfoHeader;
