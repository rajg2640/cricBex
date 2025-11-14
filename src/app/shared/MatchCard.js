import Link from "next/link";
import MatchScore from "./TeamScore";
import { MATCH_STATUS } from "@/lib/constants";

const MatchCard = ({ data }) => {
  const isLive = data?.status === MATCH_STATUS.LIVE;

  return (
    <div className="h-full">
      <Link
        href={`/matches/${data?._id}`}
        className={`p-4 rounded-2xl shadow-sm transition duration-300 flex flex-col hover:shadow-md w-full h-full ${
          isLive
            ? "bg-[linear-gradient(106.92deg,#E10000_0%,#900C0C_100%)]"
            : "bg-white"
        }`}
      >
        {/* Venue + Live indicator */}
        <div className="flex justify-between gap-2">
          <p
            className={`capitalize text-xs leading-3.5 ${
              isLive ? "text-white" : "text-dark-gray-100"
            }`}
          >
            {data?.name} • {data?.seriesName} • {data?.format}
          </p>
          {isLive && (
            <ul className="text-right text-white text-xs leading-3.5 flex-none">
              <li className="overflow-hidden font-bold">
                Live
                <div className="line mt-0! bg-white! "></div>
              </li>
            </ul>
          )}
        </div>

        {/* Teams Section */}
        <MatchScore
          className={isLive ? "text-white" : "text-dark-gray-50"}
          status={data.status}
          firstTeam={data.teams.t1}
          secondTeam={data.teams.t2}
          inningsOrder={data.inningsOrder}
        />

        {/* Divider & Result */}
        <div className="mt-auto">
          <span
            className={`block h-px my-3 ${
              isLive ? "bg-white/10" : "bg-black/10"
            }`}
          ></span>
          <p
            className={`text-xs leading-3.5 ${
              isLive ? "text-white" : "text-dark-gray-50/50"
            }`}
          >
            {data?.result?.message || data?.toss}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MatchCard;
