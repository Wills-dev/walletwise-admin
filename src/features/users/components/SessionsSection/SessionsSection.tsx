import { useState } from "react";

import { Monitor } from "lucide-react";

import { SessionType } from "../../types";
import { useFetchLocation } from "@/lib/hooks/useFetchLocation";

import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import SessionCard from "../SessionCard/SessionCard";
import UserInfoLoader from "@/components/atoms/skeleton/UserInfoLoader";

const SessionsSection = ({ sessions }: { sessions: SessionType[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { loading, logs } = useFetchLocation(sessions);

  return (
    <>
      {loading ? (
        <UserInfoLoader />
      ) : (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
          <SectionHeader
            icon={Monitor}
            title="Active Sessions"
            subtitle={`${sessions.length} session${
              sessions.length !== 1 ? "s" : ""
            }`}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />

          {isExpanded && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {logs?.map((session) => (
                  <SessionCard key={session.tokenID} session={session} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SessionsSection;
