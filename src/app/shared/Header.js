import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { Logo, UserCircle } from './Icon'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const Header = () => {

    const menu = [
        {
            link: "/live",
            label: "Live"
        },
        {
            link: "/series",
            label: "Series"
        },
        {
            link: "/matches",
            label: "Matches"
        },
        {
            link: "/players",
            label: "Players"
        },
        {
            link: "/ranking",
            label: "Ranking"
        },
        {
            link: "/api",
            label: "API"
        },
    ]
    return (
        <header className='bg-[radial-gradient(67.11%_50%_at_50%_50%,var(--primary)_0%,var(--primary-800)_100%)] py-5'>
            <Container>
                <div className='flex items-center justify-between'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <nav>
                        <ul className='text-white flex items-center gap-8 px-4'>
                            {
                                menu.map((data, i) => {
                                    return (
                                        <li key={i}><Link href={data?.link} className="block relative after:content-[''] after:w-full after:absolute overflow-hidden after:duration-300  after:h-px after:bg-white after:bottom-0 after:-left-full hover:after:left-0">{data?.label}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <DropdownMenu>
                        <DropdownMenuTrigger><UserCircle /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Log Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </Container>
        </header>
    )
}

export default Header