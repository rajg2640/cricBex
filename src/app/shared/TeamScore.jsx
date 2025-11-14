import { MATCH_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getMatchScore } from "@/utils/score";

const DEFAULT_INNINGS_ORDER = ["t1_1", "t2_2"];

const MatchScore = ({
  firstTeam,
  secondTeam,
  status,
  className,
  inningsOrder,
}) => {
  const [firstInningOrder, secondInningOrder] =
    inningsOrder || DEFAULT_INNINGS_ORDER;

  // Returns the team that should play in the inning
  const getTeamToPlayInning = (inningOrder) => {
    return inningOrder.startsWith("t1") ? firstTeam : secondTeam;
  };

  const teamToPlayFirst = getTeamToPlayInning(firstInningOrder);
  const teamToPlaySecond = getTeamToPlayInning(secondInningOrder);

  return (
    <div className={cn("space-y-4 mt-4 text-dark-gray-50", className)}>
      <TeamScore team={teamToPlayFirst} status={status} />
      <TeamScore team={teamToPlaySecond} status={status} />
    </div>
  );
};

const TeamScore = ({ team, status }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {team?.logo && (
          <img
            className="max-w-6 max-h-6"
            alt={`${team?.name} Flag`}
            src={team?.logo}
          />
        )}
        <p className="font-bold leading-[19px] capitalize max-sm:text-sm">
          {team?.name}
        </p>
      </div>
      <Score status={status} rawScore={team?.score} />
    </div>
  );
};

const Score = ({ rawScore, status }) => {
  const isMatchAbandoned = status === MATCH_STATUS.ABANDONED;
  const isMatchLive = status === MATCH_STATUS.LIVE;

  const { score, wickets, overs } = getMatchScore(rawScore);

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

export default MatchScore;
