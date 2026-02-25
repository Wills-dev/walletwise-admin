import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Message } from "@/features/tickets/types";
import { MessageSquare } from "lucide-react";
import { formatDate } from "@/lib/helpers/dateFormats";

const MessageCard = ({ message }: { message: Message }) => {
  const formattedContent = (message?.message || "").replace(/&nbsp;/g, " ");

  return (
    <Card className="border-border/50 shadow-sm dark:bg-gray-800">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between flex-wrap">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              {message?.subject}
            </CardTitle>
            <CardDescription className="mt-1.5 text-xs">
              Support Agent: {message?.admin_details.first_name}{" "}
              {message?.admin_details.last_name}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-xs">
            {message?.created_at && formatDate(message?.created_at)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="max-w-2xl">
        <div
          className="prose prose-sm dark:prose-invert wrap-break-words whitespace-normal max-w-none text-foreground/90"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </CardContent>
    </Card>
  );
};

export default MessageCard;
