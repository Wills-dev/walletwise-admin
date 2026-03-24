"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TransactionHistory from "@/components/molecules/TransactionHistory/TransactionHistory";
import TransactionSummary from "@/components/molecules/TransactionSummary/TransactionSummary";
import { DateFilterValue } from "@/lib/types";
import { FormEvent } from "react";

interface AllTransactionsProps<TData = unknown> {
  isLoading: boolean;
  transactions: TData[];
  total_transactions: number;
  total_transactions_exclude_transfer: number;
  setExcludeTransfer: (exclude: boolean) => void;
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  setSelectedDateFilterValue: (value: DateFilterValue) => void;
  refetch: () => void;
  handleSortChange: (values: { [key: number]: string }) => void;
  search: string | number;
  handleChange: (search: string) => void;
  handleClear: () => void;
  onSubmit: (e: FormEvent) => void;
  setCurrentPage: (page: number) => void;
  title: string;
}

const AllTransactions = ({
  transactions,
  total_transactions,
  total_transactions_exclude_transfer,
  isLoading,
  setExcludeTransfer,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToLastPage,
  goToFirstPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  setSelectedDateFilterValue,
  refetch,
  handleSortChange,
  search,
  handleChange,
  handleClear,
  onSubmit,
  setCurrentPage,
  title,
}: AllTransactionsProps) => {
  return (
    <div className="space-y-6">
      <PageTitle
        title={title}
        description="Track and manage all transaction details"
      />
      <TransactionSummary
        totalTransactionsExcludeTransfer={
          total_transactions_exclude_transfer | 0
        }
        setExcludeTransfer={setExcludeTransfer}
        isLoading={isLoading}
        totalTransactions={total_transactions | 0}
      />
      <TransactionHistory
        data={transactions}
        isLoading={isLoading}
        totalPages={totalPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        handleSortChange={handleSortChange}
        refetch={refetch}
        search={search}
        handleChange={handleChange}
        handleClear={handleClear}
        onSubmit={onSubmit}
        setCurrentPage={setCurrentPage}
        setSelectedDateFilterValue={setSelectedDateFilterValue}
      />
    </div>
  );
};

export default AllTransactions;
