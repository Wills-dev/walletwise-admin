import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

interface UserTransactionTableProps<TData = unknown> {
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
  isLoading: boolean;
}

const UserTransactionTable = ({
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
  isLoading,
}: UserTransactionTableProps) => {
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
        />
      )}
    </div>
  );
};

export default UserTransactionTable;
