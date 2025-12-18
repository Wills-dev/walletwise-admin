"use client";

import ReactQuill from "react-quill-new";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import Button from "@/components/atoms/Button/Button";

import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";
import { useUpdateTicketStatus } from "@/features/tickets/hooks/useUpdateTicketStatus";

import { Card, CardContent } from "@/components/ui/card";

const RespondTicketForm = ({ ticketId }: { ticketId: string }) => {
  const {
    handleSubmit,
    isPending,
    messageContent,
    setMessageContent,
    handleChange,
    disputeRes,
  } = useUpdateTicketStatus(ticketId);

  const isFormFilled = areAllFieldsFilled(disputeRes);

  const ticketStatus = [
    { label: "Processing", value: "processing" },
    { label: "Resolved", value: "resolved" },
  ];
  return (
    <Card className="border-border/50 bg-muted/30 dark:bg-gray-800">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div className="overflow-y-auto mb-4">
            <h3 className="text-xl font-semibold mb-4">Message</h3>
          </div>
          <div className="space-y-1">
            <Label title="Status" />
            <Select
              value={disputeRes.status}
              onChange={handleChange}
              name="status"
              options={ticketStatus}
              placeholder="Select status"
            />
          </div>
          <div className="space-y-1">
            <Label title="Subject" />
            <Input
              value={disputeRes.subject}
              onChange={handleChange}
              type="text"
              name="subject"
              placeholder=""
            />
          </div>
          <div className="space-y-1">
            <Label title="Message" />
            <ReactQuill
              theme="snow"
              value={messageContent}
              onChange={setMessageContent}
              className=""
              modules={{
                toolbar: [
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  [{ align: [] }],
                  ["clean"],
                ],
              }}
            />
          </div>
          <Button
            type="submit"
            loading={isPending}
            disabled={!isFormFilled || !messageContent}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RespondTicketForm;
