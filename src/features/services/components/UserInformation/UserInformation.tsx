import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceData } from "../../types";
import { Calendar, Mail, Phone, Tag, User } from "lucide-react";

import InfoItem from "@/components/atoms/InfoItem/InfoItem";

const UserInformation = ({ data }: { data: ServiceData }) => {
  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <User className="w-5 h-5" />
          User Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <InfoItem
          icon={User}
          label="Name"
          value={`${data?.first_name} ${data?.last_name}`.replace(
            /\b\w/g,
            (l) => l.toUpperCase()
          )}
        />
        <InfoItem icon={Mail} label="Email" value={data?.user_email} />
        <InfoItem icon={Phone} label="Phone" value={data?.phone_number} />
        <InfoItem icon={Tag} label="User Tag" value={`@${data?.user_tag}`} />
        <InfoItem
          icon={Calendar}
          label="Member Since"
          value={new Date(data?.user_created_at).toLocaleDateString("en-NG", {
            dateStyle: "medium",
          })}
        />
      </CardContent>
    </Card>
  );
};

export default UserInformation;
