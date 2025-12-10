import { Skeleton } from "@/components/ui/skeleton";

const SummaryCardLoader = () => {
  return (
    <>
      {" "}
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-200 dark:bg-gray-800" />
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-200 dark:bg-gray-800" />
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-200 dark:bg-gray-800" />
    </>
  );
};

export default SummaryCardLoader;
