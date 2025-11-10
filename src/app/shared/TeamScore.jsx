import { cn } from "@/lib/utils";

const TeamScore = ({ firstTeam, secondTeam, status, isLive = false }) => {
  return (
    <div className="space-y-4 mt-4">
      {/* First Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {firstTeam?.flag && (
            <img
              className="max-w-6 max-h-6"
              alt={`${firstTeam?.name} Flag`}
              src={firstTeam?.flag}
            />
          )}
          <p
            className={`font-bold leading-[19px] capitalize ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            {firstTeam?.name}
          </p>
        </div>
        <Score
          status={status}
          score={firstTeam?.score}
          wickets={firstTeam?.wicket}
          overs={firstTeam?.over}
          isLive={isLive}
        />
      </div>

      {/* Second Team */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative max-w-6 max-h-6">
            {secondTeam?.flag && (
              <img
                className="max-w-6 max-h-6"
                alt={`${secondTeam?.name} Flag`}
                src={secondTeam?.flag}
              />
            )}
          </div>
          <p
            className={`font-bold leading-[19px] capitalize ${
              isLive ? "text-white" : "text-dark-gray-50"
            }`}
          >
            {secondTeam?.name}
          </p>
        </div>
        <Score
          status={status}
          score={secondTeam?.score}
          wickets={secondTeam?.wicket}
          overs={secondTeam?.over}
          isLive={isLive}
        />
      </div>
    </div>
  );
};

const Score = ({ score, wickets, overs, isLive, status }) => {
  const isMatchAbandoned = status === "ABANDONED";

  if (isMatchAbandoned && !score) {
    return null;
  }

  return (
    <div className="text-right">
      <p
        className={`font-semibold leading-[19px] ${
          isLive ? "text-white" : "text-dark-gray-50"
        }`}
      >
        <span>{score}</span>
        {wickets && (
          <span className="inline-block mx-0.5">
            {wickets === "10" ? "" : "/"}
          </span>
        )}
        <span className={cn({ "opacity-0": !wickets })}>
          {wickets === "10" ? "" : wickets || 0}
        </span>
      </p>

      {/* Overs */}
      {isMatchAbandoned && !overs ? null : score && wickets ? (
        <span
          className={`text-xs block leading-[14px] ${
            isLive ? "text-white" : "text-dark-gray-100"
          }`}
        >
          {overs ? `(${overs})` : ""}
        </span>
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
  );
};

export default TeamScore;
