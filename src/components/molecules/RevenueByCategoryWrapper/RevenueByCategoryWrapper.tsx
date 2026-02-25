"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { useGetRevenueByCategory } from "@/features/services/hooks/useGetRevenueByCategory";
import { serviceType } from "@/lib/types";
import { calculateTotal } from "@/lib/helpers/calculateTotal";
import { numberWithCommas } from "@/lib/helpers";
import { servicesData, years } from "@/lib/constants";

import ReusableDropdown from "../ReusableDropdown/ReusableDropdown";
import ChartLoader from "@/components/atoms/skeleton/ChartLoader";

const chartConfig = {
  views: {
    label: "Revenue",
  },
  airtime: {
    label: "Airtime",
    color: "rgba(59, 130, 246, 0.8)",
  },

  betting: {
    label: "Betting",
    color: "rgba(239, 68, 68, 0.8)",
  },
  cable: {
    label: "Cable",
    color: "rgba(16, 185, 129, 0.8)",
  },
  data: {
    label: "Data",
    color: "rgba(139, 92, 246, 0.8)",
  },
  electricity: {
    label: "Electricity",
    color: "rgba(251, 146, 60, 0.8)",
  },
  esim: {
    label: "E-Sim",
    color: "rgba(147, 51, 234, 0.8)",
  },
  giftcard: {
    label: "Giftcard",
    color: "rgba(245, 158, 11, 0.8)",
  },
  "gift-redeem": {
    label: "Gift Redeem",
    color: "rgba(59, 130, 246, 0.8)",
  },
  transfer: {
    label: "Transfer",
    color: "rgba(236, 72, 153, 0.8)",
  },
  "card-creation": {
    label: "Virtual Card",
    color: "rgba(234, 179, 8, 0.8)",
  },
};

const RevenueByCategoryWrapper = () => {
  const {
    data,
    isLoading,
    selectedYear,
    setSelectedYear,
    selectedService,
    setSelectedService,
  } = useGetRevenueByCategory();

  const [activeChart, setActiveChart] = React.useState(selectedService);

  const total = React.useMemo<number>(() => {
    return calculateTotal(data || [], selectedService);
  }, [data, selectedService]);

  const handleChange = (value: string) => {
    setSelectedService(value as serviceType);
    setActiveChart(value as serviceType);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <ReusableDropdown
          onChange={handleChange}
          value={selectedService}
          buttonLabel="Select service"
          filterLabel="Services"
          filterOptions={servicesData}
        />
        <ReusableDropdown
          onChange={setSelectedYear}
          value={selectedYear}
          buttonLabel="Select year"
          filterLabel="Years"
          filterOptions={years}
        />
      </div>
      {isLoading ? (
        <ChartLoader />
      ) : (
        <Card className=" w-full dark:bg-secondary-dark-bg rounded-lg shadow border-none">
          <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
            <div className="flex flex-1 flex-col justify-start gap-1 px-6 py-5 sm:py-6">
              <div className="flex-center-between flex-wrap gap-4">
                <CardTitle className="font-semibold max-sm:text-sm capitalize">
                  {selectedService} Revenue summary
                </CardTitle>
              </div>
            </div>
            <div className="flex">
              {[selectedService].map((key) => {
                return (
                  <button
                    key={key}
                    data-active={activeChart === key}
                    className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-gray-800 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                    onClick={() => setActiveChart(key)}
                  >
                    <span className="text-xs text-muted-foreground capitalize">
                      {selectedService}
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-3xl">
                      ₦{total && numberWithCommas(total)}
                    </span>
                  </button>
                );
              })}
            </div>
          </CardHeader>
          <CardContent className="px-2 sm:p-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <LineChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="period"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => value.slice(0, 13)}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                      labelFormatter={(value) => value.slice(0, 13)}
                    />
                  }
                />
                <Line
                  dataKey={activeChart}
                  type="monotone"
                  stroke={`rgba(236, 72, 153, 0.8)`}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RevenueByCategoryWrapper;
