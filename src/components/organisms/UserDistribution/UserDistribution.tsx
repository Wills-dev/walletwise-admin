"use client";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import UserBarChart from "@/components/molecules/charts/UserBarChart/UserBarChart";

import { UserPieChart } from "@/components/molecules/charts/UserPieChart/UserPieChart";
import { useGetUsersLocationStats } from "@/features/users/hooks/useGetUsersLocationStats";

const UserDistribution = () => {
  const { data, isLoading, refetch } = useGetUsersLocationStats();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
          Users Distribution
        </h1>
        <button
          onClick={() => refetch()}
          className="text-center px-6 bg-purple-800 text-white text-sm py-2 transition-all duration-300 rounded hover:opacity-90 whitespace-nowrap"
        >
          Fetch Latest Data
        </button>
      </div>

      {!isLoading && !data ? (
        <p className="text-xs">Error fetching user distributionn</p>
      ) : (
        <div className="flex gap-6 flex-wrap w-full">
          <div className="flex-1 w-full max-sm:hidden">
            {isLoading ? (
              <ChartLoader />
            ) : (
              <UserPieChart userCount={data?.allStates} />
            )}
          </div>
          <div className="flex-1 w-full">
            {isLoading ? (
              <ChartLoader />
            ) : (
              <UserBarChart chartData={data?.topStates} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDistribution;
