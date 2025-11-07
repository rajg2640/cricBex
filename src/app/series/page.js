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
                <div className="grid grid-cols-4 gap-4 mt-4">
                    {recentMatch.map((match, i) => (
                        <MatchCard key={i} data={match} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default page