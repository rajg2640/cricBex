import Link from "next/link";
import TeamScore from "./TeamScore";

const MatchCard = ({ data }) => {
    const isLive = data?.live;

    return (
        <Link
            href={data?.link || "/"}
            className={`p-4 rounded-2xl shadow-sm transition duration-300 hover:shadow-md ${isLive
                ? "bg-[linear-gradient(106.92deg,#E10000_0%,#900C0C_100%)]"
                : "bg-white"
                }`}
        >
            {/* Venue + Live indicator */}
            <div className="flex items-center justify-between">
                <p
                    className={`capitalize text-xs leading-3.5 ${isLive ? "text-white" : "text-dark-gray-100"
                        }`}
                >
                    {data?.venue}
                </p>
                {isLive && (
                    <ul className="text-right text-white text-xs leading-3.5">
                        <li className="before:content-[''] before:w-1 before:h-1 before:rounded-2xl before:bg-white before:inline-block before:mr-1 before:align-middle">Live</li>
                    </ul>
                )}
            </div>

            {/* Teams Section */}
            <TeamScore
                isLive={isLive}
                firstTeam={{
                    name: data?.firstTeam,
                    flag: data?.firstTeamFlag,
                    score: data?.firstTeamScore,
                    wicket: data?.firstTeamWicket,
                    over: data?.firstTeamOver,
                }}
                secondTeam={{
                    name: data?.secondTeam,
                    flag: data?.secondaTeamFlag,
                    score: data?.secondTeamScore,
                    wicket: data?.secondTeamWicket,
                    over: data?.secondTeamOver,
                }}
            />

            {/* Divider & Result */}
            <span
                className={`block h-px my-3 ${isLive ? "bg-white/10" : "bg-black/10"
                    }`}
            ></span>
            <p
                className={`text-xs leading-3.5 ${isLive ? "text-white" : "text-dark-gray-50/50"
                    }`}
            >
                {data?.result}
            </p>
        </Link>
    );
};

export default MatchCard;
