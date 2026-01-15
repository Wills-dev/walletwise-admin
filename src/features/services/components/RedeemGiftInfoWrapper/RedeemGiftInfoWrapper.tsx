"use client";

import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import ActionButtons from "@/components/molecules/ActionButtons/ActionButtons";
import GiftCardSummaryCard from "@/components/molecules/GiftCardSummaryCard/GiftCardSummaryCard";
import CardDetailsCard from "@/components/molecules/CardDetailsCard/CardDetailsCard";
import CardImageCard from "@/components/molecules/CardImageCard/CardImageCard";

import { useGetRedeemGiftInfo } from "../../hooks/useGetRedeemGiftInfo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RedeemGiftInfoWrapper = ({ serviceId }: { serviceId: string }) => {
  const { data, isLoading } = useGetRedeemGiftInfo(serviceId);

  const giftBreadcrumb = [
    { label: `Redeem Giftcard`, href: `/services/gift-redeem` },
    { label: "Transaction Info" },
  ];

  const handleRedeem = async () => {
    console.log("Redeeming gift card...");
  };

  const handleDecline = async () => {
    console.log("Declining gift card...");
  };

  const isRedeemed = data?.status === "redeemed";
  const isDeclined = data?.status === "declined";

  return (
    <div className="space-y-4">
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <PageTitle
            title="Redeem Giftcard Details"
            description={`ID: #${data?.id}`}
          />
          <AppBreadcrumb items={giftBreadcrumb} />

          <div className="space-y-6">
            {isRedeemed && (
              <Alert className="border-emerald-500/20 bg-emerald-500/5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <AlertDescription className="text-emerald-700 dark:text-emerald-300">
                  This gift card has been successfully redeemed and the user has
                  been credited.
                </AlertDescription>
              </Alert>
            )}

            {isDeclined && (
              <Alert className="border-red-500/20 bg-red-500/5">
                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-700 dark:text-red-300">
                  This gift card has been declined and the user has been
                  notified.
                </AlertDescription>
              </Alert>
            )}
            <Separator />
            <ActionButtons
              data={data}
              onRedeem={handleRedeem}
              onDecline={handleDecline}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GiftCardSummaryCard data={data} />
              <CardDetailsCard data={data} />
            </div>

            <CardImageCard imageUrl={data?.image_url} />
          </div>
        </>
      )}
    </div>
  );
};

export default RedeemGiftInfoWrapper;
