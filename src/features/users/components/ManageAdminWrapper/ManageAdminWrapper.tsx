"use client";

import { useGetAdmins } from "../../hooks/useGetAdmins";
import AdminSummary from "../AdminSummary/AdminSummary";
import ManageAdminTable from "../ManageAdminTable/ManageAdminTable";

const ManageAdminWrapper = () => {
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
  } = useGetAdmins();

  return (
    <div className="space-y-6">
      <AdminSummary
        isLoading={isLoading}
        totalAdmin={data?.totalCount}
        adminStat={data?.adminStats}
      />
      <ManageAdminTable
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        data={data?.admins || []}
        totalPages={data?.totalPages}
        currentPage={currentPage}
        isLoading={isLoading}
        search={search}
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
      />
    </div>
  );
};

export default ManageAdminWrapper;
