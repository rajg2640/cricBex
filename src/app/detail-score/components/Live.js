import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import React from 'react'

const Live = () => {
    
     const overData = [
        {
            overNumber: 18,
            totalRuns: 8,
            balls: [{ value: "•" }, { value: 1 }, { value: 2 }, { value: 1 }, { value: 4 }],
        },
        {
            overNumber: 17,
            totalRuns: 12,
            balls: [{ value: 1 }, { value: 4 }, { value: "W" }, { value: 2 }, { value: 1 }, { value: 4 }],
        },
    ];

    const batters = [
        {
            name: "Atharva Taide*",
            hand: "lhb",
            runs: 22,
            balls: 44,
            fours: 4,
            sixes: 0,
            sr: 50.0,
            thisBowler: "8 (8b)",
            thisBowlerMat: "14 (32b)",
            fcMat: 34,
            fcRuns: 1847,
            fcHS: 138,
            fcAvg: 34.85,
        },
        {
            name: "Dhruv Shorey",
            hand: "rhb",
            runs: 7,
            balls: 18,
            fours: 1,
            sixes: 0,
            sr: 38.88,
            thisBowler: "1 (1b)",
            thisBowlerMat: "7 (18b)",
            fcMat: 72,
            fcRuns: 4892,
            fcHS: "252*",
            fcAvg: 47.5,
        },
    ];

    const bowlers = [
        {
            name: "Saransh Jain",
            type: "ob",
            o: "1.3",
            m: 0,
            r: 9,
            w: 0,
            econ: 6.0,
            zero: 6,
            fours: 2,
            sixes: 0,
            thisSpell: "-",
            mat: 45,
            wkts: 147,
            bbi: "6/103",
            ave: 28.08,
        },
        {
            name: "Gurnoor Brar",
            type: "rf",
            o: 2,
            m: 0,
            r: 8,
            w: 0,
            econ: 4.0,
            zero: 10,
            fours: 2,
            sixes: 0,
            thisSpell: "-",
            mat: 15,
            wkts: 41,
            bbi: "5/14",
            ave: 25.83,
        },
    ];

    const overSummary = [
        {
            overNumber: 16,
            runs: 4,
            score: "VIDAR: 70/1",
            crr: "4.28",
            batters: [
                { name: "Dhruv Shorey", score: "7 (18b 1x4)" },
                { name: "Atharva Taide", score: "22 (41b 4x4)" },
            ],
            bowlers: [
                { name: "Saransh Jain", score: "2-0-9-0" },
                { name: "Gurnoor Brar", score: "2-0-8-0" },
            ],
            balls: [
                {
                    ball: "15.6",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "15.5",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "15.4",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "15.3",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "15.2",
                    summary: "Jain to Taide, FOUR!",
                    description: "lovely timing through extra cover for four runs.",
                    resultIcon: "4",
                },
                {
                    ball: "15.1",
                    summary: "Jain to Taide, no run",
                    description: "uses his feet and drives but can't get past the short extra cover.",
                    resultIcon: "•",
                },
            ],
        },
        {
            overNumber: 15,
            runs: 6,
            score: "VIDAR: 66/1",
            crr: "4.40",
            batters: [
                { name: "Atharva Taide", score: "28 (48b 5x4)" },
                { name: "Dhruv Shorey", score: "8 (21b 1x4)" },
            ],
            bowlers: [
                { name: "Gurnoor Brar", score: "3-0-14-0" },
                { name: "Saransh Jain", score: "2-0-10-0" },
            ],
            balls: [
                {
                    ball: "14.6",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "14.5",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "14.4",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "•",
                },
                {
                    ball: "14.3",
                    summary: "Jain to Taide, no run",
                    description: "defended firmly back to the bowler.",
                    resultIcon: "2",
                },
                {
                    ball: "14.2",
                    summary: "Jain to Taide, FOUR!",
                    description: "lovely timing through extra cover for four runs.",
                    resultIcon: "4",
                },
                {
                    ball: "14.1",
                    summary: "Jain to Taide, no run",
                    description: "uses his feet and drives but can't get past the short extra cover.",
                    resultIcon: "•",
                },
            ],
        },
    ]

    return (
        <div className='flex gap-6 pb-[120px]'>
            <div className='w-9/12 space-y-6'>
                <div className='shadow-sm bg-white rounded-2xl overflow-auto'>
                    <Table>
                        <TableBody className="[&_td]:p-3 [&_tr]:border-0 text-end text-sm leading-4">

                            {/* Header Row */}
                            <TableRow>
                                <TableCell colSpan={10}></TableCell>
                                <TableCell colSpan={4} className="text-center text-dark-gray-700 border-l border-light-gray-600">
                                    FC CAREER
                                </TableCell>
                            </TableRow>

                            {/* Batters Header */}
                            <TableRow className="bg-light-gray text-dark-gray-700">
                                <TableCell className="text-start">Batters</TableCell>
                                <TableCell>R</TableCell>
                                <TableCell>B</TableCell>
                                <TableCell>4s</TableCell>
                                <TableCell>6s</TableCell>
                                <TableCell>SR</TableCell>
                                <TableCell colSpan={3} className="border-l border-light-gray-600">This Bowler</TableCell>
                                <TableCell>Mat</TableCell>
                                <TableCell className="border-l border-light-gray-600">Mat</TableCell>
                                <TableCell>Runs</TableCell>
                                <TableCell>HS</TableCell>
                                <TableCell>Avg</TableCell>
                            </TableRow>

                            {/* Batters Rows */}
                            {batters.map((batter, i) => (
                                <TableRow key={i} className="text-dark-gray-100">
                                    <TableCell className="text-start">
                                        <p className="text-dark-gray-50">
                                            {batter.name}{" "}
                                            <span className="text-dark-gray-100">({batter.hand})</span>
                                        </p>
                                    </TableCell>
                                    <TableCell className="font-bold text-dark-gray-50">
                                        {batter.runs}
                                    </TableCell>
                                    <TableCell>{batter.balls}</TableCell>
                                    <TableCell>{batter.fours}</TableCell>
                                    <TableCell>{batter.sixes}</TableCell>
                                    <TableCell>{batter.sr}</TableCell>
                                    <TableCell colSpan={3} className="border-l border-light-gray-600">{batter.thisBowler}</TableCell>
                                    <TableCell>{batter.thisBowlerMat}</TableCell>
                                    <TableCell className="border-l border-light-gray-600">{batter.fcMat}</TableCell>
                                    <TableCell>{batter.fcRuns}</TableCell>
                                    <TableCell>{batter.fcHS}</TableCell>
                                    <TableCell>{batter.fcAvg}</TableCell>
                                </TableRow>
                            ))}

                            {/* Bowlers Header */}
                            <TableRow className="bg-light-gray text-dark-gray-700">
                                <TableCell className="text-start">Bowlers</TableCell>
                                <TableCell>O</TableCell>
                                <TableCell>M</TableCell>
                                <TableCell>R</TableCell>
                                <TableCell>W</TableCell>
                                <TableCell>Econ.</TableCell>
                                <TableCell className="border-l border-light-gray-600">0s</TableCell>
                                <TableCell>4s</TableCell>
                                <TableCell>6s</TableCell>
                                <TableCell>This Spell</TableCell>
                                <TableCell className="border-l border-light-gray-600">Mat</TableCell>
                                <TableCell>Wkts</TableCell>
                                <TableCell>BBI</TableCell>
                                <TableCell>Ave</TableCell>
                            </TableRow>

                            {/* Bowlers Rows */}
                            {bowlers.map((bowler, i) => (
                                <TableRow key={i} className="text-dark-gray-100">
                                    <TableCell className="text-start">
                                        <p className="text-dark-gray-50">
                                            {bowler.name}{" "}
                                            <span className="text-dark-gray-100">({bowler.type})</span>
                                        </p>
                                    </TableCell>
                                    <TableCell>{bowler.o}</TableCell>
                                    <TableCell>{bowler.m}</TableCell>
                                    <TableCell>{bowler.r}</TableCell>
                                    <TableCell className="font-bold text-dark-gray-50">
                                        {bowler.w}
                                    </TableCell>
                                    <TableCell>{bowler.econ}</TableCell>
                                    <TableCell className="border-l border-light-gray-600">{bowler.zero}</TableCell>
                                    <TableCell>{bowler.fours}</TableCell>
                                    <TableCell>{bowler.sixes}</TableCell>
                                    <TableCell>{bowler.thisSpell}</TableCell>
                                    <TableCell className="border-l border-light-gray-600">{bowler.mat}</TableCell>
                                    <TableCell>{bowler.wkts}</TableCell>
                                    <TableCell>{bowler.bbi}</TableCell>
                                    <TableCell>{bowler.ave}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[389px] w-full">AD</div>
                <div className='rounded-2xl bg-white shadow-sm'>
                    <h5 className='p-3 border-b border-light-gray-600 text-[15px] leading-5 font-bold'>Fall of Wickets</h5>
                    <div className='p-3 pl-16 flex gap-5'>
                        <div className='h-10 w-10 rounded-sm bg-black/10 flex items-center justify-center text-dark-gray-50 font-bold text-[15px] leading-5'>•</div>
                        <div className='text-dark-gray-800 leading-5 max-w-[380px]'>
                            <div className='flex items-center  gap-2 mb-1'>
                                <p className='text-[13px] leading-none'>14.3</p>
                                <p className='text-[15px]'>Jain to Atharva, no run</p>
                            </div>
                            <p className='text-[15px]'>uses his feet and drives but can't get past the short extra cover.</p>
                        </div>
                    </div>
                    {overSummary.map((over, i) => (
                        <div key={i}>
                            {/* 🔹 Over Summary */}
                            <div className="py-2.5 px-3 bg-primary-100 border-l-4 border-primary flex items-center justify-between">
                                <div>
                                    <p className="uppercase text-dark-gray-50 text-[15px] leading-5 font-bold">
                                        End of over {over.overNumber}
                                    </p>
                                    <p className="text-dark-gray-50 mt-1 text-[13px] leading-3.5">{over.runs} runs</p>
                                </div>
                                <div className="text-end">
                                    <p className="uppercase text-dark-gray-50 text-[15px] leading-5 font-bold">{over.score}</p>
                                    <p className="text-dark-gray-50 mt-1 text-[13px] leading-3.5">CRR: {over.crr}</p>
                                </div>
                            </div>

                            {/* 🔹 Batters & Bowlers */}
                            <div className="bg-light-gray flex items-center">
                                {/* Batters */}
                                <div className="w-1/2 p-2.5">
                                    <div className="w-1/2 space-y-1.5">
                                        {over.batters.map((batter, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center justify-between text-[13px] leading-3.5 text-dark-gray-50"
                                            >
                                                <p>{batter.name}</p>
                                                <p>{batter.score}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bowlers */}
                                <div className="w-1/2 p-2.5 border-l border-black/10">
                                    <div className="w-1/2 space-y-1.5">
                                        {over.bowlers.map((bowler, k) => (
                                            <div
                                                key={k}
                                                className="flex items-center justify-between text-[13px] leading-3.5 text-dark-gray-50"
                                            >
                                                <p>{bowler.name}</p>
                                                <p>{bowler.score}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 🔹 Ball Commentary */}
                            {over.balls.map((ball, l) => (
                                <div key={l} className="p-3 pl-16 flex gap-5 border-b border-black/5">
                                    <div className={`h-10 w-10 rounded-sm bg-black/10 flex items-center justify-center text-dark-gray-50 font-bold text-[15px] leading-5 ${ball?.resultIcon === "4" ? "bg-success text-white" : ""}`}>
                                        {ball.resultIcon}
                                    </div>
                                    <div className="text-dark-gray-800 leading-5 max-w-[380px]">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-[13px] leading-none">{ball.ball}</p>
                                            <p className="text-[15px]">{ball.summary}</p>
                                        </div>
                                        <p className="text-[15px]">{ball.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className='p-4 pb-5 flex justify-center'>
                        <Button variant="link" className="text-[15px] leading-5font-bold">Read full commentary</Button>
                    </div>
                    <div className='p-3 bg-light-gray-800'>
                        <p className='uppercase text-xs leading-3.5 text-dark-gray-100'>Commentary Feedback</p>
                    </div>
                    <div className='py-4'>
                        <form className='p-6'>
                            <div className='grid grid-cols-2 gap-6'>
                                <Input placeholder="Name" />
                                <Input placeholder="Email" />
                                <Textarea placeholder="Your message (Maximum 500 words)" className="col-span-2 min-h-[90px]" />
                            </div>
                            <div className='flex items-center text-[15px] leading-6 text-dark-gray-100 w-full [&_a]:text-primary [&_a]:mx-2 mt-5'>This site is protected by reCAPTCHA and the Google <Link href="/">Privacy Policy</Link>and<Link href="/">Terms of Service</Link>apply.</div>
                            <Button className="rounded-full font-bold text-[15px] leading-5 mt-5">Submit Feedback</Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className='sticky top-20'>
                    <div className='bg-white  divide-y divide-black/10  shadow-sm rounded-lg w-full'>
                        <div className="pt-6 p-4">
                            <h5 className="text-primary font-bold leading-[21px]">Recent Overs</h5>
                        </div>
                        {overData.map((over, index) => (
                            <div key={index} className="p-4">
                                {/* Over Header */}
                                <div className="flex items-center justify-between mb-2">
                                    <p className="leading-[19px] text-dark-gray-50">Over {over.overNumber}</p>
                                    <div className="text-info-50 border border-info-50 bg-info-50/10 rounded-sm py-0.5 px-1 text-[11px] leading-[13px]">
                                        {over.totalRuns} runs
                                    </div>
                                </div>

                                {/* Ball Values */}
                                <div className="flex items-center w-fit gap-2">
                                    {over.balls.map((ball, i) => (
                                        <div
                                            key={i}
                                            className={`h-8 w-8 rounded-full flex items-center justify-center text-dark-gray-50 leading-[19px] bg-light-gray-300 ${ball.value === 4 || ball.value === 6
                                                ? "bg-success/30"
                                                : ball.value === "W"
                                                    ? "bg-primary-100"
                                                    : ""
                                                }`}
                                        >
                                            {ball.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[475px] w-full mt-6">AD</div>
                </div>
            </div>
        </div>
    )
}

export default Live