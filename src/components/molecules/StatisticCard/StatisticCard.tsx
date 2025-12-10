import { Card } from "@/components/ui/card";
import { numberWithCommas } from "@/lib/helpers";

interface StatisticCardProps {
  icon: React.ReactElement;
  color: "green" | "yellow" | "red" | "blue" | "orange";
  title: string;
  value: number;
  currency?: string;
  onClick?: () => void;
}

const StatisticCard = ({
  title,
  value,
  currency,
  onClick,
  color = "green",
  icon: Icon,
}: StatisticCardProps) => {
  const colorClasses = {
    green: "bg-green-50 text-green-600 border-green-100",
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
    red: "bg-red-50 text-red-600 border-red-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
  };

  return (
    <Card
      className={`dark:bg-gray-800 p-6 ${
        onClick !== undefined
          ? "hover:shadow-lg transition-all duration-300 cursor-pointer"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
          {title}
        </h4>
        {Icon !== undefined && (
          <div className={`p-3 rounded-xl border ${colorClasses[color]}`}>
            {Icon}
          </div>
        )}
      </div>
      <h1 className="text-2xl font-bold dark:text-gray-200">
        {currency && currency}
        {value && numberWithCommas(value)}
      </h1>
    </Card>
  );
};

export default StatisticCard;
