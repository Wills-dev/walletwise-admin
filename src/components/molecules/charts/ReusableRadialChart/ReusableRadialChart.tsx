"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

interface ReusableRadialChartProps {
  value: number;
  maxValue?: number;
  label: string;
  color?: string;
  title?: string;
  description?: string;
  footerText?: string;
  trendingPercentage?: number;
  showTrending?: boolean;
  currency?: string;
  showCurrency?: boolean;
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
  percentageType?: "positive" | "negative";
  period?: string;
}

const ReusableRadialChart = ({
  value,
  maxValue = 100,
  label,
  color = "hsl(220, 70%, 50%)",
  title = "Radial Chart",
  description,
  footerText,
  trendingPercentage,
  percentageType,
  showTrending = false,
  currency = "₦",
  showCurrency = false,
  size = 250,
  innerRadius = 80,
  outerRadius = 140,
  period = "today",
}: ReusableRadialChartProps) => {
  const percentage = (value / maxValue) * 100;
  const endAngle = (percentage / 100) * 360 - 90;

  const formatValue = (val: number) => {
    const formatted = val.toLocaleString();
    return showCurrency ? `${currency}${formatted}` : formatted;
  };

  const chartData = [
    {
      name: label,
      value: value,
      fill: color,
    },
  ];

  const chartConfig = {
    value: {
      label: label,
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col dark:bg-gray-800 h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="capitalize">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square "
          style={{ maxHeight: `${size}px` }}
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[innerRadius + 6, innerRadius - 6]}
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground  font-bold"
                        >
                          {formatValue(value)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground capitalize text-sm"
                        >
                          {label}
                        </tspan>
                        {/* <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 42}
                          className="fill-muted-foreground text-xs"
                        >
                          {percentage.toFixed(1)}% of {formatValue(maxValue)}
                        </tspan> */}
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {(showTrending || footerText) && (
        <CardFooter className="flex-col gap-2 text-sm">
          {showTrending && trendingPercentage !== undefined && (
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending {percentageType === "positive" ? "up" : "down"} by{" "}
              <span
                className={
                  percentageType === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {trendingPercentage}%
              </span>
              {period}
              {percentageType === "positive" ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ReusableRadialChart;
