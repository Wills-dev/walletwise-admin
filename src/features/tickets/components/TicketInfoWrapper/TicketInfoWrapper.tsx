"use client";

import { AlertCircle } from "lucide-react";

import { Message } from "../../types";
import { ticketBreadcrumb } from "../../constants";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useGetTicketInfo } from "../../hooks/useGetTicketInfo";

import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import UserInfoCard from "@/components/molecules/UserInfoCard/UserInfoCard";
import TransactionInfoCard from "@/components/molecules/TransactionInfoCard/TransactionInfoCard";
import MessageCard from "@/components/molecules/MessageCard/MessageCard";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import RespondTicketForm from "@/components/molecules/RespondTicketForm/RespondTicketForm";

const TicketInfoWrapper = ({ ticketId }: { ticketId: string }) => {
  const { data, isLoading } = useGetTicketInfo(ticketId);

  return (
    <div className="space-y-4">
      <PageTitle
        title={`Ticket Details ${ticketId}`}
        description="Detailed ticket information"
      />
      <AppBreadcrumb items={ticketBreadcrumb} />
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <Card className="border-border/50 bg-muted/30 dark:bg-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div className="flex-1 w-full">
                  <p className="font-semibold text-foreground">
                    {data?.dispute_type}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {data?.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">
                    Dispute ID: {data?.dispute_id}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                    <p className="text-sm text-muted-foreground mt-1">
                      Created:{" "}
                      {new Date(data?.created_at).toLocaleDateString("en-NG", {
                        dateStyle: "long",
                      })}
                    </p>
                    <div className="flex items-center gap-3">
                      <StatusBubble status={data?.dispute_status} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Separator />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UserInfoCard user={data?.user} />
            <TransactionInfoCard transaction={data?.transaction} />
          </div>
          {data.messages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                Communication History
              </h2>
              <div className="space-y-4">
                {data.messages.map((message: Message) => (
                  <MessageCard key={message.message_id} message={message} />
                ))}
              </div>
            </div>
          )}
          {data?.dispute_status !== "resolved" && (
            <RespondTicketForm ticketId={ticketId} />
          )}
        </>
      )}
    </div>
  );
};

export default TicketInfoWrapper;
