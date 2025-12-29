import { Badge } from "@/components/ui/badge";

const TypeBadge = ({ type }: { type: string }) => {
  const isDebit = type?.toLowerCase() === "debit";

  return (
    <Badge
      variant="outline"
      className={`${
        isDebit
          ? "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
          : "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
      } flex items-center gap-1.5 px-3 py-1`}
    >
      <span className="capitalize font-medium">{type}</span>
    </Badge>
  );
};

export default TypeBadge;
