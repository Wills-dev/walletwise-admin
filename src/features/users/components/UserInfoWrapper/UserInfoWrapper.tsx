"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import WalletSection from "../WalletSection/WalletSection";
import UserInfoLoader from "@/components/atoms/skeleton/UserInfoLoader";
import SessionsSection from "../SessionsSection/SessionsSection";
import UserLogsSection from "../UserLogsSection/UserLogsSection";
import SecuritySection from "../SecuritySection/SecuritySection";
import UserTransactionTable from "../UserTransactionTable/UserTransactionTable";

import { userBreadcrumb } from "../../constants";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const UserInfoWrapper = ({ userId }: { userId: string }) => {
  const {
    data,
    isLoading,
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
  } = useGetUserInfo(userId);

  return (
    <div className="space-y-4">
      <PageTitle
        title="User Details"
        description="Comprehensive user information and activity"
      />
      <AppBreadcrumb items={userBreadcrumb} />
      {isLoading ? (
        <UserInfoLoader />
      ) : (
        <>
          <UserProfileCard user={data?.user} />
        </>
      )}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Wallet Overview
        </h2>
        <WalletSection
          isLoading={isLoading}
          wallet={data?.wallet}
          commissionBalance={data?.commissionBalance}
          referralCount={data?.referralCount || 0}
        />
      </div>
      <UserTransactionTable
        isLoading={isLoading}
        data={data?.transactions?.transactions}
        totalPages={data?.transactions?.totalPages}
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
      {isLoading ? (
        <>
          <UserInfoLoader />
          <UserInfoLoader />
        </>
      ) : (
        <>
          <SessionsSection sessions={data?.sessions?.sessions} />
          <UserLogsSection userLogs={data?.userLogs?.logs} />
          <SecuritySection securityQuestions={data?.securityQuestions} />
        </>
      )}
    </div>
  );
};

export default UserInfoWrapper;
