"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { syncServices } from "@/lib/helpers/syncServices";
import { useGetTopServices } from "@/lib/hooks/useGetTopServices";
import { formatNumber } from "@/lib/helpers/formatNumbers";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";

const TopServices = () => {
  const { data, isLoading } = useGetTopServices();

  const topServices = syncServices(data);

  return (
    <>
      {isLoading ? (
        <ChartLoader />
      ) : (
        <Card className="sm:min-w-[300px] flex-1 w-full min-w-full dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Top 5 services</CardTitle>
          </CardHeader>
          <CardContent className="w-full px-0">
            {topServices?.map((service) => {
              const Icon = service?.icon;
              return (
                <Link
                  href={`/services/${service?.value}`}
                  className="flex items-center justify-between px-4 py-2 gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                  key={service?.value}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-11 w-11 rounded-lg flex items-center justify-center text-2xl`}
                      style={{
                        backgroundColor: service.bgColor,
                        color: service.color,
                      }}
                    >
                      <Icon className="" />
                    </div>
                    <p className="font-semibold capitalize">{service?.label}</p>
                  </div>
                  <p className="text-gray-400">
                    {service?.totalAmount && formatNumber(service?.totalAmount)}
                  </p>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TopServices;
