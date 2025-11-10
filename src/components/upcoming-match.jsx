import { format, isToday, isTomorrow, isValid } from "date-fns";

const formatDate = (date) => {
  if (isToday(date)) return "Today";

  if (isTomorrow(date)) return "Tomorrow";

  return format(date, "MMM d");
};

const formatTime = (date) => {
  if (!isValid(date)) return "N/A";
  return format(date, "h:mm a");
};

export const UpcomingMatch = ({ match }) => {
  const startDate = new Date(match?.startDate);

  return (
    <div className="py-4 px-6 border-b border-black/10 space-y-4 last-of-type:border-0">
      {/* Time and Format */}
      <div className="flex items-center justify-between">
        <p className="text-dark-gray-100 text-xs leading-[14px]">
          {isValid(startDate) ? (
            <>
              {formatDate(startDate)}
              <span className="mx-1 text-lg align-middle">•</span>
              {formatTime(startDate)}
            </>
          ) : (
            "N/A"
          )}
        </p>
        <div className="text-[10px] leading-[12px] bg-light-gray-50 border-[0.5px] border-dark-gray-400 text-dark-gray-100 p-1 rounded-[2px]">
          {match?.format}
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold leading-[19px] capitalize">
          <img
            className="max-w-6 max-h-6"
            src={match?.teams?.t1?.logo || ""}
            alt={`${match?.teams?.t1?.name} Flag`}
          />
          {match?.teams?.t1?.name}
        </div>
        <p className="text-dark-gray-50/50 text-xs leading-[14px]">vs</p>
        <div className="flex items-center gap-2 font-bold leading-[19px] capitalize">
          <img
            className="max-w-6 max-h-6"
            src={match?.teams?.t2?.logo}
            alt={`${match?.teams?.t2?.name} Flag`}
          />
          {match?.teams?.t2?.name}
        </div>
      </div>

      {/* Match Details */}
      <div className="text-xs leading-[14px]">
        <p className="text-dark-gray-50/80 font-semibold">
          {match?.seriesName}
        </p>
        {match?.ground && (
          <p className="text-dark-gray-50/50 mt-1">{match?.ground}</p>
        )}
      </div>
    </div>
  );
};
