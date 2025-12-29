"use client";

import Link from "next/link";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { numberWithCommas } from "@/lib/helpers";
import { useGetRecentTransactions } from "@/lib/hooks/useGetRecentTransactions";

const RecentTransactions = () => {
  const { data, isLoading } = useGetRecentTransactions();

  return (
    <>
      {isLoading ? (
        <ChartLoader />
      ) : (
        <Card className="sm:min-w-[300px] flex-1 w-full min-w-full dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Recent transactions</CardTitle>
          </CardHeader>
          <CardContent className="w-full px-0">
            {data
              ?.slice(0, 5)
              ?.map(
                (
                  transaction: { category: string; amount: number },
                  index: number
                ) => (
                  <Link
                    href={`/services/${transaction?.category}`}
                    className="flex items-center justify-between px-4 py-2 gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                    key={index}
                  >
                    <div className="">
                      <p className="font-semibold capitalize">
                        {transaction.category}
                      </p>
                      <p className="text-gray-400 text-sm">
                        ₦
                        {transaction?.amount &&
                          numberWithCommas(transaction?.amount)}
                      </p>
                    </div>
                  </Link>
                )
              )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default RecentTransactions;
