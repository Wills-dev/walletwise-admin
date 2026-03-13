import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { Users, Wallet, Ticket, TicketCheck, TicketX, Tag } from "lucide-react";

type EventSummaryProps = {
  isLoading: boolean;

  total_attendees: number;
  total_revenue: number;

  regular_total_quantity?: number;
  regular_sold?: number;
  regular_available?: number;
  regular_price?: number;

  vip_total_quantity?: number;
  vip_sold?: number;
  vip_available?: number;
  vip_price?: number;

  free_total_quantity?: number;
  free_sold?: number;
  free_available?: number;
};

const EventSummaryCard = ({
  isLoading,
  total_attendees,
  total_revenue,

  regular_total_quantity,
  regular_sold,
  regular_available,
  regular_price,

  vip_total_quantity,
  vip_sold,
  vip_available,
  vip_price,

  free_total_quantity,
  free_sold,
  free_available,
}: EventSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Revenue"
        value={total_revenue}
        currency="₦"
        icon={<Wallet />}
        color="green"
      />
      <StatisticCard
        title="Total Attendees"
        value={total_attendees}
        icon={<Users />}
        color="blue"
      />

      {regular_total_quantity !== undefined && (
        <StatisticCard
          title="Regular Total"
          value={regular_total_quantity}
          icon={<Ticket />}
          color="blue"
        />
      )}

      {regular_sold !== undefined && (
        <StatisticCard
          title="Regular Sold"
          value={regular_sold}
          icon={<TicketCheck />}
          color="green"
        />
      )}

      {regular_available !== undefined && (
        <StatisticCard
          title="Regular Available"
          value={regular_available}
          icon={<TicketX />}
          color="orange"
        />
      )}

      {regular_price !== undefined && (
        <StatisticCard
          title="Regular Price"
          value={regular_price}
          currency="₦"
          icon={<Tag />}
          color="purple"
        />
      )}

      {vip_total_quantity !== undefined && (
        <StatisticCard
          title="VIP Total"
          value={vip_total_quantity}
          icon={<Ticket />}
          color="blue"
        />
      )}

      {vip_sold !== undefined && (
        <StatisticCard
          title="VIP Sold"
          value={vip_sold}
          icon={<TicketCheck />}
          color="green"
        />
      )}

      {vip_available !== undefined && (
        <StatisticCard
          title="VIP Available"
          value={vip_available}
          icon={<TicketX />}
          color="orange"
        />
      )}

      {vip_price !== undefined && (
        <StatisticCard
          title="VIP Price"
          value={vip_price}
          currency="₦"
          icon={<Tag />}
          color="purple"
        />
      )}

      {free_total_quantity !== undefined && (
        <StatisticCard
          title="Free Total"
          value={free_total_quantity}
          icon={<Ticket />}
          color="blue"
        />
      )}

      {free_sold !== undefined && (
        <StatisticCard
          title="Free Claimed"
          value={free_sold}
          icon={<TicketCheck />}
          color="green"
        />
      )}

      {free_available !== undefined && (
        <StatisticCard
          title="Free Available"
          value={free_available}
          icon={<TicketX />}
          color="orange"
        />
      )}
    </CardWrapper>
  );
};

export default EventSummaryCard;
