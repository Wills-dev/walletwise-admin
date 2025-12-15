"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

interface ReusableBarChartProps {
  data: Array<Record<string, unknown>>;
  dataKey: string;
  xAxisKey: string;
  color?: string;
  title?: string;
  description?: string;
  footerText?: string;
  trendingPercentage?: number;
  percentageType?: "positive" | "negative";
  period?: string;
  showTrending?: boolean;
  height?: number;
  currency?: string;
  showCurrency?: boolean;
}

const ReusableBarChart = ({
  data,
  dataKey,
  xAxisKey,
  color = "#0000ff30",
  title,
  description,
  footerText,
  trendingPercentage,
  showTrending = false,
  percentageType,
  period,
  currency = "$",
  showCurrency = false,
}: ReusableBarChartProps) => {
  const values = data.map((item) => Number(item[dataKey]) || 0);
  const maxValue = Math.max(...values);

  const paddedMaxValue = maxValue * 1.05;

  const formatValue = (value: number) => {
    const formatted = value.toLocaleString();
    return showCurrency ? `${currency}${formatted}` : formatted;
  };

  const chartConfig = {
    [dataKey]: {
      label: dataKey.charAt(0).toUpperCase() + dataKey.slice(1),
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (typeof value === "string" && value.length > 3) {
                  return value.slice(0, 10);
                }
                return value;
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatValue}
              width={showCurrency ? 80 : 60}
              domain={[0, paddedMaxValue]}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => formatValue(Number(value))}
                />
              }
            />
            <Bar dataKey={dataKey} fill={color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {(showTrending || footerText) && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {showTrending && trendingPercentage !== undefined && (
            <div className="flex gap-2 leading-none font-medium">
              Trending {percentageType === "positive" ? "up" : "down"} by{" "}
              {trendingPercentage}% this {period || "period"}
              {percentageType === "positive" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
            </div>
          )}
          {footerText && (
            <div className="text-muted-foreground leading-none">
              {footerText}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ReusableBarChart;
