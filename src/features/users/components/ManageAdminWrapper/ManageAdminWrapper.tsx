"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import { useGetAdmins } from "../../hooks/useGetAdmins";
import AdminSummary from "../AdminSummary/AdminSummary";
import ManageAdminTable from "../ManageAdminTable/ManageAdminTable";
import CreateAdminActionPanel from "@/components/molecules/CreateAdminActionPanel/CreateAdminActionPanel";

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
      <div className="flex md:items-center justify-between flex-wrap gap-4">
        <PageTitle
          title="Admin Management"
          description="Manage administrator information and permissions"
        />
        <CreateAdminActionPanel />
      </div>

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
