import React from 'react'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'
import Container from '../shared/Container'
import India from "@/app/assets/image/png/india.png"
import Australia from "@/app/assets/image/png/australia.png"
import Image from 'next/image'

const page = () => {

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Squad" },
    ]

    const teams = [
        {
            name: "India Squad",
            flag: India,
            players: [
                { name: "Rohit Sharma", role: "Batsman", tag: "Captain", playing: true },
                { name: "KL Rahul", role: "Wicket Keeper", tag: "WK", playing: true },
                { name: "Virat Kohli", role: "Batsman", playing: true },
                { name: "Shubman Gill", role: "Batsman", playing: true },
                { name: "Suryakumar Yadav", role: "Batsman", playing: true },
                { name: "Hardik Pandya", role: "All-rounder", playing: true },
                { name: "Ravindra Jadeja", role: "All-rounder", playing: true },
                { name: "Jasprit Bumrah", role: "Bowler", playing: true },
                { name: "Mohammed Shami", role: "Bowler", playing: true },
                { name: "Kuldeep Yadav", role: "Bowler", playing: true },
                { name: "Mohammed Siraj", role: "Bowler", playing: true },
                // Bench (4)
                { name: "R. Ashwin", role: "Bowler" },
                { name: "Ishan Kishan", role: "Wicket Keeper", tag: "WK" },
                { name: "Axar Patel", role: "All-rounder" },
                { name: "Shardul Thakur", role: "All-rounder" },
            ],
        },
        {
            name: "Australia Squad",
            flag: Australia,
            players: [
                { name: "Pat Cummins", role: "Bowler", tag: "Captain", playing: true },
                { name: "David Warner", role: "Batsman", playing: true },
                { name: "Steve Smith", role: "Batsman", playing: true },
                { name: "Travis Head", role: "Batsman", playing: true },
                { name: "Glenn Maxwell", role: "All-rounder", playing: true },
                { name: "Mitchell Marsh", role: "All-rounder", tag: "WK", playing: true },
                { name: "Josh Inglis", role: "Wicket Keeper", playing: true },
                { name: "Mitchell Starc", role: "Bowler", playing: true },
                { name: "Josh Hazlewood", role: "Bowler", playing: true },
                { name: "Adam Zampa", role: "Bowler", playing: true },
                { name: "Marcus Stoinis", role: "All-rounder", playing: true },
                // Bench (4)
                { name: "Alex Carey", role: "Wicket Keeper" },
                { name: "Cameron Green", role: "All-rounder" },
                { name: "Sean Abbott", role: "Bowler" },
                { name: "Ashton Agar", role: "Bowler" },
            ],
        },
    ];

    const getInitials = (name) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("");

    const getComposition = (players) => {
        const composition = {
            Batsmen: 0,
            "All-rounders": 0,
            Bowlers: 0,
            "Wicket Keepers": 0,
        };
        players.forEach((p) => {
            if (!p.playing) return; // only count playing XI
            if (p.role.toLowerCase().includes("batsman")) composition.Batsmen++;
            else if (p.role.toLowerCase().includes("all")) composition["All-rounders"]++;
            else if (p.role.toLowerCase().includes("bowl")) composition.Bowlers++;
            else if (p.role.toLowerCase().includes("wicket")) composition["Wicket Keepers"]++;
        });
        return composition;
    };

    // Combine both teams’ compositions for a global comparison
    const indiaComp = getComposition(teams[0].players);
    const ausComp = getComposition(teams[1].players);

    return (
        <div>
            <Container>
                <div className='py-4'>
                    <div className='flex items-center'>
                        <div>
                            <CustomBreadcrumb items={breadcrumbItems} />
                            <h2 className='text-xl leading-normal sm:text-2xl md:text-[32px] md:leading-[38px] font-medium text-dark-gray mt-1.5'>Asia Cup 2025</h2>
                        </div>
                    </div>
                </div>
                <div className='sm:border sm:border-black/10 sm:p-6 rounded-2xl mt-4 sm:mt-0'>
                    <div className='space-y-5 md:space-y-8'>
                        {teams.map((team, teamIndex) => {
                            // calculate composition per team
                            const playingPlayers = team.players.filter((p) => p.playing);
                            const composition = {
                                Batsmen: 0,
                                "All-rounders": 0,
                                Bowlers: 0,
                                "Wicket Keepers": 0,
                            };
                            playingPlayers.forEach((p) => {
                                if (p.role.toLowerCase().includes("batsman")) composition.Batsmen++;
                                else if (p.role.toLowerCase().includes("all")) composition["All-rounders"]++;
                                else if (p.role.toLowerCase().includes("bowl")) composition.Bowlers++;
                                else if (p.role.toLowerCase().includes("wicket")) composition["Wicket Keepers"]++;
                            });

                            const bgClasses = [
                                "bg-[linear-gradient(135deg,var(--warning-300)_0%,var(--warning-400)_100%)] border-warning-200", // India
                                "bg-[linear-gradient(135deg,var(--success-300)_0%,var(--success-400)_100%)] border-success-500", // Australia
                            ];

                            return (
                                <div key={teamIndex}>
                                    {/* Team Header */}
                                    <div className="flex items-center gap-2">
                                        <Image src={team.flag} alt={`${team.name} flag`} width={24} height={24} />
                                        <p className="text-black-100 text-xl font-bold leading-7">{team.name}</p>
                                    </div>

                                    {/* Squad Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 md:mt-6 gap-2 sm:gap-4">
                                        {team.players.map((player, index) => (
                                            <div
                                                key={index}
                                                className={`py-2 px-4 md:p-4 rounded-[10px] ${player.playing ? "bg-light-gray-500" : "border border-light-gray-400"}`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className={`h-10 w-10 flex items-center justify-center rounded-full font-bold text-white ${player.playing
                                                                ? "bg-orange"
                                                                : "bg-[linear-gradient(135deg,var(--light-gray-900)_0%,var(--dark-gray-900)_100%)]"
                                                                }`}
                                                        >
                                                            {getInitials(player.name)}
                                                        </div>
                                                        <div>
                                                            <p className="leading-normal mb-0.5 text-black-100">{player.name}</p>
                                                            <p className="text-sm leading-5 text-black-300">{player.role}</p>
                                                        </div>
                                                    </div>
                                                    {player.tag && (
                                                        <p
                                                            className={`text-xs leading-4 border rounded-md py-0.5 px-2 ${player?.tag === "Captain"
                                                                ? "bg-warning-50 text-warning border-warning-100"
                                                                : player?.tag === "WK" && player?.playing
                                                                    ? "text-info-100 bg-info-200 border-info-300"
                                                                    : "text-black-300 border-black/10"
                                                                }`}
                                                        >
                                                            {player.tag}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 👇 Team Composition (only for mobile view) */}
                                    <div className={`mt-4 md:hidden rounded-[10px] px-4 py-3.5 border ${bgClasses[teamIndex]}`}>
                                        <p className="font-semibold mb-2 text-black-100">{team.name} Composition</p>
                                        <div className='space-y-2'>
                                            {Object.entries(composition).map(([key, value]) => (
                                                <div key={key} className='flex items-center justify-between text-sm leading-5'>
                                                    <p className="text-black-300">{key}</p>
                                                    <p className="text-black-400">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {
                                        teamIndex === 0 && (
                                            <div className="rounded-2xl col-span-2 bg-[#D9D9D9] flex items-center justify-center mt-5 h-[180px] w-full  md:hidden">AD</div>
                                        )
                                    }
                                </div>
                            );
                        })}


                        {/* --- Combined Squad Composition Section --- */}
                        <div className="mt-8 hidden md:block">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {teams.map((team, index) => {
                                    // Filter only playing XI
                                    const playingPlayers = team.players.filter((p) => p.playing);
                                    // Calculate composition for this team
                                    const composition = {
                                        Batsmen: 0,
                                        "All-rounders": 0,
                                        Bowlers: 0,
                                        "Wicket Keepers": 0,
                                    };
                                    playingPlayers.forEach((p) => {
                                        if (p.role.toLowerCase().includes("batsman")) composition.Batsmen++;
                                        else if (p.role.toLowerCase().includes("all")) composition["All-rounders"]++;
                                        else if (p.role.toLowerCase().includes("bowl")) composition.Bowlers++;
                                        else if (p.role.toLowerCase().includes("wicket")) composition["Wicket Keepers"]++;
                                    });
                                    const bgClasses = [
                                        "bg-[linear-gradient(135deg,var(--warning-300)_0%,var(--warning-400)_100%)] border-warning-200", // India
                                        "bg-[linear-gradient(135deg,var(--success-300)_0%,var(--success-400)_100%)] border-success-500", // Australia
                                    ];

                                    return (
                                        <div key={index} className={`rounded-[10px] p-6 border ${bgClasses[index]}`}>
                                            <p className="font-semibold mb-[18px] text-black-100">{team.name} Composition</p>
                                            <div className='space-y-2'>
                                                {Object.entries(composition).map(([key, value]) => (
                                                    <div key={key} className='flex items-center justify-between text-sm leading-5'>
                                                        <p className="text-black-300">{key}</p>
                                                        <p className="text-black-400">{value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page