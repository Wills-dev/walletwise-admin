import { DollarSign, Shield, TrendingUp, User, Wallet } from "lucide-react";

import { WalletType } from "../../types";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { canViewTransactions } from "@/lib/helpers/canViewTransactions";

const WalletSection = ({
  wallet,
  commissionBalance,
  isLoading,
  referralCount,
  userId,
  currentAdminId,
}: {
  wallet: WalletType;
  commissionBalance: number;
  isLoading: boolean;
  referralCount: number;
  userId: string;
  currentAdminId: string;
}) => {
  return (
    <CardWrapper loading={isLoading}>
      {canViewTransactions(userId, currentAdminId) && (
        <>
          <StatisticCard
            icon={<Wallet className="w-5 h-5" />}
            title="Current Balance"
            color="blue"
            value={Number(wallet?.balance)}
            currency="₦"
          />
          <StatisticCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Commission Balance"
            color="green"
            value={Number(commissionBalance)}
            currency="₦"
          />
        </>
      )}
      <StatisticCard
        icon={<DollarSign className="w-5 h-5" />}
        title="Daily Spend Limit"
        color="orange"
        value={Number(wallet?.daily_spend_limit)}
        currency="₦"
      />
      <StatisticCard
        icon={<Shield className="w-5 h-5" />}
        title="Max Balance"
        color="purple"
        value={Number(wallet?.max_balance)}
        currency="₦"
      />
      <StatisticCard
        icon={<User className="w-5 h-5" />}
        title="Referral"
        color="blue"
        value={Number(referralCount)}
      />
    </CardWrapper>
  );
};

export default WalletSection;
