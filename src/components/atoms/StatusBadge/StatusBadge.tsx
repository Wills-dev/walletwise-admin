const StatusBadge = ({
  status,
}: {
  status:
    | "active"
    | "inactive"
    | "unknown"
    | "Personalized accounts"
    | "Virtual accounts"
    | "suspended"
    | "deleted";
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "inactive":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      case "unknown":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
      case "Personalized accounts":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      case "Virtual accounts":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "suspended":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      case "deleted":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
    }
  };

  const formattedStatus =
    status === "unknown"
      ? "inactive"
      : status === "inactive"
        ? "suspended"
        : status;

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-medium border w-fit capitalize ${getStatusStyles()}`}
    >
      {formattedStatus}
    </span>
  );
};

export default StatusBadge;
