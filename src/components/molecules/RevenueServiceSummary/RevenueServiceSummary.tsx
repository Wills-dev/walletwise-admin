"use client";

import { BellElectric, CardSim, Phone } from "lucide-react";

import { useGetRevenueProfitByCategory } from "@/lib/hooks/useGetRevenueProfitByCategory";

import StatisticCard from "../StatisticCard/StatisticCard";
import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import DateFilterComponent from "@/components/organisms/DateFilterComponent/DateFilterComponent";

const RevenueServiceSummary = () => {
  const { service, setService, setSelectedDateFilterValue, data, isLoading } =
    useGetRevenueProfitByCategory("revenue");

  return (
    <div className="space-y-2">
      {setSelectedDateFilterValue !== undefined && (
        <DateFilterComponent
          onDateChange={(value) => {
            setSelectedDateFilterValue(value);
          }}
        />
      )}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-fit">
        {isLoading ? (
          <SummaryCardLoader />
        ) : (
          <>
            {data?.revenue?.categoryBreakdown?.[0] && (
              <StatisticCard
                title={data?.revenue?.categoryBreakdown?.[0]?.category}
                currency="₦"
                color="green"
                value={data?.revenue?.categoryBreakdown?.[0]?.value}
                icon={<Phone className="w-6 h-6" />}
                percentage={data?.revenue?.categoryBreakdown?.[0]?.percentage}
                percentageType="positive"
              />
            )}
            {data?.revenue?.categoryBreakdown?.[1] && (
              <StatisticCard
                title={data?.revenue?.categoryBreakdown?.[1]?.category}
                currency="₦"
                color="purple"
                value={data?.revenue?.categoryBreakdown?.[1]?.value}
                icon={<BellElectric className="w-6 h-6" />}
                percentage={data?.revenue?.categoryBreakdown?.[1]?.percentage}
                percentageType="positive"
              />
            )}
            {data?.revenue?.categoryBreakdown?.[2] && (
              <StatisticCard
                title={data?.revenue?.categoryBreakdown?.[2]?.category}
                currency="₦"
                color="blue"
                value={data?.revenue?.categoryBreakdown?.[2]?.value}
                icon={<CardSim className="w-6 h-6" />}
                percentage={data?.revenue?.categoryBreakdown?.[2]?.percentage}
                percentageType="positive"
              />
            )}
            {/* {data?.revenue?.categoryBreakdown?.[2] && (
            <StatisticCard
              title={data?.revenue?.categoryBreakdown?.[2]?.category}
              currency="₦"
              color="blue"
              value={data?.revenue?.categoryBreakdown?.[2]?.value}
              icon={<CardSim className="w-6 h-6" />}
              percentage={data?.revenue?.categoryBreakdown?.[2]?.percentage}
              percentageType="positive"
            />
          )}
          {data?.revenue?.categoryBreakdown?.[2] && (
            <StatisticCard
              title={data?.revenue?.categoryBreakdown?.[2]?.category}
              currency="₦"
              color="blue"
              value={data?.revenue?.categoryBreakdown?.[2]?.value}
              icon={<CardSim className="w-6 h-6" />}
              percentage={data?.revenue?.categoryBreakdown?.[2]?.percentage}
              percentageType="positive"
            />
          )}
          {data?.revenue?.categoryBreakdown?.[2] && (
            <StatisticCard
              title={data?.revenue?.categoryBreakdown?.[2]?.category}
              currency="₦"
              color="blue"
              value={data?.revenue?.categoryBreakdown?.[2]?.value}
              icon={<CardSim className="w-6 h-6" />}
              percentage={data?.revenue?.categoryBreakdown?.[2]?.percentage}
              percentageType="positive"
            />
          )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default RevenueServiceSummary;
