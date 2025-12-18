import InfoItem from "@/components/atoms/InfoItem/InfoItem";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserType } from "@/features/tickets/types";
import { Hash, Mail, Phone, User } from "lucide-react";

const UserInfoCard = ({ user }: { user: UserType }) => {
  return (
    <Card className="border-border/50 shadow-sm dark:bg-gray-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <User className="w-5 h-5" />
          Customer Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <InfoItem
          icon={User}
          label="Name"
          value={
            <p className="capitalize">
              {user?.first_name} {user?.last_name}
            </p>
          }
        />
        <InfoItem icon={Mail} label="Email" value={user?.email} />
        <InfoItem icon={Phone} label="Phone" value={user?.phone_number} />
        <InfoItem icon={Hash} label="User Tag" value={`@${user?.user_tag}`} />
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
