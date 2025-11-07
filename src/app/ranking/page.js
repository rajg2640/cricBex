import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Container from '../shared/Container'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'
import { FirstRank, RankArrowDown, RankArrowUp, SecondRank, ThirdRank } from '../shared/Icon'

const page = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Rankings" },
    ]
    const rankings = [
        { rank: 1, team: "India", matches: 18, points: 116, change: 0 },
        { rank: 2, team: "Australia", matches: 16, points: 112, change: 1 },
        { rank: 3, team: "England", matches: 15, points: 108, change: -1 },
        { rank: 4, team: "Pakistan", matches: 14, points: 102, change: 2 },
        { rank: 5, team: "New Zealand", matches: 12, points: 98, change: -1 },
        { rank: 6, team: "South Africa", matches: 11, points: 94, change: -1 },
        { rank: 7, team: "Bangladesh", matches: 13, points: 87, change: 1 },
        { rank: 8, team: "Sri Lanka", matches: 10, points: 83, change: -1 },
        { rank: 9, team: "Afghanistan", matches: 12, points: 76, change: 0 },
        { rank: 10, team: "West Indies", matches: 9, points: 71, change: 0 },
    ]

    return (
        <>
            <Container>
                <div className='py-4'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                    <h2 className='text-[32px] font-medium text-dark-gray'>Rankings</h2>
                </div>
            </Container>
            <Tabs defaultValue="test" className="gap-6 mb-10">
                <div className='border-t border-b border-black/25'>
                    <Container>
                        <div className='flex items-center'>
                            <TabsList className="border-0 justify-start p-0">
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="test">Test</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="ODI">ODI</TabsTrigger>
                                <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="T20I">T20I</TabsTrigger>
                            </TabsList>
                            <Select>
                                <SelectTrigger className="w-[180px] border-0 shadow-none text-black/60">
                                    <SelectValue placeholder="Select Ranking" />
                                </SelectTrigger>
                                <SelectContent className='border-0'>
                                    <SelectGroup>
                                        <SelectItem value="teams">Teams</SelectItem>
                                        <SelectItem value="matches">Matches</SelectItem>
                                        <SelectItem value="rating">Rating</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </Container>
                </div>
                <Container>
                    <TabsContent value="test">
                        <div className='rounded-lg shadow-lg overflow-auto border border-black/10'>
                            <h2 className="text-xl text-black-100 font-bold p-4">ODI Team Rankings</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow className='border-0!'>
                                        <TableCell className='border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200'>Rank</TableCell>
                                        <TableCell className='border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200'>Team</TableCell>
                                        <TableCell className='border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200'>Matches</TableCell>
                                        <TableCell className='border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200'>Rating</TableCell>
                                        <TableCell className='border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200'>Change</TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="[&_td]:p-3 [&_tr]:border-0 text-sm leading-4">
                                    {rankings.map((team) => (
                                        <TableRow key={team.rank} className="border-b last:border-0">
                                            <TableCell className="border-b border-light-gray-400 p-4 font-medium text-gray-700">
                                                {team.rank <= 3 ? (
                                                    <span className='w-5 flex justify-center'>
                                                        {team.rank === 1 ? <FirstRank /> : team.rank === 2 ? <SecondRank /> : <ThirdRank />}
                                                    </span>
                                                ) : (
                                                    <span className='w-5 text-center block'>{team.rank}</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="border-b border-light-gray-400 p-4 text-gray-800">{team.team}</TableCell>
                                            <TableCell className="border-b border-light-gray-400 p-4 text-gray-600">{team.matches}</TableCell>
                                            <TableCell className="border-b border-light-gray-400 p-4 font-semibold text-gray-900">{team.points}</TableCell>
                                            <TableCell className="border-b border-light-gray-400 p-4">
                                                {team.change > 0 ? (
                                                    <span className="text-green-500 flex items-center gap-1">
                                                        <RankArrowUp /> {team.change}
                                                    </span>
                                                ) : team.change < 0 ? (
                                                    <span className="text-primary-900 flex items-center gap-1">
                                                        <RankArrowDown /> {Math.abs(team.change)}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 flex items-center">
                                                        -
                                                    </span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colspan={rankings.length} className='bg-light-gray-500 p-4 text-black-300 text-sm'>Rankings updated as of 05/11/2025. Changes reflect movement from previous week.</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </TabsContent>
                </Container>
            </Tabs>
        </>
    )
}

export default page