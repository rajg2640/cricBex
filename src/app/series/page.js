import React from 'react'
import Container from '../shared/Container'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'
import MatchCard from '../shared/MatchCard'
import India from '@/app/assets/image/png/india.png'
import Pakistan from '@/app/assets/image/png/pakistan.png'
import Australia from '@/app/assets/image/png/australia.png'
import England from '@/app/assets/image/png/england.png'
import Bangladesh from '@/app/assets/image/png/bangladesh.png'
import Afghanistan from '@/app/assets/image/png/afghanistan.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TournamentCard from '../shared/TournamentCard'

const page = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Series" },
    ]
    const recentMatch = [
        {
            venue: "3rd Match • Bilateral Series •  ODI •  Sydney",
            firstTeam: "australia",
            firstTeamFlag: Australia,
            firstTeamScore: "287",
            firstTeamWicket: "6",
            firstTeamOver: "50.0",
            secondTeam: "england",
            secondaTeamFlag: England,
            secondTeamScore: "245",
            secondTeamWicket: "7",
            secondTeamOver: "42.5",
            result: "AUS Needs 42 runs",
            live: true
        },
        {
            venue: "3rd Match • Bilateral Series •  ODI •  Sydney",
            firstTeam: "Bangladesh",
            firstTeamFlag: Bangladesh,
            firstTeamScore: "287",
            firstTeamWicket: "6",
            firstTeamOver: "20.0",
            secondTeam: "Afghanistan",
            secondaTeamFlag: Afghanistan,
            result: "1st Inning",
            live: true
        },
        {
            venue: "Final • Asia Cup •  t20i •  Dubai",
            firstTeam: "india",
            firstTeamFlag: India,
            firstTeamScore: "150",
            firstTeamWicket: "5",
            firstTeamOver: "19.4",
            secondTeam: "pakistan",
            secondaTeamFlag: Pakistan,
            secondTeamScore: "146",
            secondTeamWicket: "10",
            secondTeamOver: "19.1",
            result: "IND won by 5  wickets",
            link: "/detail-score"
        },
        {
            venue: "Final • Asia Cup •  t20i •  Dubai",
            firstTeam: "india",
            firstTeamFlag: India,
            firstTeamScore: "150",
            firstTeamWicket: "5",
            firstTeamOver: "19.4",
            secondTeam: "pakistan",
            secondaTeamFlag: Pakistan,
            secondTeamScore: "146",
            secondTeamWicket: "10",
            secondTeamOver: "19.1",
            result: "IND won by 5  wickets"
        },
    ]
    const tournaments = [
        {
            name: "Asia Cup 2025",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "United Arab Emirates",
            format: "ODI",
            status: "Ongoing",
            matches: { total: 15, completed: 15, remaining: 15 },
            teams: [
                "India",
                "Pakistan",
            ],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },

                { label: "Squads", href: "#" },
            ],
        },
        {
            name: "India vs Australia",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "Australia",
            format: "ODI",
            status: "Upcoming",
            matches: { total: 3, completed: 0, remaining: 3 },
            teams: ["India", "Australia"],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },
                { label: "Points Table", href: "#" },
                { label: "Squads", href: "#" },
            ],
        },
        {
            name: "New Zealand vs Pakistan",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "Pakistan",
            format: "T20I",
            status: "Completed",
            matches: { total: 5, completed: 5, remaining: 0 },
            teams: ["Pakistan", "New Zealand"],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },
                { label: "Points Table", href: "#" },
                { label: "Squads", href: "#" },
            ],
        },
        {
            name: "Asia Cup 2025",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "United Arab Emirates",
            format: "ODI",
            status: "Ongoing",
            matches: { total: 15, completed: 15, remaining: 15 },
            teams: [
                "India",
                "Pakistan",
            ],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },

                { label: "Squads", href: "#" },
            ],
        },
        {
            name: "India vs Australia",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "Australia",
            format: "ODI",
            status: "Upcoming",
            matches: { total: 3, completed: 0, remaining: 3 },
            teams: ["India", "Australia"],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },
                { label: "Points Table", href: "#" },
                { label: "Squads", href: "#" },
            ],
        },
        {
            name: "New Zealand vs Pakistan",
            date: "Sept. 15, 2025 to Oct. 5, 2025",
            venue: "Pakistan",
            format: "T20I",
            status: "Completed",
            matches: { total: 5, completed: 5, remaining: 0 },
            teams: ["Pakistan", "New Zealand"],
            links: [
                { label: "Fixtures & Results", href: "/fixtures-and-results" },
                { label: "Points Table", href: "#" },
                { label: "Squads", href: "#" },
            ],
        },
    ]
    return (
        <div>
            <Container>
                <div className='py-4'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                    <h2 className='text-[32px] font-medium text-dark-gray'>Series</h2>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <h5 className="text-lg leading-[27px] font-semibold text-dark-gray">Recent Matches</h5>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4 mb-6">
                    {recentMatch.map((match, i) => (
                        <MatchCard key={i} data={match} />
                    ))}
                </div>
            </Container>
            <Tabs defaultValue="all" className="gap-6 mb-10">
                <div className='border-t border-b border-black/25'>
                    <Container>
                        <TabsList className="border-0 justify-start p-0">
                            <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="all">All</TabsTrigger>
                            <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="ongoing">Ongoing</TabsTrigger>
                            <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="upcoming">Upcoming</TabsTrigger>
                            <TabsTrigger className='w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary' value="completed">Completed</TabsTrigger>
                        </TabsList>
                    </Container>
                </div>
                <Container>
                    <TabsContent value="all">
                        {tournaments.map((tournament, index) => (
                            <TournamentCard key={index} tournament={tournament} />
                        ))}
                    </TabsContent>
                </Container>
            </Tabs>
        </div>
    )
}

export default page