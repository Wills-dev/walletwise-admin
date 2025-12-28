"use client";

import { useGetUserCount } from "../../hooks/useGetUserCount";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import UserRadialChart from "@/components/molecules/charts/UserRadialChart/UserRadialChart";

const UserCountWrapper = ({ year }: { year: string }) => {
  const { data, isLoading } = useGetUserCount(year);

  return (
    <div className="sm:min-w-[300px] flex-1 w-full min-w-full">
      {isLoading ? (
        <ChartLoader />
      ) : (
        <UserRadialChart userCount={data} year={year} />
      )}
    </div>
  );
};

export default UserCountWrapper;
