import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const TierBadge = ({ tier }: { tier: string }) => {
  const tierColors: Record<string, string> = {
    "1": "bg-bronze-500/10 text-bronze-700 dark:text-bronze-400 border-bronze-500/20",
    "2": "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20",
    "3": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  };
  return (
    <Badge variant="outline" className={tierColors[tier] || tierColors["1"]}>
      <Shield className="w-3 h-3 mr-1" />
      Tier {tier}
    </Badge>
  );
};

export default TierBadge;
