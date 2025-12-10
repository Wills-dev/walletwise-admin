interface CalendarDayCellProps {
  day: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isFuture: boolean;
  inRange: boolean;
  isStart: boolean;
  isEnd: boolean;
  onClick: () => void;
}

const CalendarDayCell = ({
  day,
  isCurrentMonth,
  isToday,
  isFuture,
  inRange,
  isStart,
  isEnd,
  onClick,
}: CalendarDayCellProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isFuture}
      className={`
      h-10 w-10 flex items-center justify-center text-sm font-medium rounded-lg transition-all
      ${
        !isCurrentMonth
          ? "text-gray-400 dark:text-gray-600"
          : "text-gray-900 dark:text-gray-100"
      }
      ${
        isFuture
          ? "text-gray-300 dark:text-gray-700 cursor-not-allowed opacity-50"
          : "hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      }
      ${isToday ? "ring-2 ring-purple-500 ring-inset" : ""}
      ${
        inRange && !isStart && !isEnd
          ? "bg-purple-100 dark:bg-purple-900/30"
          : ""
      }
      ${
        isStart || isEnd
          ? "bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
          : ""
      }
    `}
    >
      {day.getDate()}
    </button>
  );
};

export default CalendarDayCell;
