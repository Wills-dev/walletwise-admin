import { Label, Pie, PieChart, Sector } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

type ChartConfigType = {
  userCount: {
    label: string;
  };
  [key: string]: {
    label: string;
    color?: string;
  };
};

const chartConfig: ChartConfigType = {
  userCount: {
    label: "Users",
  },
  January: {
    label: "January",
    color: "hsl(220, 70%, 50%)",
  },
  February: {
    label: "February",
    color: "hsl(340, 75%, 55%)",
  },
  March: {
    label: "March",
    color: "hsl(160, 60%, 45%)",
  },
  April: {
    label: "April",
    color: "hsl(280, 65%, 60%)",
  },
  May: {
    label: "May",
    color: "hsl(30, 80%, 55%)",
  },
  June: {
    label: "June",
    color: "hsl(200, 70%, 50%)",
  },
  July: {
    label: "July",
    color: "hsl(0, 70%, 60%)",
  },
  August: {
    label: "August",
    color: "hsl(140, 55%, 50%)",
  },
  September: {
    label: "September",
    color: "hsl(260, 60%, 55%)",
  },
  October: {
    label: "October",
    color: "hsl(40, 75%, 50%)",
  },
  November: {
    label: "November",
    color: "hsl(180, 65%, 45%)",
  },
  December: {
    label: "December",
    color: "hsl(320, 70%, 55%)",
  },
};
const UserRadialChart = ({
  userCount,
  year,
}: {
  year: string;
  userCount: { month: string; userCount: number }[];
}) => {
  const id = "pie-interactive";
  const [activeMonth, setActiveMonth] = useState(userCount[0].month);

  const activeIndex = useMemo(
    () => userCount.findIndex((item) => item.month === activeMonth),
    [activeMonth, userCount]
  );
  const months = useMemo(
    () => userCount.map((item) => item.month),
    [userCount]
  );

  const updatedUserCount = userCount?.map((item) => ({
    ...item,
    fill: chartConfig[item.month]?.color || "hsl(0, 0%, 50%)",
  }));

  return (
    <Card data-chart={id} className="w-full dark:bg-gray-800">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Users breakdown {year}</CardTitle>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = chartConfig[key];
              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={updatedUserCount}
              dataKey="userCount"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {userCount?.length > 0 &&
                            userCount[activeIndex]?.userCount?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Users
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserRadialChart;
