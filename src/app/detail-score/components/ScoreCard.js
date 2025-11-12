import CustomSelect from '@/app/shared/CustomSelect'
import NewsCard from '@/app/shared/NewsCard'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React, { useState } from 'react'
import News1 from '@/app/assets/image/png/news-1.png';
import News2 from '@/app/assets/image/png/news-2.png';

const ScoreCard = () => {
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

    const scorecard = [
        {
            name: "Sam Konstas",
            status: "c Adarsh Singh b Yudhajit Guha",
            runs: 89,
            balls: 112,
            fours: 11,
            sixes: 1,
            strikeRate: 79.46,
            notOut: false,
        },
        {
            name: "Riley Rousseau",
            status: "",
            runs: 52,
            balls: 45,
            fours: 6,
            sixes: 1,
            strikeRate: 115.55,
            notOut: true,
        },
        {
            name: "Matthew Gilkes",
            status: "b Yash Dayal",
            runs: 18,
            balls: 25,
            fours: 2,
            sixes: 0,
            strikeRate: 72.00,
            notOut: false,
        },
        {
            name: "David Warner (c)",
            status: "c Bharat b Siraj",
            runs: 34,
            balls: 28,
            fours: 5,
            sixes: 0,
            strikeRate: 121.42,
            notOut: false,
        },
        {
            name: "Mitchell Marsh",
            status: "lbw b Kuldeep",
            runs: 12,
            balls: 20,
            fours: 1,
            sixes: 0,
            strikeRate: 60.00,
            notOut: false,
        },
        {
            name: "Cameron Green",
            status: "c Samson b Chahal",
            runs: 46,
            balls: 38,
            fours: 4,
            sixes: 2,
            strikeRate: 121.05,
            notOut: false,
        },
        {
            name: "Pat Cummins",
            status: "",
            runs: 9,
            balls: 12,
            fours: 0,
            sixes: 0,
            strikeRate: 75.00,
            notOut: true,
        },
        {
            name: "Adam Zampa",
            status: "b Bumrah",
            runs: 2,
            balls: 5,
            fours: 0,
            sixes: 0,
            strikeRate: 40.00,
            notOut: false,
        },
    ];

    const bowlersSummary = [
        {
            name: "Jasprit Bumrah",
            overs: 8,
            maidens: 3,
            runs: 24,
            wickets: 1,
            economy: 6.0,
            wides: 6,
            noBalls: 6,
        },
        {
            name: "Mohammed Siraj",
            overs: 2,
            maidens: 0,
            runs: 8,
            wickets: 0,
            economy: 4.0,
            wides: 4,
            noBalls: 4,
        },
        {
            name: "Nitish Kumar Reddy",
            overs: 2,
            maidens: 0,
            runs: 8,
            wickets: 1,
            economy: 4.0,
            wides: 4,
            noBalls: 4,
        },
        {
            name: "Ravindra Jadeja",
            overs: 2,
            maidens: 0,
            runs: 8,
            wickets: 0,
            economy: 4.0,
            wides: 4,
            noBalls: 4,
        },
        {
            name: "Kuldeep Yadav",
            overs: 2,
            maidens: 0,
            runs: 8,
            wickets: 1,
            economy: 4.0,
            wides: 4,
            noBalls: 4,
        },
    ];

    const newsData = [
        {
            image: News1,
            title: "August 2025 - News Digest",
            description: "News bytes that you may have missed otherwise",
        },
        {
            image: News2, // Use different image for different cards
            title: "Where faith met fearlessness: The Abhishek Sharma story",
            description: "Behind the sixes and strike-rates lies a boy from Amritsar, shaped by devotion and a belief that every ball is meant to be hit",
        },
        {
            image: News1,
            title: "August 2025 - News Digest",
            description: "News bytes that you may have missed otherwise",
        },
        {
            image: News2, // Use different image for different cards
            title: "Where faith met fearlessness: The Abhishek Sharma story",
            description: "Behind the sixes and strike-rates lies a boy from Amritsar, shaped by devotion and a belief that every ball is meant to be hit",
        },
        {
            image: News1,
            title: "August 2025 - News Digest",
            description: "News bytes that you may have missed otherwise",
        },
        {
            image: News2, // Use different image for different cards
            title: "Where faith met fearlessness: The Abhishek Sharma story",
            description: "Behind the sixes and strike-rates lies a boy from Amritsar, shaped by devotion and a belief that every ball is meant to be hit",
        },
        {
            image: News1,
            title: "August 2025 - News Digest",
            description: "News bytes that you may have missed otherwise",
        },
        {
            image: News2, // Use different image for different cards
            title: "Where faith met fearlessness: The Abhishek Sharma story",
            description: "Behind the sixes and strike-rates lies a boy from Amritsar, shaped by devotion and a belief that every ball is meant to be hit",
        },
    ];

    const playingXI = [
        "Yashasvi Jaiswal",
        "KL Rahul",
        "Sai Sudharsan",
        "Shubman Gill (c)",
        "Dhruv Jurel †",
        "Ravindra Jadeja",
        "Washington Sundar",
        "Nitish Kumar Reddy",
        "Kuldeep Yadav",
        "Jasprit Bumrah",
        "Mohammed Siraj",
    ];

    const fallofWicket = [
        {
            label: "1-24 (Vaibhav Suryavanshi, 8.2 ov)"
        },
        {
            label: "2-67 (C Andre Siddarth, 18.4 ov)"
        },
        {
            label: "3-125 (Mohamed Amaan, 35.1 ov)"
        },
        {
            label: "4-150 (Hardik Raj, 42.3 ov)"
        },
    ]

    const wtcTeams = [
        {
            name: "IND",
            played: 3,
            won: 3,
            lost: 0,
            drawn: 0,
            points: 36,
            pct: "100.00",
            link: "/",
        },
        {
            name: "AUS",
            played: 3,
            won: 3,
            lost: 0,
            drawn: 0,
            points: 36,
            pct: "100.00",
            link: "/",
        },
        {
            name: "ENG",
            played: "-",
            won: "-",
            lost: "-",
            drawn: "-",
            points: "-",
            pct: "-",
            link: "/",
        },
        {
            name: "SA",
            played: 3,
            won: 2,
            lost: 1,
            drawn: 0,
            points: 24,
            pct: "66.67",
            link: "/",
        },
        {
            name: "NZ",
            played: 3,
            won: 1,
            lost: 2,
            drawn: 0,
            points: 12,
            pct: "33.33",
            link: "/",
        },
    ];

    return (
        <div className='pb-[120px]'>
            <div className='flex flex-wrap -mx-3'>
                <div className='xl:w-9/12 lg:w-8/12 w-full space-y-6 lg:px-3'>
                    <div className='lg:shadow-sm bg-white lg:rounded-2xl overflow-auto'>
                        <div className='flex items-center justify-between sm:p-6 p-4 border-b border-black/10'>
                            <h6 className='text-lg leading-7 font-bold text-black-100'>Scorecard</h6>
                            <CustomSelect className='w-full max-w-[175px]' value={format} onChange={setInning} options={innings} />
                        </div>
                        <Table className="[&_td]:py-3! [&_td]:px-4! [&_th]:py-3! [&_th]:px-4! text-black-400 w-full text-base leading-normal [&_tr]:border-black/10">
                            <TableHeader>
                                <TableRow className="[&_th]:text-center [&_th]:text-black-200  [&_th]:text-sm  [&_th]:leading-5  [&_th]:font-normal bg-light-gray-500 border-black/10">
                                    <TableHead className="w-6/12 text-left!">Batsman</TableHead>
                                    <TableHead>R</TableHead>
                                    <TableHead>B</TableHead>
                                    <TableHead>4s</TableHead>
                                    <TableHead>6s</TableHead>
                                    <TableHead>SR</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {scorecard.map((player, i) => (
                                    <TableRow key={i} className={`text-center max-sm:text-xs ${player?.notOut ? "bg-success-300" : ""}`}>
                                        <TableCell className="text-left">
                                            <p className={`leading-normal ${player?.notOut ? "text-[#008236]" : "text-black-100"}`}>
                                                {player.name}
                                                {player.notOut && <span>*</span>}
                                            </p>
                                            {!player.notOut && player.status && (
                                                <p className="text-black-300 text-xs leading-3.5 mt-1">{player.status}</p>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-bold">{player.runs}</TableCell>
                                        <TableCell>{player.balls}</TableCell>
                                        <TableCell>{player.fours}</TableCell>
                                        <TableCell>{player.sixes}</TableCell>
                                        <TableCell>{player.strikeRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className='sm:p-6 p-4 grid xxs:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 border-t border-black/10'>
                            <div className='flex items-center text-sm leading-5 gap-1'>
                                <p className='text-black-300'>Total:</p>
                                <p className='font-bold text-black-400'>287/8d</p>
                            </div>
                            <div className='flex items-center text-sm leading-5 gap-1'>
                                <p className='text-black-300'>Overs:</p>
                                <p className='font-bold text-black-400'>78.4</p>
                            </div>
                            <div className='flex items-center text-sm leading-5 gap-1'>
                                <p className='text-black-300'>Run Rate:</p>
                                <p className='font-bold text-black-400'>3.65</p>
                            </div>
                            <div className='flex items-center text-sm leading-5 gap-1'>
                                <p className='text-black-300'>Extras:</p>
                                <p className='font-bold text-black-400'>15</p>
                            </div>
                        </div>
                        <div className='sm:p-6 p-4 max-sm:text-xs flex flex-wrap gap-2 sm:leading-[19px] border-t border-black/10'>
                            <p className='font-bold text-dark-gray-800'>Yet to bat: </p>
                            <span className='text-dark-gray-50'>Jomel Warrican, </span>
                            <span className='text-dark-gray-50'>Johann Layne, </span>
                            <span className='text-dark-gray-50'>Jayden Seales </span>
                        </div>
                        <div className='sm:p-6 p-4 max-sm:text-xs flex gap-2 sm:leading-[19px] border-t border-black/10 flex-wrap'>
                            <p className='font-bold text-dark-gray-800'>West Indies Playing XI: </p>
                            {
                                playingXI.map((player, i) => {
                                    return (
                                        <span className='text-dark-gray-50' key={i}>{player}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='shadow-sm bg-white rounded-2xl overflow-auto max-lg:mx-3'>
                        <Table className="[&_td]:py-3! [&_td]:px-4! [&_th]:py-3! [&_th]:px-4! [&_tr]:border-black/10 text-black-400 w-full">
                            <TableHeader>
                                <TableRow className="bg-light-gray-500 [&_th]:text-end [&_th]:font-normal [&_th]:leading-4 [&_th]:text-dark-gray-700 border-black/10 text-right">
                                    <TableHead className="text-left!">Bowlers</TableHead>
                                    <TableHead>O</TableHead>
                                    <TableHead>M</TableHead>
                                    <TableHead>R</TableHead>
                                    <TableHead>W</TableHead>
                                    <TableHead>Econ.</TableHead>
                                    <TableHead>WD</TableHead>
                                    <TableHead>NB</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {bowlersSummary.map((bowler, i) => (
                                    <TableRow key={i} className="text-right">
                                        <TableCell className="text-left text-black-600">{bowler.name}</TableCell>
                                        <TableCell>{bowler.overs}</TableCell>
                                        <TableCell>{bowler.maidens}</TableCell>
                                        <TableCell>{bowler.runs}</TableCell>
                                        <TableCell className="font-bold">{bowler.wickets}</TableCell>
                                        <TableCell>{bowler.economy.toFixed(2)}</TableCell>
                                        <TableCell>{bowler.wides}</TableCell>
                                        <TableCell>{bowler.noBalls}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className='xl:w-3/12 lg:w-4/12 w-full px-3'>
                    <div className='sticky top-20 space-y-6 max-lg:mt-5'>
                        <div className='shadow-sm bg-white rounded-[10px]'>
                            <h5 className='font-bold leading-normal p-6 border-b border-black/10'>Fall of Wickets</h5>
                            <ul className='space-y-4 p-6'>
                                {
                                    fallofWicket.map((data, i) => {
                                        return (
                                            <li key={i} className='text-sm leading-5'>{data?.label}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[475px] w-full">AD</div>
                        <div className='shadow-sm bg-white rounded-[12px] overflow-auto border border-light-gray-600'>
                            <h5 className='font-bold leading-5 text-[15px] p-4 border-b border-black/10'>ICC World Test Championship</h5>
                            <Table className="text-dark-gray-100 text-[13px] leading-4">
                                <TableHeader className="bg-light-gray-500 [&_th]:text-dark-gray-700 [&_th]:py-[5px] [&_th]:px-4! [&_th]:h-auto">
                                    <TableRow className="border-0!">
                                        <TableHead className="w-3/6">Team</TableHead>
                                        <TableHead colSpan="6" className="text-end">PCT</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="[&_td]:py-[9px] [&_td]:px-2 text-end">
                                    {wtcTeams.map((team, i) => (
                                        <TableRow key={i} className="border-light-gray-600">
                                            <TableCell className="text-dark-gray-50 font-bold px-4! text-start">
                                                <Link
                                                    href={team.link}
                                                    className="border-b inline-block leading-[0.9] border-[#CBCCCE] uppercase"
                                                >
                                                    {team.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell className="border-l border-light-gray-600">{team.played}</TableCell>
                                            <TableCell>{team.won}</TableCell>
                                            <TableCell>{team.lost}</TableCell>
                                            <TableCell>{team.drawn}</TableCell>
                                            <TableCell>{team.points}</TableCell>
                                            <TableCell className="font-bold">{team.pct}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[375px] w-full mt-6">AD</div>
            <div className='mt-6'>
                <h6 className="text-primary  uppercase font-bold text-base leading-normal mb-4">Latest News</h6>
                <div className="space-y-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6">
                    {newsData.map((news, i) => (
                        <NewsCard
                            key={i}
                            image={news.image}
                            title={news.title}
                            description={news.description}
                            link={news.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScoreCard