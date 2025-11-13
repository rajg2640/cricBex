import CustomSelect from '@/app/shared/CustomSelect'
import { Star, User } from '@/app/shared/Icon';
import React, { useState } from 'react'

const PlayingXI = () => {

    const [format, setInning] = useState("ind");

    const innings = [
        {
            value: "ind",
            label: "IND Innings"
        },
        {
            value: "pak",
            label: "PAK Innings"
        },
    ]

    const players = [
        {
            name: "Rohit Sharma",
            role: "Batsman (Captain)",
            captain: true,
            position: "Opener",
            age: 37,
            matches: 148,
            average: 31.2,
            strikeRate: 140.8,
            style: "Right-hand",
            recentForm: [45, 32, 67, 24, 89],
            rankings: { bat: 8 },
            description: "Aggressive opener, excellent puller",
        },
        {
            name: "Shubman Gill",
            role: "Batsman",
            position: "Opener",
            age: 25,
            matches: 72,
            average: 47.5,
            strikeRate: 138.6,
            style: "Right-hand",
            recentForm: [10, 15, 30, 67, 85],
            rankings: { bat: 12 },
            description: "Classy stroke player, strong off the front foot",
        },
        {
            name: "Virat Kohli",
            role: "Batsman",
            position: "Top Order",
            age: 36,
            matches: 120,
            average: 55.2,
            strikeRate: 135.1,
            style: "Right-hand",
            recentForm: [89, 56, 12, 72, 101],
            rankings: { bat: 3 },
            description: "Modern-day great, incredible consistency",
        },
        {
            name: "Hardik Pandya",
            role: "All-Rounder (Vice Captain)",
            position: "Middle Order",
            age: 31,
            matches: 85,
            average: 34.5,
            strikeRate: 145.0,
            style: "Right-hand",
            recentForm: [2, 45, 3, 1, 28],
            rankings: { bat: 22, bowl: 30, ar: 5 },
            description: "Explosive all-rounder, key finisher",
        },
        {
            name: "Ravindra Jadeja",
            role: "All-Rounder",
            position: "Middle Order",
            age: 34,
            matches: 120,
            average: 29.8,
            strikeRate: 125.6,
            style: "Left-hand",
            recentForm: [3, 2, 1, 4, 2],
            rankings: { bat: 40, bowl: 7, ar: 3 },
            description: "Reliable spinner and lower-order hitter",
        },
        {
            name: "KL Rahul",
            role: "Wicket-Keeper Batsman",
            position: "Middle Order",
            age: 33,
            matches: 105,
            average: 41.8,
            strikeRate: 137.4,
            style: "Right-hand",
            recentForm: [18, 65, 21, 72, 5],
            rankings: { bat: 14 },
            description: "Dependable keeper and anchor batsman",
        },
        {
            name: "Axar Patel",
            role: "All-Rounder",
            position: "Lower Order",
            age: 32,
            matches: 75,
            average: 25.4,
            strikeRate: 120.3,
            style: "Left-hand",
            recentForm: [1, 2, 1, 0, 3],
            rankings: { bat: 50, bowl: 12, ar: 7 },
            description: "Economical bowler and handy finisher",
        },
        {
            name: "Kuldeep Yadav",
            role: "Bowler",
            position: "Spinner",
            age: 30,
            matches: 90,
            average: "20",
            strikeRate: "18.50",
            style: "Left-arm wrist spin",
            recentForm: [2, 3, 1, 4, 1],
            rankings: { bowl: 8 },
            description: "Mystery spinner, match-winner on his day",
        },
        {
            name: "Jasprit Bumrah",
            role: "Bowler",
            position: "Fast Bowler",
            age: 31,
            matches: 100,
            average: 23.10,
            strikeRate: 120.23,
            style: "Right-arm fast",
            recentForm: [3, 2, 4, 1, 2],
            rankings: { bowl: 2 },
            description: "Spearhead of Indian pace attack",
        },
        {
            name: "Mohammed Siraj",
            role: "Bowler",
            position: "Fast Bowler",
            age: 29,
            matches: 76,
            average: 12.45,
            strikeRate: 114.45,
            style: "Right-arm fast",
            recentForm: [1, 0, 3, 2, 1],
            rankings: { bowl: 10 },
            description: "Aggressive pacer with swing and bounce",
        },
        {
            name: "Arshdeep Singh",
            role: "Bowler",
            position: "Fast Bowler",
            age: 26,
            matches: 48,
            average: 17.59,
            strikeRate: 130.87,
            style: "Left-arm fast-medium",
            recentForm: [2, 1, 0, 3, 1],
            rankings: { bowl: 15 },
            description: "Young gun, lethal at death overs",
        },
    ];

    return (
        <div className='lg:pb-[120px] sm:pb-20 pb-10 space-y-8'>
            <div className='flex items-center justify-between mb-6'>
                <h6 className='text-lg leading-7 font-bold text-black-100'>Team</h6>
                <CustomSelect className='w-full max-w-[175px] py-1.5 px-2 h-auto' value={format} onChange={setInning} options={innings} />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {players.map((player, i) => (
                    <React.Fragment key={i}>
                        {i === 4 && (
                            <div className="rounded-2xl md:col-span-2 bg-[#D9D9D9] flex items-center justify-center h-[340px] w-full">AD</div>
                        )}
                        <div
                            key={i}
                            className="border border-black/10 shadow-sm p-6 rounded-[10px] space-y-4"
                        >
                            {/* Header Section */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-12 w-12 rounded-full bg-light-gray-400 flex items-center justify-center">
                                        <User />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-0.5">
                                            <p className="leading-normal font-bold text-black-100">
                                                {player.name}
                                            </p>
                                            {
                                                player?.captain && (
                                                    <Star className="-mt-0.5" />
                                                )
                                            }
                                        </div>
                                        <p className="text-sm leading-5 text-black-300">{player.role}</p>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <p className="text-sm leading-5 text-black-300">
                                        {player.position}
                                    </p>
                                    <p className="text-xs leading-4 text-dark-gray-900">
                                        Age: {player.age}
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            {player.average !== "-" && (
                                <div className="grid grid-cols-2 gap-4 text-sm leading-5">
                                    <div className="flex items-center gap-1">
                                        <p className="text-black-300">Matches:</p>
                                        <p className="text-black-400">{player.matches}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-black-300">Average:</p>
                                        <p className="text-black-400">{player.average}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-black-300">Strike Rate:</p>
                                        <p className="text-black-400">{player.strikeRate}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-black-300">Style:</p>
                                        <p className="text-black-400">{player.style}</p>
                                    </div>
                                </div>
                            )}

                            {/* Recent Form */}
                            <div>
                                <p className="text-sm leading-5 text-black-300">
                                    Recent Form (Last 5)
                                </p>
                                <div className="flex items-center flex-wrap gap-1 mt-2">
                                    {player.recentForm.map((val, j) => {
                                        let boxClass =
                                            val > 50
                                                ? "bg-success-400 text-success-200"
                                                : val > 25
                                                    ? "bg-info-200 text-info-100"
                                                    : "bg-light-gray-150 text-black-300";
                                        return (
                                            <p
                                                key={j}
                                                className={`h-8 w-8 rounded-sm text-xs leading-4 flex items-center justify-center ${boxClass}`}
                                            >
                                                {val}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>

                            <p className="text-xs leading-4 text-black-300 italic">
                                {player.description}
                            </p>

                            {/* Rankings */}
                            <div className="pt-3 border-t border-black/10">
                                <p className="text-xs leading-4 text-black-300">ICC Rankings</p>
                                <div className="mt-1 flex items-center gap-3">
                                    {player.rankings.bat && (
                                        <p className="py-1 px-1.5 rounded-sm bg-info-200 text-info-100 inline-block text-xs leading-4">
                                            Bat: #{player.rankings.bat}
                                        </p>
                                    )}
                                    {player.rankings.bowl && (
                                        <p className="py-1 px-1.5 rounded-sm bg-danger-50 text-danger inline-block text-xs leading-4">
                                            Bowl: #{player.rankings.bowl}
                                        </p>
                                    )}
                                    {player.rankings.ar && (
                                        <p className="py-1 px-1.5 rounded-sm bg-purple-50 text-purple inline-block text-xs leading-4">
                                            AR: #{player.rankings.ar}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default PlayingXI