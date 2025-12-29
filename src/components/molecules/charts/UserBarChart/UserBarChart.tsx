"use client";

import { useMemo } from "react";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, colorPalette } from "@/features/users/constants";

type ChartConfigItem = {
  label: string;
  color?: string;
};

const UserBarChart = ({ chartData }: { chartData: { state: string }[] }) => {
  const generateChartConfig = useMemo(() => {
    const config: Record<string, ChartConfigItem> = {};

    chartData?.forEach((state, index) => {
      const color = colorPalette[index % colorPalette.length];
      config[state?.state] = { label: state?.state, color };
    });

    return {
      userCount: { label: "Users" },
      ...config,
    };
  }, [chartData]);

  return (
    <Card className="w-full dark:bg-gray-800 h-full">
      <CardHeader>
        <CardTitle>Top States</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ChartContainer config={generateChartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="state"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value]?.label}
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserBarChart;
