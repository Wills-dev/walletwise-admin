import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import InfoRow from "@/components/atoms/InfoRow/InfoRow";

import { Card } from "../../types/virtualCards";
import { convertDateFormat } from "@/lib/helpers/dateFormats";

const CardInfoWrapper = ({ card }: { card: Card }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-end">
          {" "}
          <StatusBubble status={card?.card_status} />
        </div>
        <div className="overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-white/70">Virtual Card</p>

              <h1 className="mt-1 text-xl font-semibold">Visa New Card</h1>
            </div>

            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              {card?.brand}
            </span>
          </div>

          <div className="mt-10">
            <p className="text-2xl tracking-[0.3em]">{card?.card_number}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70">Expiry</p>
              <p className="font-medium">{card?.expiry}</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-white/70">Type</p>
              <p className="font-medium">{card?.type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
          Owner Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <InfoRow
            label="Full Name"
            value={card?.owner.full_name}
            href={`/manage-user/info/${card?.owner.user_id}`}
          />

          <InfoRow
            label="Username"
            value={card?.owner.user_tag}
            href={`/manage-user/info/${card?.owner.user_id}`}
          />

          <InfoRow label="Email Address" value={card?.owner?.email} />

          <InfoRow label="User ID" value={card?.owner?.user_id} />
          <InfoRow
            label="Created At"
            value={card?.created_at && convertDateFormat(card?.created_at)}
          />
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
          Timeline
        </h2>

        <div className="space-y-5">
          <InfoRow label="Created At" value="11 Jun 2026, 10:29 AM" />

          <InfoRow label="Updated At" value="11 Jun 2026, 10:29 AM" />
        </div>
      </div>
    </div>
  );
};

export default CardInfoWrapper;
