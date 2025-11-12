'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import { API, ArrowUp, Ball, BatBall, Close, Dots, Hamburger, LiveMatch, Logo, Logout, Ranking, UserCircle } from './Icon'

const Header = () => {
    const [mainMenu, setMainMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
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
    const mobileMenu = [
        {
            link: "/live",
            icon: <LiveMatch />,
            label: "Live Matches"
        },
        {
            link: "/series",
            icon: <BatBall />,
            label: "Series"
        },
        {
            link: "/matches",
            icon: <Ball />,
            label: "Matches"
        },
        {
            link: "/ranking",
            icon: <Ranking />,
            label: "Ranking"
        },
        {
            link: "/api",
            icon: <API />,
            label: "API"
        },
        {
            link: "/",
            icon: <Dots />,
            label: "Others",
            children: [
                {
                    link: "/",
                    label: "Your Privacy Choices"
                },
                {
                    link: "/",
                    label: "Video Viewing Policy"
                },
                {
                    link: "/",
                    label: "Cookie/SDK Policy"
                },
            ]
        },
    ]
    const handleMainMenu = () => {
        setMainMenu(!mainMenu)
    }
    const handleSubMenu = () => {
        setSubMenu(!subMenu)
    }
    return (
        <header className='bg-[radial-gradient(67.11%_50%_at_50%_50%,var(--primary)_0%,var(--primary-800)_100%)] py-5'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className="lg:hidden" onClick={handleMainMenu}>
                        <Hamburger />
                    </div>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <nav className='max-lg:hidden'>
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
                    {mainMenu && <div className='bg-danger-100/80 fixed top-0 bottom-0 left-0 right-0 z-9' onClick={handleMainMenu} />}
                    <nav className={`lg:hidden fixed top-0 bottom-0 sm:w-80 w-64 bg-white z-10 transition-all ${mainMenu ? 'left-0' : 'sm:-left-80 -left-64'}`}>
                        <div className='flex justify-between bg-primary p-3 items-center text-white'>
                            <span>Menu</span>
                            <Close onClick={handleMainMenu} />
                        </div>
                        <ul className='gap-8 px-4 py-2'>
                            {
                                mobileMenu.map((data, i) => {
                                    return (
                                        <li key={i} onClick={data?.children ? handleSubMenu : handleMainMenu}>
                                            <Link href={data?.children ? '#' : data?.link} className="flex items-center relative py-2 font-medium">
                                                <span className='mr-2 [&_svg]:w-5 [&_svg]:h-5'>{data?.icon}</span>
                                                {data?.label}
                                                {data?.children && <ArrowUp className={`ml-auto ${subMenu ? '' : 'rotate-180'}`} />}
                                            </Link>
                                            {
                                                data?.children && subMenu &&
                                                <ul className='ml-7'>
                                                    {data?.children.map((item, i) => (
                                                        <li key={i} onClick={handleMainMenu}>
                                                            <Link href={item?.link} className="block py-1 relative text-sm">{item?.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        </li>
                                    )
                                })
                            }
                            <li className='mt-3'>
                                <span className='text-primary flex items-center gap-2'><Logout /> Logout</span>
                            </li>
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