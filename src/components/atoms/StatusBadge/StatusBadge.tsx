const StatusBadge = ({
  status,
}: {
  status: "active" | "inactive" | "unknown";
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "inactive":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      case "unknown":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
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
