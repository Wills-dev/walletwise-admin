import { SessionType } from "@/features/users/types";
import { useEffect, useState } from "react";

export const useFetchLocation = (sampleLogs: SessionType[]) => {
  const [logs, setLogs] = useState<SessionType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLocation = async (ip: string) => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      return data.error
        ? "Unknown Location"
        : `${data.city}, ${data.region}, ${data.country_name}`;
    } catch (error) {
      console.log("error fetching user location", error);
      throw "Unknown Location";
    }
  };

  useEffect(() => {
    const processLogs = async () => {
      setLoading(true);
      try {
        const updatedLogs = await Promise.all(
          sampleLogs.map(async (log) => ({
            ...log,
            location: await fetchLocation(log.ip),
          })),
        );
        setLogs(updatedLogs);
      } catch (error) {
        console.log("error fetching user location", error);
      } finally {
        setLoading(false);
      }
    };
    processLogs();
  }, [sampleLogs]);

  return {
    logs,
    loading,
  };
};
