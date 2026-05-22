import { convertDateFormat, formatDate } from "@/lib/helpers/dateFormats";

const TableDate = ({
  date,
  showWithTime,
}: {
  date: string;
  showWithTime?: boolean;
}) => {
  const dateWithTime = formatDate(date);
  const dateWithoutTime = convertDateFormat(date);

  const formattedDate = showWithTime ? dateWithTime : dateWithoutTime;

  return <p className="whitespace-nowrap">{formattedDate}</p>;
};

export default TableDate;
