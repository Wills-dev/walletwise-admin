import { FormEvent } from "react";

import { Column } from "./Column";
import { ColumnDef } from "@tanstack/react-table";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import { userSortOptions } from "../../constants";

interface ManageUserTableProps<TData = unknown> {
  data: TData[];
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
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  isLoading: boolean;
  refetch: () => void;
  handleSortChange: (values: { [key: number]: string }) => void;
}

const ManageUserTable = ({
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToFirstPage,
  goToLastPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  search,
  handleChange,
  handleClear,
  onSubmit,
  isLoading,
  refetch,
  handleSortChange,
}: ManageUserTableProps) => {
  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div>
      {isLoading ? (
        <TableLoader />
      ) : (
        <TableWrapper
          columns={typedColumns}
          data={data || []}
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
          search={search}
          handleChange={handleChange}
          handleClear={handleClear}
          onSubmit={onSubmit}
          handleSortChange={handleSortChange}
          refetch={refetch}
          sortOptions={userSortOptions}
        />
      )}
    </div>
  );
};

export default ManageUserTable;
