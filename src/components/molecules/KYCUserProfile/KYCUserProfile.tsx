import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import TierBadge from "@/components/atoms/TierBadge/TierBadge";

import { UserType } from "@/features/users/types";
import { convertDateFormat } from "@/lib/helpers/dateFormats";
import { Calendar, Mail, Phone, Tag } from "lucide-react";
import Link from "next/link";

const KYCUserProfile = ({ user, tier }: { user: UserType; tier: string }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shrink-0">
          {user?.first_name[0]}
          {user?.last_name[0]}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <Link
                href={`/manage-user/info/${user?.id}`}
                className="text-2xl font-bold text-gray-900 hover:underline transition-all duration-300 dark:text-white mb-1"
              >
                {user?.first_name} {user?.last_name}
              </Link>
              <p className="text-gray-500 dark:text-gray-400">
                @{user?.user_tag}
              </p>
            </div>
            <TierBadge tier={tier} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoItem icon={Mail} label="Email" value={user?.email} />
            <InfoItem icon={Phone} label="Phone" value={user?.phone_number} />
            <InfoItem icon={Tag} label="User ID" value={user?.id.slice(0, 8)} />
            <InfoItem
              icon={Calendar}
              label="Member Since"
              value={convertDateFormat(user?.created_at)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCUserProfile;
