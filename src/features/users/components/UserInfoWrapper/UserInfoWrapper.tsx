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
import UserReferralSection from "../UserReferralSection/UserReferralSection";
import { canViewTransactions } from "@/lib/helpers/canViewTransactions";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import RestrictionEmptyState from "@/components/atoms/RestrictionEmptyState/RestrictionEmptyState";
import UserDisputeSection from "../UserDisputeSection/UserDisputeSection";

const UserInfoWrapper = ({ userId }: { userId: string }) => {
  const { user } = useSelector((state: RootState) => state.auth);
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
    setCurrentPage,
  } = useGetUserInfo(userId);

  const currentAdminId = user?.id || "";

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
          referralCount={data?.referrals?.referralCount || 0}
        />
      </div>
      {canViewTransactions(userId, currentAdminId) ? (
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
          setCurrentPage={setCurrentPage}
          setLimit={setLimit}
        />
      ) : (
        <RestrictionEmptyState />
      )}
      <UserReferralSection
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
        isLoading={isLoading}
        userReferrals={data?.referrals?.referrals}
        setCurrentPage={setCurrentPage}
      />
      <UserDisputeSection
        userDisputes={data?.disputes?.disputes}
        totalPages={data?.disputes?.totalPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
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
