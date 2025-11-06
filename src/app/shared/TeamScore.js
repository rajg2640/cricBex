import Image from "next/image";

const TeamScore = ({ firstTeam, secondTeam, isLive = false }) => {
  return (
    <div className="space-y-4 mt-4">
      {/* First Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="max-w-6 max-h-6"
            alt={`${firstTeam?.name} Flag`}
            src={firstTeam?.flag}
          />
          <p
            className={`font-bold leading-[19px] capitalize ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            {firstTeam?.name}
          </p>
        </div>
        <div className="text-right">
          <p
            className={`font-semibold leading-[19px] ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            <span>{firstTeam?.score}</span>
            <span className="inline-block mx-0.5">
              {firstTeam?.wicket === "10" ? "" : "/"}
            </span>
            <span>
              {firstTeam?.wicket === "10" ? "" : firstTeam?.wicket || 0}
            </span>
          </p>
          <span
            className={`text-xs block leading-[14px] ${
              isLive ? "text-white" : "text-dark-gray-100"
            }`}
          >
            ({firstTeam?.over})
          </span>
        </div>
      </div>

      {/* Second Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="max-w-6 max-h-6"
            alt={`${secondTeam?.name} Flag`}
            src={secondTeam?.flag}
          />
          <p
            className={`font-bold leading-[19px] capitalize ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            {secondTeam?.name}
          </p>
        </div>
        {secondTeam?.score ? (
          <div className="text-right">
            <p
              className={`font-semibold leading-[19px] ${
                isLive ? "text-white" : "text-dark-gray-50"
              }`}
            >
              <span>{secondTeam?.score}</span>
              <span className="inline-block mx-0.5">
                {secondTeam?.wicket === "10" ? "" : "/"}
              </span>
              <span>
                {secondTeam?.wicket === "10" ? "" : secondTeam?.wicket || 0}
              </span>
            </p>
            <span
              className={`text-xs block leading-[14px] ${
                isLive ? "text-white" : "text-dark-gray-100"
              }`}
            >
              ({secondTeam?.over})
            </span>
          </div>
        ) : (
          <p
            className={`capitalize leading-[19px] text-right ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            yet to bat
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamScore;
