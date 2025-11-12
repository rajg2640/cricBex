import Link from "next/link";
import TeamScore from "./TeamScore";
import { MATCH_STATUS } from "@/lib/constants";
import { getMatchScore } from "@/utils/score";

const MatchCard = ({ data }) => {
  const isLive = data?.status === MATCH_STATUS.LIVE;

  const firstTeamScore = getMatchScore(data.teams?.t1?.score);
  const secondTeamScore = getMatchScore(data.teams?.t2?.score);

  return (
    <div className="sm:mx-2.5 mx-2 my-2.5">
      <Link
        href={`/matches/${data?._id}`}
        className={`p-4 rounded-2xl block shadow-sm transition duration-300 hover:shadow-md w-full ${isLive
          ? "bg-[linear-gradient(106.92deg,#E10000_0%,#900C0C_100%)]"
          : "bg-white"
          }`}
      >
        {/* Venue + Live indicator */}
        <div className="flex items-center justify-between gap-2">
          <p
            className={`capitalize text-xs leading-3.5 ${isLive ? "text-white" : "text-dark-gray-100"
              }`}
          >
            {data?.name} • {data?.seriesName} • {data?.format}
          </p>
          {isLive && (
            <ul className="text-right text-white text-xs leading-3.5 flex-none">
              <li className="before:content-[''] before:w-1 before:h-1 before:rounded-2xl before:bg-white before:inline-block before:mr-1 before:align-middle">
                Live
              </li>
            </ul>
          )}
        </div>

        {/* Teams Section */}
        <TeamScore
          className={isLive ? "text-white" : "text-dark-gray-50"}
          status={data.status}
          firstTeam={{
            name: data.teams.t1.name,
            flag: data.teams.t1.logo,
            score: firstTeamScore.score,
            wicket: firstTeamScore.wickets,
            over: firstTeamScore.overs,
          }}
          secondTeam={{
            name: data.teams.t2.name,
            flag: data.teams.t2.logo,
            score: secondTeamScore.score,
            wicket: secondTeamScore.wickets,
            over: secondTeamScore.overs,
          }}
        />

        {/* Divider & Result */}
        <span
          className={`block h-px my-3 ${isLive ? "bg-white/10" : "bg-black/10"}`}
        ></span>
        <p
          className={`text-xs leading-3.5 ${isLive ? "text-white" : "text-dark-gray-50/50"
            }`}
        >
          {data?.result?.message || data?.toss}
        </p>
      </Link>
    </div>
  );
};

export default MatchCard;
