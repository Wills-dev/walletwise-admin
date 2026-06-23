type StatusPulseProps = {
  variant?: "yellow" | "red";
  size?: "sm" | "md" | "lg";
};

export default function StatusPulse({
  variant = "yellow",
  size = "md",
}: StatusPulseProps) {
  const colors = {
    yellow: {
      outer: "bg-yellow-400/40",
      inner: "bg-yellow-500",
    },
    red: {
      outer: "bg-red-500/40",
      inner: "bg-red-500",
    },
  };

  const sizes = {
    sm: {
      wrapper: "w-3 h-3",
      pulse: "w-3 h-3",
      dot: "w-2 h-2",
    },
    md: {
      wrapper: "w-4 h-4",
      pulse: "w-4 h-4",
      dot: "w-3 h-3",
    },
    lg: {
      wrapper: "w-5 h-5",
      pulse: "w-5 h-5",
      dot: "w-4 h-4",
    },
  };

  return (
    <span
      className={`relative flex items-center justify-center ${sizes[size].wrapper}`}
    >
      <span
        className={`absolute rounded-full animate-ping ${sizes[size].pulse} ${colors[variant].outer}`}
      />
      <span
        className={`relative rounded-full ${sizes[size].dot} ${colors[variant].inner}`}
      />
    </span>
  );
}
