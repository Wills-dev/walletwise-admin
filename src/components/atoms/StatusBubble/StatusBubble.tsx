const StatusBubble = ({ status }: { status: string }) => {
  const statusStyles: Record<string, string> = {
    pending: "text-yellow-400 bg-yellow-50",
    active: "text-blue-400 bg-blue-50",
    in_transit: "text-blue-400 bg-blue-50",
    replied: "text-blue-400 bg-blue-50",
    reversed: "text-blue-400 bg-blue-50",
    unavailable: "text-orange-400 bg-orange-50",
    processing: "text-orange-400 bg-orange-50",
    completed: "text-green-400 bg-green-50",
    approved: "text-green-400 bg-green-50",
    success: "text-green-400 bg-green-50",
    received: "text-green-400 bg-green-50",
    verified: "text-green-400 bg-green-50",
    declined: "text-red-400 bg-red-50",
    unverified: "text-red-400 bg-red-50",
    blocked: "text-red-400 bg-red-50",
    failed: "text-red-400 bg-red-50",
    inactive: "text-yellow-400 bg-yellow-50",
  };

  return (
    <div
      className={`rounded-full px-3 py-1 text-center w-32 text-sm ${
        statusStyles[status] || "text-red-400 bg-red-50"
      }`}
    >
      {status}
    </div>
  );
};

export default StatusBubble;
