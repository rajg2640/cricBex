import TeamScore from "@/app/shared/TeamScore";
import { Button } from "./ui/button";

import { MATCH_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { recentMatchesQueryOptions } from "@/queries/options";
import { getMatchScore } from "@/utils/score";
import { useQuery } from "@tanstack/react-query";
import { format, isToday, isYesterday } from "date-fns";
import { Spinner } from "./ui/spinner";

export const RecentResults = () => {
  const { data, isLoading } = useQuery({
    ...recentMatchesQueryOptions,
    select: (data) => {
      return data.data
        ?.filter(
          (match) =>
            match.status === MATCH_STATUS.COMPLETED ||
            match.status === MATCH_STATUS.ABANDONED ||
            match.status === MATCH_STATUS.NO_RESULT
        )
        ?.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        ?.slice(0, 3);
    },
  });

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between sm:px-6 px-4 sm:pt-6 pt-4 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">
          Recent Results
        </h5>
        <Button variant="link" className="text-right">
          View All
        </Button>
      </div>
      {isLoading ? (
        <div className="w-full h-100 rounded-none flex items-center justify-center">
          <Spinner className="size-6" />
        </div>
      ) : data?.length > 0 ? (
        <div className="divide-y divide-black/10">
          {data?.map((match) => (
            <Result key={match?._id} match={match} />
          ))}
        </div>
      ) : (
        <p className="text-dark-gray-50/50 text-center py-6">
          No results found
        </p>
      )}
    </div>
  );
};

const Result = ({ match }) => {
  const firstTeamScore = getMatchScore(match.teams.t1.score);
  const secondTeamScore = getMatchScore(match.teams.t2.score);

  return (
    <div
      key={match?._id}
      className="py-4 px-6 border-b border-black/10 last-of-type:border-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-dark-gray-100 text-xs leading-3.5">
          {formatDate(match.startDate)}
        </p>
        <div className="text-[10px] leading-3 bg-light-gray-50 border-[0.5px] border-dark-gray-400 text-dark-gray-100 p-1 rounded-[2px]">
          {match.format}
        </div>
      </div>

      {/* Your exact TeamScore usage */}
      <TeamScore
        status={match.status}
        firstTeam={{
          name: match.teams.t1.name,
          flag: match.teams.t1.logo,
          score: firstTeamScore.score,
          wicket: firstTeamScore.wickets,
          over: firstTeamScore.overs,
        }}
        secondTeam={{
          name: match.teams.t2.name,
          flag: match.teams.t2.logo,
          score: secondTeamScore.score,
          wicket: secondTeamScore.wickets,
          over: secondTeamScore.overs,
        }}
      />
      <div className="text-xs leading-3.5 mt-3">
        <p
          className={cn("text-success font-semibold", {
            "text-dark-gray-50":
              match?.status === MATCH_STATUS.ABANDONED ||
              match?.status === MATCH_STATUS.NO_RESULT,
          })}
        >
          {match?.result?.message}
        </p>
        <p className="text-dark-gray-50/50 mt-2">{match?.seriesName}</p>
      </div>
    </div>
  );
};

function formatDate(date) {
  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  return format(date, "MMM d");
}
