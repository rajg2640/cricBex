import React from 'react'
import Container from '../shared/Container'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'
import Link from 'next/link'
import sriLanka from "@/app/assets/image/png/sri-lanka-reac.png";
import india from "@/app/assets/image/png/india-reac.png";
import Image from 'next/image';

const CricketMatchCard = ({ status, matchData }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'live': return 'text-primary';
            case 'completed': return 'text-info-50 bg-info-50/10 border border-info-50';
            case 'upcoming': return 'text-primary bg-primary/10 border border-primary';
            default: return 'text-gray-600 bg-gray-50 border border-gray-200';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2 text-sm text-black-300">
                    <span>{matchData.tournament}</span>
                    <span className="mx-2">•</span>
                    <span>{matchData.format}</span>
                    <span className="mx-2">•</span>
                    <span>{matchData.date}</span>
                    <span className="mx-2">•</span>
                    <span>{matchData.time}</span>
                    <span className="mx-2">•</span>
                    <span>{matchData.venue}</span>
                </div>
                <span className={`px-3 py-1 rounded-full capitalize ${status === 'live' ? '' : 'text-xs'} ${getStatusColor(status)}`}>
                    {status === 'live' && <span className="text-2xl align-middle leading-0">•</span>} {status}
                </span>
            </div>
            <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                            <Image src={matchData.teams?.t1?.logo} alt="logo" />
                        </span>
                    </div>
                    <div>
                        <div className="text-black-100">SRL</div>
                        <div className="text-sm text-dark-gray-900">{matchData.teams?.t1?.name}</div>
                    </div>
                    {
                        matchData.status !== 'VS' &&
                        <div className="text-end flex-1">
                            <div className="font-bold text-black-100">{matchData.teams?.t1?.score}/{matchData.teams?.t1?.wickets}</div>
                            <div className="text-sm text-dark-gray-900">({matchData.teams?.t1?.overs})</div>
                        </div>
                    }
                </div>

                <div className="flex items-center gap-3 flex-1 justify-end text-end order-3">
                    {
                        matchData.status !== 'VS' &&
                        <div className="text-start flex-1">
                            <div className="font-bold text-black-100">{matchData.teams?.t2?.score}/{matchData.teams?.t2?.wickets}</div>
                            <div className="text-sm text-dark-gray-900">({matchData.teams?.t2?.overs})</div>
                        </div>
                    }
                    <div>
                        <div className="text-black-100">IND</div>
                        <div className="text-sm text-dark-gray-900">{matchData.teams?.t2.name}</div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-gray-700 font-bold text-sm">
                            <Image src={matchData.teams?.t2?.logo} alt="logo" />
                        </span>
                    </div>
                </div>

                <div className={`text-center px-4 py-2 rounded-lg flex-1 ${matchData.status !== 'VS' ? 'bg-light-gray-500' : 'order-2'}`}>
                    <div className="text-sm text-gray-700">{matchData.status}</div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                <a href="#" className="text-red-600 text-sm font-medium hover:underline">
                    View Full Match Summary
                </a>
                <div className="text-sm text-black-300">
                    {matchData.timeToStart}
                </div>
            </div>
        </div>
    );
};

const page = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Fixtures and Results" },
    ]
    const matches = [
        {
            id: 1,
            status: 'live',
            tournament: 'Asia Cup - Final',
            format: 'ODI',
            date: 'Sept. 30, 2025',
            time: '2:30 PM Local Time',
            venue: 'Dubai International Stadium, Dubai, U. A. E',
            teams: {
                t1: { score: 156, wickets: 7, overs: '18.3', name: 'Sri Lanka', logo: sriLanka },
                t2: { score: 142, wickets: 5, overs: '20.0', name: 'India', logo: india },
            },
            matchStatus: 'SRL need 14 runs from 9 balls',
            timeToStart: 'Match will Start in 2 Hours and 30 Mins.'
        },
        {
            id: 2,
            status: 'completed',
            tournament: 'Asia Cup - Final',
            format: 'ODI',
            date: 'Sept. 30, 2025',
            time: '2:30 PM Local Time',
            venue: 'Dubai International Stadium, Dubai, U. A. E',
            teams: {
                t1: { score: 156, wickets: 7, overs: '18.3', name: 'Sri Lanka', logo: sriLanka },
                t2: { score: 142, wickets: 5, overs: '20.0', name: 'India', logo: india },
            },
            matchStatus: 'SRL won by 14',
            timeToStart: 'Match will Start in 2 Hours and 30 Mins.'
        },
        {
            id: 3,
            status: 'upcoming',
            tournament: 'Asia Cup - Final',
            format: 'ODI',
            date: 'Sept. 30, 2025',
            time: '2:30 PM Local Time',
            venue: 'Dubai International Stadium, Dubai, U. A. E',
            teams: {
                t1: { score: 0, wickets: 0, overs: '0.0', name: 'Sri Lanka', logo: sriLanka },
                t2: { score: 0, wickets: 0, overs: '0.0', name: 'India', logo: india },
            },
            matchStatus: 'VS',
            timeToStart: 'Match will Start in 2 Hours and 30 Mins.'
        }
    ];
    return (
        <div>
            <Container>
                <div className='py-4'>
                    <div className='flex items-center'>
                        <div>
                            <CustomBreadcrumb items={breadcrumbItems} />
                            <h2 className='text-xl leading-normal sm:text-2xl md:text-[32px] md:leading-[38px] font-medium text-dark-gray mt-1.5'>Asia Cup 2025</h2>
                        </div>
                        <div className='ml-auto text-primary'>
                            <Link href='/points-table'>Points Table</Link>
                        </div>
                    </div>
                </div>
                {matches.map((match) => (
                    <CricketMatchCard
                        key={match.id}
                        status={match.status}
                        matchData={{
                            tournament: match.tournament,
                            format: match.format,
                            date: match.date,
                            time: match.time,
                            venue: match.venue,
                            teams: match.teams,
                            status: match.matchStatus,
                            timeToStart: match.timeToStart
                        }}
                    />
                ))}
            </Container>
        </div>
    )
}

export default page