import { MATCH_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TeamScore = ({ firstTeam, secondTeam, status, className }) => {
  return (
    <div className={cn("space-y-4 mt-4 text-dark-gray-50", className)}>
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
          <p className="font-bold leading-[19px] capitalize max-sm:text-sm">
            {firstTeam?.name}
          </p>
        </div>
        <Score
          status={status}
          score={firstTeam?.score}
          wickets={firstTeam?.wicket}
          overs={firstTeam?.over}
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
          <p className="font-bold leading-[19px] capitalize max-sm:text-sm">
            {secondTeam?.name}
          </p>
        </div>
        <Score
          status={status}
          score={secondTeam?.score}
          wickets={secondTeam?.wicket}
          overs={secondTeam?.over}
        />
      </div>
    </div>
  );
};

const Score = ({ score, wickets, overs, status }) => {
  const isMatchAbandoned = status === MATCH_STATUS.ABANDONED;
  const isMatchLive = status === MATCH_STATUS.LIVE;

  if (isMatchAbandoned && !score) {
    return null;
  }

  const yetToBat = isMatchLive && !score && !wickets && !overs;
  const isTeamAllOut = wickets === "10";

  return (
    <div className="text-right">
      {!yetToBat && (
        <p className="font-semibold leading-[19px] max-sm:text-sm">
          <span>{score}</span>
          {!isTeamAllOut && (
            <>
              <span>/</span>
              <span>{wickets || 0}</span>
            </>
          )}
        </p>
      )}

      {/* Overs */}
      {isMatchAbandoned && !overs ? null : score && wickets ? (
        <span className="text-xs block leading-3.5">
          {overs ? `(${overs})` : ""}
        </span>
      ) : null}

      {yetToBat && (
        <p className="capitalize leading-[19px] text-right">yet to bat</p>
      )}
    </div>
  );
};

export default TeamScore;
