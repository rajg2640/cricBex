import CustomSelect from '@/app/shared/CustomSelect';
import { BarChartIcon, Boundary } from '@/app/shared/Icon'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import React, { useState } from 'react'
import ScoreProgressionChart from './ScoreProgressionChart';
import RunRateChart from './RunRateChart';
import BallTypeAnalysis from './BallTypeAnalysis';
import BowlerPerformanceRadar from './BowlerPerformanceRadar';
import EconomyRateChart from './EconomyRateChart';

const Stats = () => {

    const [format, setInning] = useState("ind");

    const scoringData = [
        {
            title: "Scoring Rate",
            icon: <BarChartIcon />,
            innings: [
                { team: "AUS-U19:", rate: "3.65 RPO" },
                { team: "IND-U19:", rate: "4.22 RPO" },
            ],
        },
        {
            title: "Boundaries",
            icon: <Boundary />,
            innings: [
                { team: "AUS-U19:", rate: "32" },
                { team: "IND-U19:", rate: "24" },
            ],
            description: "4s: 28 vs 22 | 6s: 4 vs 2",
        },
        {
            title: "Dot Ball %",
            innings: [
                { team: "AUS-U19:", rate: "47.2%" },
                { team: "IND-U19:", rate: "31.4%" },
            ],
            description: "Lower is better for batting teams",
        },
    ];

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

    const phaseData = [
        {
            phase: "1 - 15 overs",
            aus: { runsWkts: "89 / 1", rr: "5.93" },
            ind: { runsWkts: "67 / 2", rr: "4.47" },
            advantage: { team: "AUS", color: "primary" },
        },
        {
            phase: "16 - 30 overs",
            aus: { runsWkts: "74 / 2", rr: "4.93" },
            ind: { runsWkts: "70 / 1", rr: "4.66" },
            advantage: { team: "AUS", color: "primary" },
        },
        {
            phase: "31 - 45 overs",
            aus: { runsWkts: "68 / 3", rr: "4.53" },
            ind: { runsWkts: "80 / 1", rr: "5.33" },
            advantage: { team: "IND", color: "blue" },
        },
        {
            phase: "46 - 50 overs",
            aus: { runsWkts: "47 / 2", rr: "5.40" },
            ind: { runsWkts: "51 / 0", rr: "6.12" },
            advantage: { team: "IND", color: "blue" },
        },
    ];

    const bowlingFigure = [
        {
            name: "Jasprit Bumrah",
            o: "8",
            m: "3",
            r: "24",
            w: "1",
            econ: "3.00",
            wd: "2",
            dots: "20",
        },
        {
            name: "Mohammed Siraj",
            o: "10",
            m: "1",
            r: "45",
            w: "2",
            econ: "4.50",
            wd: "1",
            dots: "32",
        },
        {
            name: "Ravindra Jadeja",
            o: "10",
            m: "0",
            r: "55",
            w: "1",
            econ: "5.50",
            wd: "0",
            dots: "28",
        },
        {
            name: "Kuldeep Yadav",
            o: "10",
            m: "0",
            r: "62",
            w: "2",
            econ: "6.20",
            wd: "3",
            dots: "22",
        },
        {
            name: "Hardik Pandya",
            o: "8",
            m: "0",
            r: "48",
            w: "0",
            econ: "6.00",
            wd: "1",
            dots: "18",
        },
    ]

    const partnerships = [
        {
            left: { name: "Mhatre", runs: 12, balls: 16 },
            center: { rr: 4.5, runs: 24, balls: 32 },
            right: { name: "Suryavanshi", runs: 12, balls: 16 },
        },
        {
            left: { name: "Patel", runs: 25, balls: 22 },
            center: { rr: 6.8, runs: 47, balls: 41 },
            right: { name: "Sharma", runs: 22, balls: 19 },
        },
        {
            left: { name: "Kohli", runs: 30, balls: 28 },
            center: { rr: 7.2, runs: 60, balls: 50 },
            right: { name: "Rohit", runs: 30, balls: 22 },
        },
        {
            left: { name: "Jadeja", runs: 15, balls: 18 },
            center: { rr: 5.5, runs: 35, balls: 38 },
            right: { name: "Rahul", runs: 20, balls: 20 },
        },
    ];

    const sessions = [
        {
            title: "Session 1 (Day 1)",
            overs: "1–30",
            runs: 145,
            wkts: 2,
            rr: 4.83,
        },
        {
            title: "Session 2 (Day 1)",
            overs: "31–60",
            runs: 120,
            wkts: 3,
            rr: 4.00,
        },
        {
            title: "Session 3 (Day 1)",
            overs: "61–90",
            runs: 95,
            wkts: 1,
            rr: 3.16,
        },
        {
            title: "Session 1 (Day 2)",
            overs: "91–120",
            runs: 110,
            wkts: 2,
            rr: 3.66,
        },
    ];

    return (
        <div className='pb-[120px] space-y-8'>
            <div className='grid grid-cols-3 gap-6'>
                {scoringData.map((team, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 shadow-sm rounded-lg w-full"
                    >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="font-bold leading-normal text-black-100">
                                {team.title}
                            </h5>
                            {team?.icon}
                        </div>

                        {/* Card Body (Inner Loop) */}
                        <div className="space-y-3">
                            {team.innings.map((inning, j) => (
                                <div
                                    key={j}
                                    className="flex items-center justify-between mb-2"
                                >
                                    <p className="text-sm leading-5 text-black-300">
                                        {inning.team}:
                                    </p>
                                    <p className="text-end leading-normal text-black-400">
                                        {inning.rate}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {
                            team?.description && (
                                <p className='text-xs leading-4 mt-3 text-dark-gray-900'>{team?.description}</p>
                            )
                        }
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='shadow-sm bg-white rounded-[10px] overflow-auto relative p-6 pt-[26px]'>
                    <ScoreProgressionChart />
                </div>
                <div className='shadow-sm bg-white rounded-[10px] overflow-auto'>
                    <div className='flex items-center justify-between p-6 pb-0'>
                        <h6 className='text-lg leading-7 font-bold text-black-100'>Run Rate (IND)</h6>
                        <CustomSelect className='w-full max-w-[175px]' value={format} onChange={setInning} options={innings} />
                    </div>
                    <RunRateChart/>
                </div>
            </div>
            <div className='shadow-sm bg-white rounded-[10px] overflow-auto p-6'>
                <h6 className='text-lg leading-7 font-bold text-black-100 pb-4'>Phase-wise Analysis</h6>
                <Table className="text-end [&_td]:p-3 text-sm leading-4">
                    <TableHeader className="bg-light-gray-500 text-dark-gray-700">
                        <TableRow className="border-0!">
                            <TableCell className="text-start">Phase</TableCell>
                            <TableCell>AUS-U19 Runs / Wkts</TableCell>
                            <TableCell>AUS RR</TableCell>
                            <TableCell>IND-U19 Runs / Wkts</TableCell>
                            <TableCell>IND RR</TableCell>
                            <TableCell>Advantage</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="[&_td]:py-1.5 text-dark-gray-50">
                        {phaseData.map((row, i) => (
                            <TableRow key={i} className="border-0!">
                                <TableCell className="text-start">{row.phase}</TableCell>
                                <TableCell>{row.aus.runsWkts}</TableCell>
                                <TableCell>{row.aus.rr}</TableCell>
                                <TableCell>{row.ind.runsWkts}</TableCell>
                                <TableCell className="font-bold">{row.ind.rr}</TableCell>
                                <TableCell>
                                    <p
                                        className={`${row.advantage.color === "blue" ? "text-black-100 bg-[#F0F6FF]" : "text-primary bg-light-gray"} text-sm leading-5 py-1 px-3 rounded-sm inline-block uppercase`}
                                    >
                                        {row.advantage.team}
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className='shadow-sm bg-white rounded-[10px] overflow-auto p-6'>
                <h6 className='text-lg leading-7 font-bold text-black-100 pb-6'>Bowling Analysis</h6>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <h6 className='leading-normal mb-4 text-black-100'>Bowling Figures</h6>
                        <Table className="text-end [&_td]:p-3 text-sm leading-4">
                            <TableHeader className="bg-light-gray-500 text-dark-gray-700">
                                <TableRow className="border-0!">
                                    <TableCell className="text-start">Bowlers</TableCell>
                                    <TableCell>o</TableCell>
                                    <TableCell>M</TableCell>
                                    <TableCell>R</TableCell>
                                    <TableCell>W</TableCell>
                                    <TableCell>Econ.</TableCell>
                                    <TableCell>WD</TableCell>
                                    <TableCell>Dots</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-dark-gray-50">
                                {bowlingFigure.map((row, i) => (
                                    <TableRow key={i} className="border-0!">
                                        <TableCell className="text-start">{row.name}</TableCell>
                                        <TableCell>{row.o}</TableCell>
                                        <TableCell>{row.m}</TableCell>
                                        <TableCell>{row.r}</TableCell>
                                        <TableCell className="font-bold">{row.w}</TableCell>
                                        <TableCell>{row.econ}</TableCell>
                                        <TableCell>{row.wd}</TableCell>
                                        <TableCell>{row.dots}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h6 className='leading-normal mb-4 text-black-100'>Economy Rate Chart</h6>
                        <EconomyRateChart />
                    </div>
                </div>
            </div>
            <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[375px] w-full mt-6">AD</div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='shadow-sm bg-white rounded-[10px] p-6'>
                    <h6 className='text-lg leading-7 font-bold text-black-100 pb-6'>Ball Type Analysis</h6>
                    <BallTypeAnalysis />
                </div>
                <div className='shadow-sm bg-white rounded-[10px] p-6'>
                    <h6 className='text-lg leading-7 font-bold text-black-100 pb-6'>Bowler Performance Radar</h6>
                    <BowlerPerformanceRadar/>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='shadow-sm bg-white rounded-[10px] p-6'>
                    <h6 className='text-lg leading-7 font-bold text-black-100 pb-6'>Session Breakdown</h6>
                    <div className='divide-y divide-black/10'>
                        {sessions.map((session, i) => (
                            <div
                                key={i}
                                className="w-full p-4 text-sm leading-5 text-black-300 [&_span]:text-black-400"
                            >
                                <div className="flex items-center justify-between">
                                    <h6 className="text-base leading-normal text-black-100">
                                        {session.title}
                                    </h6>
                                    <p>{session.overs}</p>
                                </div>

                                <div className="grid grid-cols-3 mt-2">
                                    <p>
                                        Runs: <span>{session.runs}</span>
                                    </p>
                                    <p>
                                        Wkts: <span>{session.wkts}</span>
                                    </p>
                                    <p>
                                        RR: <span>{session.rr}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shadow-sm bg-white rounded-[10px] p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <h6 className='text-lg leading-7 font-bold text-black-100'>Partnerships</h6>
                        <CustomSelect className='w-full max-w-[175px] py-1.5 px-2 h-auto' value={format} onChange={setInning} options={innings} />
                    </div>
                    <div className='divide-y divide-black/10'>
                        {partnerships.map((pair, i) => (
                            <div
                                key={i}
                                className="text-black-300 text-sm leading-5 grid grid-cols-3 gap-4 p-4"
                            >
                                <div>
                                    <p className="text-black-100 text-base">{pair.left.name}</p>
                                    <p className="text-black-400 leading-normal text-base font-bold">
                                        {pair.left.runs} runs
                                    </p>
                                    <p>{pair.left.balls} balls</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-black-100">RR: {pair.center.rr}</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <p className="text-black-400 leading-normal text-base font-bold">
                                            {pair.center.runs} runs
                                        </p>
                                        <p>{pair.center.balls} balls</p>
                                    </div>
                                    <p>{pair.left.balls + pair.right.balls} balls</p>
                                </div>

                                <div className="text-end">
                                    <p className="text-black-100 text-base">{pair.right.name}</p>
                                    <p className="text-black-400 leading-normal text-base font-bold">
                                        {pair.right.runs} runs
                                    </p>
                                    <p>{pair.right.balls} balls</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stats