import { Skeleton } from "@/components/ui/skeleton";

const PageTitleSkeleton = () => {
  return (
    <div className="space-y-1">
      <Skeleton className="h-12 max-w-md w-full rounded-2xl bg-gray-300 dark:bg-gray-700" />
      <Skeleton className="h-8 max-w-xl w-full rounded-xl bg-gray-300 dark:bg-gray-700" />
    </div>
  );
};

export default PageTitleSkeleton;
