"use client";
import India from '@/app/assets/image/png/india.png';
import Pakistan from '@/app/assets/image/png/pakistan.png';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Container from '../shared/Container';
import { BatBall, Humidity, HumidityPercentage, LeftArrow, Location, Sun, Tepmrature, TossCoin, Wind } from '../shared/Icon';
import Live from './components/Live';
import ScoreCard from './components/ScoreCard';
import Stats from './components/Stats';
import Commentary from './components/Commantary';

const page = () => {

    const ballValue = [
        {
            value: "•"
        },
        {
            value: "1"
        },
        {
            value: "3"
        },
        {
            value: "4"
        },
        {
            value: "6"
        },
        {
            value: "W"
        },
    ]

    const scroeDetailTab = [
        {
            value: "live",
            label: "Live"
        },
        {
            value: "scorecard",
            label: "Scorecard"
        },
        {
            value: "commentary",
            label: "Commentary"
        },
        {
            value: "stats",
            label: "Stats"
        },
        {
            value: "playing-xi",
            label: "Playing XI"
        },
    ]


    return (
        <>
            <div className='py-4'>
                <Container>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-6'>
                            <Button variant="link" className="text-[#343330]"><LeftArrow className="w-6! h-6!" /></Button>
                            <div>
                                <h6 className='text-xl leading-7 mb-1 font-semibold [&_span]:font-normal'>IND <span>vs</span> PAK, Asia Cup Final</h6>
                                <div className='flex items-center gap-4 text-xs leading-3.5 text-dark-gray-100'>
                                    <div className='flex items-center gap-1'>
                                        <Location />
                                        <p>Boland Park, Paarl, South Africa</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <BatBall />
                                        <p>T20I</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <TossCoin />
                                        <p>Pakistan won the toss and elected to bat first</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='live'>Live</p>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <div className='flex gap-6'>
                        <div className='w-8/12 space-y-4'>
                            <div className='bg-white p-6 shadow-sm rounded-lg w-full'>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            className="max-w-6 max-h-6"
                                            alt={`India Flag`}
                                            src={India}
                                        />
                                        <div>
                                            <p className={`font-bold leading-[19px] capitalize text-dark-gray-50`}>
                                                India
                                            </p>
                                            <p className='mt-1 text-xs leading-3.5 text-dark-gray-50/50'>Currently Batting</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-semibold text-2xl leading-7 text-dark-gray-50`}>
                                            <span>146</span>
                                            <span className="inline-block mx-0.5">/</span>
                                            <span>5</span>
                                        </p>
                                        <span className={`text-sm block leading-4 text-dark-gray-100`}>
                                            (19.1)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-6 shadow-sm rounded-lg w-full'>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            className="max-w-6 max-h-6"
                                            alt={`Pakistan Flag`}
                                            src={Pakistan}
                                        />
                                        <div>
                                            <p className={`font-bold leading-[19px] capitalize text-dark-gray-50`}>
                                                India
                                            </p>
                                            <p className='mt-1 text-xs leading-3.5 text-dark-gray-50/50'>1st Inning</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-semibold text-2xl leading-7 text-dark-gray-50`}>
                                            <span>142</span>
                                            <span className="inline-block mx-0.5">/</span>
                                            <span>5</span>
                                        </p>
                                        <span className={`text-sm block leading-4 text-dark-gray-100`}>
                                            (20.0)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-light-gray border border-primary-600 text-primary font-bold text-2xl leading-7 p-6 shadow-sm rounded-lg w-full'>IND need 34 runs from 9 balls</div>
                        </div>
                        <div className='w-4/12 space-y-4'>
                            <div className='bg-white p-6  pb-[34px] shadow-sm rounded-lg w-full'>
                                <div className='flex items-center justify-between mb-6'>
                                    <p className='leading-[19px] text-dark-gray-50'>Current Over (18.5)</p>
                                    <div className='text-info-50 border border-info-50 bg-info-50/10 rounded-sm py-0.5 px-1 text-[11px] leading-[13px]'>6 runs • 1 wicket</div>
                                </div>
                                <div className='flex items-center w-fit gap-2'>
                                    {
                                        ballValue.map((data, i) => {
                                            return (
                                                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-light-gray-300 ${data?.value === "4" || data?.value === "6" ? "bg-success/30" : data?.value === "W" ? "bg-primary-100" : ""}`} key={i}>{data?.value}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='bg-white p-6 shadow-sm rounded-lg w-full'>
                                <p className='mb-4 text-dark-gray-50/50 leading-[19px]'>Weather</p>
                                <div className='flex items-center w-fit gap-4'>
                                    <div>
                                        <Sun />
                                        <p className='text-xs leading-3.5 text-dark-gray-50/50 text-center'>Sunny</p>
                                    </div>
                                    <div>
                                        <Humidity />
                                        <p className='text-xs leading-3.5 text-dark-gray-50/50 text-center'>0</p>
                                    </div>
                                    <div>
                                        <Wind />
                                        <p className='text-xs leading-3.5 text-dark-gray-50/50 text-center'>11</p>
                                    </div>
                                    <div>
                                        <HumidityPercentage />
                                        <p className='text-xs leading-3.5 text-dark-gray-50/50 text-center'>35</p>
                                    </div>
                                    <div>
                                        <Tepmrature />
                                        <p className='text-xs leading-3.5 text-dark-gray-50/50 text-center'>28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container >
            </div>

            <div className='mt-6'>
                <Tabs defaultValue="stats" className="gap-6">
                    <div className='border-t border-b border-black/25'>
                        <Container>
                            <TabsList className="border-0 justify-start p-0">
                                {
                                    scroeDetailTab.map((data, i) => {
                                        return (
                                            <TabsTrigger key={i} className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value={data?.value}>{data?.label}</TabsTrigger>
                                        )
                                    })
                                }
                            </TabsList>
                        </Container>
                    </div>
                    <Container>
                        <TabsContent value="live">
                            <Live />
                        </TabsContent>
                        <TabsContent value="scorecard">
                            <ScoreCard/>
                        </TabsContent>
                        <TabsContent value="commentary">
                            <Commentary />
                        </TabsContent>
                        <TabsContent value="stats">
                            <Stats />
                        </TabsContent>
                    </Container>
                </Tabs>
            </div>
        </>
    )
}

export default page