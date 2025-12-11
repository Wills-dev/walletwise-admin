"use client";

import { useGetUsers } from "../../hooks/useGetUsers";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import UserSummary from "../UserSummary/UserSummary";
import ManageUserTable from "../ManageUserTable/ManageUserTable";

const ManageUserWrapper = () => {
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
    refetch,
    handleStatusChange,
    handleSortChange,
  } = useGetUsers();

  return (
    <div className="space-y-6">
      <PageTitle
        title="User Management"
        description="Manage walletwise user here"
      />
      <UserSummary
        isLoading={isLoading}
        handleStatusChange={handleStatusChange}
        activeUsers={data?.userStats?.activeUsers}
        totalUsers={data?.userStats?.totalUsers}
        unknownUsers={data?.userStats?.unknownUsers}
        inactiveUsers={data?.userStats?.inactiveUsers}
      />
      <ManageUserTable
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        data={data?.users || []}
        totalPages={data?.totalPages}
        currentPage={currentPage}
        isLoading={isLoading}
        search={search}
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
        handleSortChange={handleSortChange}
        refetch={refetch}
      />
    </div>
  );
};

export default ManageUserWrapper;
