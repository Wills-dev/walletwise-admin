export const getActionColor = (action: string) => {
  switch (action) {
    case "read":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "write":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "create":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

export const formatModuleName = (module: string) => {
  return module
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getActivityTypeColor = (type: string) => {
  if (type.includes("suspended")) return "bg-red-500/10 text-red-400";
  if (type.includes("unsuspended")) return "bg-emerald-500/10 text-emerald-400";
  if (type.includes("updated")) return "bg-blue-500/10 text-blue-400";
  return "bg-gray-500/10 text-gray-400";
};
