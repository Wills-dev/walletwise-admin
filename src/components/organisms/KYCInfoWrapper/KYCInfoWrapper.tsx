"use client";

import KYCVerificationOverallStatus from "@/components/atoms/KYCVerificationOverallStatus/KYCVerificationOverallStatus";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import UserInfoLoader from "@/components/atoms/skeleton/UserInfoLoader";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import DocumentDetailsCard from "@/components/molecules/DocumentDetailsCard/DocumentDetailsCard";
import ImagePreviewCard from "@/components/molecules/ImagePreviewCard/ImagePreviewCard";
import KYCActionButtons from "@/components/molecules/KYCActionButtons/KYCActionButtons";
import KYCUserProfile from "@/components/molecules/KYCUserProfile/KYCUserProfile";
import VerificationStatusCard from "@/components/molecules/VerificationStatusCard/VerificationStatusCard";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

import { kycBreadcrumb } from "@/features/users/constants";
import { useGetKycInfo } from "@/lib/hooks/useGetKycInfo";
import { FileCheck, ImagePlus, User, XCircle } from "lucide-react";

const KYCInfoWrapper = ({ kycId }: { kycId: string }) => {
  const { data, isLoading } = useGetKycInfo(kycId);

  const isDocPresent =
    data?.kyc?.kyc_details?.proofOfAddressImage ||
    data?.kyc?.kyc_details?.validIDImage ||
    data?.kyc?.kyc_details?.passportImage;

  return (
    <div className="space-y-6">
      <PageTitle title="KYC Details" description="Manage user kyc details" />
      <AppBreadcrumb items={kycBreadcrumb} />
      {isLoading ? (
        <>
          <UserInfoLoader />
          <UserInfoLoader />
        </>
      ) : (
        <>
          <KYCVerificationOverallStatus
            overallStatus={data?.kyc?.overall_status}
          />
          {data?.kyc?.error_reason && (
            <Alert className="border-red-500/20 bg-red-500/5">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertDescription className="text-red-700 dark:text-red-300">
                <strong>Declined:</strong> {data?.kyc?.error_reason}
              </AlertDescription>
            </Alert>
          )}
          <KYCUserProfile user={data?.user} tier={data?.kyc?.tier} />
          <Separator />
          <KYCActionButtons />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VerificationStatusCard kycData={data?.kyc} />
            <DocumentDetailsCard kycDetails={data?.kyc?.kyc_details} />
          </div>
          {isDocPresent && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <ImagePlus className="w-5 h-5" />
                Submitted Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.kyc?.kyc_details?.validIDImage && (
                  <ImagePreviewCard
                    title="Valid ID"
                    imageUrl={data?.kyc?.kyc_details?.validIDImage}
                    icon={<FileCheck className="w-4 h-4" />}
                  />
                )}
                {data?.kyc?.kyc_details?.passportImage && (
                  <ImagePreviewCard
                    title="Passport Photo"
                    imageUrl={data?.kyc?.kyc_details?.passportImage}
                    icon={<User className="w-4 h-4" />}
                  />
                )}
                {data?.kyc?.kyc_details?.proofOfAddressImage && (
                  <ImagePreviewCard
                    title="Proof of Address"
                    imageUrl={data?.kyc?.kyc_details?.proofOfAddressImage}
                    icon={<FileCheck className="w-4 h-4" />}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default KYCInfoWrapper;
