import { TICKET_CONFIG } from "@/features/services/helpers/TICKET_CONFIG";
import { TicketType } from "@/features/services/types";
import { numberWithCommas } from "@/lib/helpers";

interface TicketRowProps {
  type: string;
  data: TicketType;
}

const TicketRow = ({ type, data }: TicketRowProps) => {
  const cfg = TICKET_CONFIG[type] ?? {
    label: type,
    dot: "bg-gray-400",
    price: "text-gray-400",
    badge: "bg-gray-400/10 text-gray-400",
  };

  return (
    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
      <div className="flex items-center gap-2.5">
        <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
        <span className="text-[13px] font-medium text-gray-700 dark:text-gray-200">
          {cfg.label}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${cfg.badge}`}
        >
          {type}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-[12px] text-gray-400 dark:text-gray-500">
          {data?.quantity && numberWithCommas(data?.quantity)} left
        </span>
        <span
          className={`text-[13px] font-semibold min-w-[60px] text-right ${cfg.price}`}
        >
          ₦{data?.price && numberWithCommas(Number(data?.price))}
        </span>
      </div>
    </div>
  );
};

export default TicketRow;
