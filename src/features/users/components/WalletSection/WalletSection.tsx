import { DollarSign, Shield, TrendingUp, User, Wallet } from "lucide-react";

import { WalletType } from "../../types";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

const WalletSection = ({
  wallet,
  commissionBalance,
  isLoading,
  referralCount,
}: {
  wallet: WalletType;
  commissionBalance: number;
  isLoading: boolean;
  referralCount: number;
}) => {
  return (
    <CardWrapper loading={isLoading}>
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
