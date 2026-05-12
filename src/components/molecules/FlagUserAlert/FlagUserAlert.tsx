"use client";

import { FormEvent } from "react";

import { CheckCircle2, StopCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useFlagUser } from "@/features/users/hooks/useFlagUser";

import FlagUserModal from "../modals/FlagUserModal/FlagUserModal";
import { Button } from "@/components/ui/button";

const FlagUserAlert = ({
  email,
  isSuspicious,
  reason,
}: {
  email: string;
  isSuspicious: boolean;
  reason?: string;
}) => {
  const {
    isOpen,
    setIsOpen,
    flagUserAccount,
    flagUserAcct,
    handleChange,
    isUpdating,
  } = useFlagUser(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    flagUserAccount(email);
  };

  return (
    <>
      <Alert
        className={`flex items-center ${
          !isSuspicious
            ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
            : "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400"
        }`}
      >
        {!isSuspicious ? (
          <CheckCircle2 className="h-4 w-4 " />
        ) : (
          <StopCircle className="h-4 w-4 " />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap flex-1 w-full">
          <div className="">
            <AlertTitle>
              {isSuspicious ? "Want to unflag user?" : "Want to flag user?"}
            </AlertTitle>
            {isSuspicious && reason && (
              <AlertDescription className="">{reason}</AlertDescription>
            )}
          </div>
          <Button
            variant={isSuspicious ? "destructive" : "outline"}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {isSuspicious ? "Unflag" : "Flag"} user
          </Button>
        </div>
      </Alert>
      <FlagUserModal
        open={isOpen}
        setOpen={setIsOpen}
        handleChange={handleChange}
        flagUserAcc={flagUserAcct}
        handleSubmit={handleSubmit}
        isFlagged={isSuspicious}
        isUpdating={isUpdating}
      />
    </>
  );
};

export default FlagUserAlert;
