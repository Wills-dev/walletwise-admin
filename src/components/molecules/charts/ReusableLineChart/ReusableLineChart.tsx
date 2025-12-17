"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
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

interface LineConfig {
  dataKey: string;
  label: string;
  color: string;
}

interface ReusableLineChartProps {
  data: Array<Record<string, unknown>>;
  lines: LineConfig[];
  xAxisKey: string;
  title?: string;
  description?: string;
  trendingPercentage?: number;
  percentageType?: "negative" | "positive";
  showTrending?: boolean;
  height?: number;
  currency?: string;
  showCurrency?: boolean;
  showDots?: boolean;
  lineType?: "monotone" | "linear" | "step";
}

const ReusableLineChart = ({
  data,
  lines,
  xAxisKey,
  title = "Line Chart",
  description,
  trendingPercentage,
  showTrending = false,
  currency = "$",
  showCurrency = false,
  showDots = false,
  lineType = "monotone",
  percentageType,
}: ReusableLineChartProps) => {
  const allValues = data.flatMap((item) =>
    lines.map((line) => Number(item[line.dataKey]) || 0)
  );
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);

  const paddedMaxValue = maxValue > 0 ? maxValue * 1.1 : maxValue * 0.9;
  const paddedMinValue = minValue < 0 ? minValue * 1.1 : 0;

  const formatValue = (value: number) => {
    const formatted = Math.abs(value).toLocaleString();
    const sign = value < 0 ? "-" : "";
    return showCurrency
      ? `${sign}${currency}${formatted}`
      : `${sign}${formatted}`;
  };

  const chartConfig = lines.reduce((config, line) => {
    config[line.dataKey] = {
      label: line.label,
      color: line.color,
    };
    return config;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (typeof value === "string" && value.length > 3) {
                  return value.slice(0, 3);
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
              domain={[paddedMinValue, paddedMaxValue]}
            />
            <ChartTooltip
              cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }}
              content={
                <ChartTooltipContent
                  formatter={(value) => formatValue(Number(value))}
                />
              }
            />
            {lines.map((line) => (
              <Line
                key={line.dataKey}
                dataKey={line.dataKey}
                type={lineType}
                stroke={line.color}
                strokeWidth={2}
                dot={showDots}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      {showTrending && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              {showTrending && trendingPercentage !== undefined && (
                <div className="flex items-center gap-2 leading-none font-medium">
                  Trending {percentageType === "positive" ? "up" : "down"} by{" "}
                  {Math.abs(trendingPercentage)}% this month
                  {percentageType === "positive" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                </div>
              )}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ReusableLineChart;
