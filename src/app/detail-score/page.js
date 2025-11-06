import { Button } from '@/components/ui/button'
import React from 'react'
import { Humidity, HumidityPercentage, LeftArrow, Location, Sun, Tepmrature, Wind } from '../shared/Icon'
import Container from '../shared/Container'
import India from '@/app/assets/image/png/india.png'
import Pakistan from '@/app/assets/image/png/pakistan.png'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

const page = () => {
    return (
        <>
            <div className='py-4'>
                <Container>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-6'>
                            <Button variant="link" className="text-[#343330]"><LeftArrow className="!w-6 !h-6" /></Button>
                            <div>
                                <h6 className='text-xl leading-[28px] mb-1 font-semibold [&_span]:font-normal'>IND <span>vs</span> PAK, Asia Cup Final</h6>
                                <div className='flex items-center gap-4 text-xs leading-[14px] text-dark-gray-100'>
                                    <div className='flex items-center gap-1'>
                                        <Location />
                                        <p>Boland Park, Paarl, South Africa</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Location />
                                        <p>T20I</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Location />
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
                                            <p className='mt-1 text-xs leading-[14px] text-dark-gray-50/50'>Currently Batting</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-semibold text-2xl leading-[28px] text-dark-gray-50`}>
                                            <span>146</span>
                                            <span className="inline-block mx-0.5">/</span>
                                            <span>5</span>
                                        </p>
                                        <span className={`text-sm block leading-[16px] text-dark-gray-100`}>
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
                                            <p className='mt-1 text-xs leading-[14px] text-dark-gray-50/50'>1st Inning</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-semibold text-2xl leading-[28px] text-dark-gray-50`}>
                                            <span>142</span>
                                            <span className="inline-block mx-0.5">/</span>
                                            <span>5</span>
                                        </p>
                                        <span className={`text-sm block leading-[16px] text-dark-gray-100`}>
                                            (20.0)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-light-gray border border-primary-600 text-primary font-bold text-2xl leading-[28px] p-6 shadow-sm rounded-lg w-full'>IND need 34 runs from 9 balls</div>
                        </div>
                        <div className='w-4/12 space-y-4'>
                            <div className='bg-white p-6  pb-[34px] shadow-sm rounded-lg w-full'>
                                <div className='flex items-center justify-between mb-6'>
                                    <p className='leading-[19px] text-dark-gray-50'>Current Over (18.5)</p>
                                    <div className='text-info-50 border border-info-50 rounded-sm py-0.5 px-1 text-[11px] leading-[13px]'>6 runs • 1 wicket</div>
                                </div>
                                <div className='flex items-center w-fit gap-2'>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-light-gray-300'>1</div>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-light-gray-300'>2</div>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-light-gray-300'>3</div>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-success/30'>4</div>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-success/30'>6</div>
                                    <div className='h-10 w-10 rounded-full flex items-center justify-center text-dark-gray-50 text-xl leading-[23px] bg-primary-100'>W</div>
                                </div>
                            </div>
                            <div className='bg-white p-6 shadow-sm rounded-lg w-full'>
                                <p className='mb-4 text-dark-gray-50/50 leading-[19px]'>Weather</p>
                                <div className='flex items-center w-fit gap-4'>
                                    <div>
                                        <Sun />
                                        <p className='text-xs leading-[14px] text-dark-gray-50/50 text-center'>Sunny</p>
                                    </div>
                                    <div>
                                        <Humidity />
                                        <p className='text-xs leading-[14px] text-dark-gray-50/50 text-center'>0</p>
                                    </div>
                                    <div>
                                        <Wind />
                                        <p className='text-xs leading-[14px] text-dark-gray-50/50 text-center'>11</p>
                                    </div>
                                    <div>
                                        <HumidityPercentage />
                                        <p className='text-xs leading-[14px] text-dark-gray-50/50 text-center'>35</p>
                                    </div>
                                    <div>
                                        <Tepmrature />
                                        <p className='text-xs leading-[14px] text-dark-gray-50/50 text-center'>28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container >
            </div>

            <div className='mt-6'>
                <Tabs defaultValue="live" className="gap-6">
                    <div className='border-t border-b border-black/25'>
                        <Container>
                            <TabsList className="border-0 justify-start p-0">
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] !shadow-none !bg-transparent border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:!text-primary data-[state=active]:border-primary' value="live">Live</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] !shadow-none !bg-transparent border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:!text-primary data-[state=active]:border-primary' value="scorecard">Scorecard</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] !shadow-none !bg-transparent border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:!text-primary data-[state=active]:border-primary' value="commentary">Commentary</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] !shadow-none !bg-transparent border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:!text-primary data-[state=active]:border-primary' value="stats">Stats</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] !shadow-none !bg-transparent border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:!text-primary data-[state=active]:border-primary' value="playingXI">Playing XI</TabsTrigger>
                            </TabsList>
                        </Container>
                    </div>
                    <Container>
                        <TabsContent value="live">
                            <div className='flex gap-6'>
                                <div className='w-9/12 space-y-6'>
                                    <div className='shadow-sm rounded-[16px] overflow-auto'>
                                        <Table>
                                            <TableBody className="[&_td]:p-3 [&_tr]:border-0 text-end text-sm leading-[16px]">
                                                <TableRow>
                                                    <TableCell colspan={10}></TableCell>
                                                    <TableCell colspan={4} className="text-center text-dark-gray-700">FC CAREER</TableCell>
                                                </TableRow>
                                                <TableRow className="bg-light-gray text-dark-gray-700 ">
                                                    <TableCell className="text-start">Batters</TableCell>
                                                    <TableCell>R</TableCell>
                                                    <TableCell>B</TableCell>
                                                    <TableCell>4s</TableCell>
                                                    <TableCell>6s</TableCell>
                                                    <TableCell>SR</TableCell>
                                                    <TableCell colspan={3}>This Bowler</TableCell>
                                                    <TableCell>Mat</TableCell>
                                                    <TableCell>Mat</TableCell>
                                                    <TableCell>Runs</TableCell>
                                                    <TableCell>HS</TableCell>
                                                    <TableCell>Avg</TableCell>
                                                </TableRow>
                                                <TableRow className="text-dark-gray-100">
                                                    <TableCell className="text-start"><p className='text-dark-gray-50'>Atharva Taide* <span className='text-dark-gray-100'>(lhb)</span></p></TableCell>
                                                    <TableCell className="font-bold text-dark-gray-50">22</TableCell>
                                                    <TableCell>44</TableCell>
                                                    <TableCell>4</TableCell>
                                                    <TableCell>0</TableCell>
                                                    <TableCell>50.00</TableCell>
                                                    <TableCell colspan={3}>8 (8b)</TableCell>
                                                    <TableCell>14 (32b)</TableCell>
                                                    <TableCell>34</TableCell>
                                                    <TableCell>1847</TableCell>
                                                    <TableCell>138</TableCell>
                                                    <TableCell>34.85</TableCell>
                                                </TableRow>
                                                <TableRow className="bg-light-gray text-dark-gray-700 text-end text-sm leading-[16px]">
                                                    <TableCell className="text-start">Bowlers</TableCell>
                                                    <TableCell>o</TableCell>
                                                    <TableCell>M</TableCell>
                                                    <TableCell>R</TableCell>
                                                    <TableCell>W</TableCell>
                                                    <TableCell>Econ.</TableCell>
                                                    <TableCell>0s</TableCell>
                                                    <TableCell>4s</TableCell>
                                                    <TableCell>6s</TableCell>
                                                    <TableCell>This Spell</TableCell>
                                                    <TableCell>Mat</TableCell>
                                                    <TableCell>Wkts</TableCell>
                                                    <TableCell>BBI</TableCell>
                                                    <TableCell>Ave</TableCell>
                                                </TableRow>
                                                <TableRow className="text-dark-gray-100">
                                                    <TableCell className="text-start"><p className='text-dark-gray-50'>Saransh Jain <span className='text-dark-gray-100'>(ob)</span></p></TableCell>
                                                    <TableCell>1.3</TableCell>
                                                    <TableCell>0</TableCell>
                                                    <TableCell>9</TableCell>
                                                    <TableCell className="font-bold text-dark-gray-50">0</TableCell>
                                                    <TableCell>6.00</TableCell>
                                                    <TableCell>6</TableCell>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>0</TableCell>
                                                    <TableCell>-</TableCell>
                                                    <TableCell>45</TableCell>
                                                    <TableCell>147</TableCell>
                                                    <TableCell>6/103</TableCell>
                                                    <TableCell>28.08</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[389px] w-full">AD</div>
                                </div>
                                <div className='w-3/12'></div>
                            </div>
                        </TabsContent>
                    </Container>
                </Tabs>
            </div>
        </>
    )
}

export default page