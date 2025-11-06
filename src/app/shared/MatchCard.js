import Image from "next/image";
import TeamScore from "./TeamScore";

const MatchCard = ({ data }) => {
    const isLive = data?.live;

    return (
        <a
            href={data?.link || "/"}
            className={`p-4 rounded-[16px] shadow-sm transition duration-300 hover:shadow-md ${isLive
                ? "bg-[linear-gradient(106.92deg,_#E10000_0%,_#900C0C_100%)]"
                : "bg-white"
                }`}
        >
            {/* Venue + Live indicator */}
            <div className="flex items-center justify-between">
                <p
                    className={`capitalize text-xs leading-[14px] ${isLive ? "text-white" : "text-dark-gray-100"
                        }`}
                >
                    {data?.venue}
                </p>
                {isLive && (
                    <ul className="list-disc text-right text-white text-xs leading-[14px]">
                        <li>Live</li>
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
                className={`block h-[1px] my-3 ${isLive ? "bg-white/10" : "bg-black/10"
                    }`}
            ></span>
            <p
                className={`text-xs leading-[14px] ${isLive ? "text-white" : "text-dark-gray-50/50"
                    }`}
            >
                {data?.result}
            </p>
        </a>
    );
};

export default MatchCard;
