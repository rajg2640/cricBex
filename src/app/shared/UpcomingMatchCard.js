import Image from "next/image";

const UpcomingMatchCard = ({ data }) => {
  return (
    <div className="py-4 px-6 border-b border-black/10 space-y-4 last-of-type:border-0">
      {/* Time and Format */}
      <div className="flex items-center justify-between">
        <p className="text-dark-gray-100 text-xs leading-[14px]">
          {data?.time}
        </p>
        <div className="text-[10px] leading-[12px] bg-light-gray-50 border-[0.5px] border-dark-gray-400 text-dark-gray-100 p-1 rounded-[2px]">
          {data?.format}
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold leading-[19px] capitalize">
          <Image
            className="max-w-6 max-h-6"
            src={data?.firstTeamFlag}
            alt={`${data?.firstTeam} Flag`}
          />
          {data?.firstTeam}
        </div>
        <p className="text-dark-gray-50/50 text-xs leading-[14px]">vs</p>
        <div className="flex items-center gap-2 font-bold leading-[19px] capitalize">
          <Image
            className="max-w-6 max-h-6"
            src={data?.secondTeamFlag}
            alt={`${data?.secondTeam} Flag`}
          />
          {data?.secondTeam}
        </div>
      </div>

      {/* Match Details */}
      <div className="text-xs leading-[14px]">
        <p className="text-dark-gray-50/80 font-semibold">
          {data?.matchDetail}
        </p>
        <p className="text-dark-gray-50/50 mt-1">{data?.venue}</p>
      </div>
    </div>
  );
};

export default UpcomingMatchCard;
