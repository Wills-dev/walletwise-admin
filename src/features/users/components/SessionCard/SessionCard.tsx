import { Calendar, MapPin, Monitor, Smartphone } from "lucide-react";
import { SessionType } from "../../types";
import { formatDate } from "@/lib/helpers/dateFormats";

const SessionCard = ({ session }: { session: SessionType }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {session?.device_type === "IOS" ||
          session?.device_type === "ANDROID" ? (
            <Smartphone className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          ) : (
            <Monitor className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          )}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {session?.device_name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {session?.device_type}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">
            {session?.ip}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">
            {session?.location}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">
            Last login:{" "}
            {session?.last_login
              ? formatDate(session?.last_login)
              : "Not logged in yet"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
