import React from 'react'
import Container from '../shared/Container'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'
import Link from 'next/link'
import { TabsContent } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowDown, ArrowUp } from 'lucide-react'

const page = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Points Table" },
    ]
    const rankings = [
        { rank: { value: 1, status: '-' }, team: "India", points: 8, win: 7, lose: 1, tie: 0, nr: 0, pts: 14, nrr: { value: 1.456, status: 'positive' }, forms: ['W', 'W', 'W', 'L', 'W'] },
        { rank: { value: 2, status: 'up' }, team: "Australia", points: 8, win: 6, lose: 2, tie: 0, nr: 0, pts: 12, nrr: { value: 0.892, status: 'positive' }, forms: ['W', 'W', 'L', 'W', 'W'] },
        { rank: { value: 3, status: 'down' }, team: "England", points: 8, win: 5, lose: 3, tie: 0, nr: 0, pts: 10, nrr: { value: 0.234, status: 'positive' }, forms: ['W', 'L', 'W', 'W', 'L'] },
        { rank: { value: 4, status: 'up' }, team: "Pakistan", points: 8, win: 4, lose: 4, tie: 0, nr: 0, pts: 8, nrr: { value: 0.145, status: 'negative' }, forms: ['L', 'W', 'L', 'W', 'W'] },
        { rank: { value: 5, status: 'down' }, team: "New Zealand", points: 8, win: 2, lose: 6, tie: 0, nr: 0, pts: 4, nrr: { value: 0.678, status: 'negative' }, forms: ['L', 'L', 'W', 'L', 'L'] },
        { rank: { value: 6, status: '-' }, team: "South Africa", points: 8, win: 0, lose: 8, tie: 0, nr: 0, pts: 0, nrr: { value: 1.892, status: 'negative' }, forms: ['L', 'L', 'L', 'L', 'L'] }
    ]
    return (
        <div>
            <Container>
                <div className='py-4'>
                    <div className='flex items-center'>
                        <div>
                            <CustomBreadcrumb items={breadcrumbItems} />
                            <h2 className='text-[32px] font-medium text-dark-gray'>Asia Cup 2025</h2>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg overflow-auto border border-black/10 mb-10'>
                    <div className='p-4 bg-linear-to-r from-light-gray-500 to-white'>
                        <h2 className="text-xl text-black-100 font-bold">Asia Cup 2025 - Points Table</h2>
                        <p className='text-xs text-black-300'>ODI Format</p>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow className='border-0!'>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>Pos</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>Team</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>P</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>W</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>L</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>T</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>NR</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>PTS</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>NRR</TableHead>
                                <TableHead className='border-t border-light-gray-400 bg-light-gray-500 p-3 uppercase text-xs text-black-300'>Form</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="[&_td]:p-3 [&_tr]:border-0 text-sm leading-4">
                            {rankings.map((team) => (
                                <TableRow key={team.rank} className="border-b last:border-0">
                                    <TableCell className={`border-b p-4 font-medium text-gray-700 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>
                                        <span className={`w-5 text-center flex items-center gap-1 ${team.rank.value <= 4 ? 'text-success-200' : ''}`}>{team.rank.value} {team.rank.status === 'up' ? <ArrowUp className='w-3 h-3 text-success-200 flex-none' /> : team.rank.status === 'down' ? <ArrowDown className='w-3 h-3 flex-none text-primary' /> : <span className='w-3 flex-none'>-</span>}</span>
                                    </TableCell>
                                    <TableCell className={`border-b p-4 text-gray-800 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.team}</TableCell>
                                    <TableCell className={`border-b p-4 text-gray-600 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.points}</TableCell>
                                    <TableCell className={`border-b p-4 font-semibold text-success-200 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.win}</TableCell>
                                    <TableCell className={`border-b p-4 text-primary ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.lose}</TableCell>
                                    <TableCell className={`border-b p-4 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.tie}</TableCell>
                                    <TableCell className={`border-b p-4 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.nr}</TableCell>
                                    <TableCell className={`border-b p-4 font-bold ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>{team.pts}</TableCell>
                                    <TableCell className={`border-b p-4 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>
                                        <span className={`text-primary flex items-center ${team.nrr.status === 'positive' ? 'text-success-200' : team.nrr.status === 'negative' ? 'text-primary' : ''}`}>
                                            {team.nrr.status === 'positive' ? '+' : team.nrr.status === 'negative' ? '-' : ''}{team.nrr.value}
                                        </span>
                                    </TableCell>
                                    <TableCell className={`border-b p-4 ${team.rank.value === 4 ? 'border-success-200 border-b-2' : 'border-light-gray-400'}`}>
                                        {
                                            team.forms.map((val) => (
                                                <span key={val} className={`inline-flex items-center w-6 h-6 mx-0.5 justify-center rounded-sm text-xs ${val === 'W' ? 'bg-success-200 text-white' : val === 'L' ? 'bg-primary text-white' : ''}`}>
                                                    {val}
                                                </span>
                                            ))
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={10} className='bg-light-gray-500 p-4 text-black-300 text-sm'>
                                    <div className='flex gap-3 font-normal'>
                                        <div className='flex items-center gap-1.5'>
                                            <span className='w-3 h-3 rounded bg-success-200'></span>
                                            <span>Qualification line</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <ArrowUp className='w-3 h-3 text-success-200 flex-none' />
                                            <span>Up</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <ArrowDown className='w-3 h-3 text-primary flex-none' />
                                            <span>Down</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <span>-</span>
                                            <span>No change</span>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default page