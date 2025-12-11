import { Skeleton } from "@/components/ui/skeleton";

const UserInfoLoader = () => {
  return (
    <Skeleton className="w-full h-80 rounded-xl bg-gray-300 dark:bg-gray-700" />
  );
};

export default UserInfoLoader;
