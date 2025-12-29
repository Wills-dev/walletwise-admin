import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { chartConfig } from "@/features/users/constants";

export function UserPieChart({
  userCount,
}: {
  userCount: { state: string }[];
}) {
  const id = "pie-interactive";

  const updatedUserCount = userCount?.map((item) => ({
    ...item,
    fill: chartConfig[item.state]?.color || "hsl(0, 0%, 50%)",
  }));

  return (
    <Card data-chart={id} className="w-full dark:bg-gray-800 ">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-lg"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={updatedUserCount}
              dataKey="count"
              nameKey="state"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            ></Pie>
            <ChartLegend
              className="-translate-y-2 flex flex-wrap gap-2 justify-center"
              content={<ChartLegendContent nameKey="state" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
