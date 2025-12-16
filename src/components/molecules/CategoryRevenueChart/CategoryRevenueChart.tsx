"use client";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import ReusableBarChart from "../charts/ReusableBarChart/ReusableBarChart";

interface CategoryRevenueChartProps {
  serviceRevenueData: Array<{ category: string; value: number }>;
  isLoading: boolean;
  color?: string;
  period?: string;
}

const CategoryRevenueChart = ({
  serviceRevenueData,
  isLoading,
  color = "#34c75980",
  period,
}: CategoryRevenueChartProps) => {
  return (
    <div className="md:max-w-3/5 w-full">
      {isLoading ? (
        <ChartLoader />
      ) : (
        <ReusableBarChart
          data={serviceRevenueData}
          dataKey="value"
          xAxisKey="category"
          currency="₦"
          showCurrency
          color={color}
          description={`Revenue distribution by category ${period || ""}`}
        />
      )}
    </div>
  );
};

export default CategoryRevenueChart;
