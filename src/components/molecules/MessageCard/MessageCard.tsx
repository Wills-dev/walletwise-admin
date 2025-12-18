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

const MessageCard = ({ message }: { message: Message }) => {
  return (
    <Card className="border-border/50 shadow-sm dark:bg-gray-800">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              {message?.subject}
            </CardTitle>
            <CardDescription className="mt-1.5 text-xs">
              From: {message?.admin_details.first_name}{" "}
              {message?.admin_details.last_name}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-xs">
            {new Date(message?.created_at).toLocaleDateString("en-NG", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="prose prose-sm dark:prose-invert max-w-none text-foreground/90"
          dangerouslySetInnerHTML={{ __html: message?.message }}
        />
      </CardContent>
    </Card>
  );
};

export default MessageCard;
