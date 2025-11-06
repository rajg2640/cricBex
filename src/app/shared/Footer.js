import Link from 'next/link'
import React from 'react'
import { Logo } from './Icon'
import Container from './Container'

const Footer = () => {
    const footerLinks = [
        {
            title: "MOBILE SITE & APPS",
            links: [
                { name: "sportbex.com", url: "/" },
                { name: "Android", url: "/" },
                { name: "iOS", url: "/" },
            ],
        },
        {
            title: "FOLLOW US ON",
            links: [
                { name: "facebook", url: "/" },
                { name: "twitter", url: "/" },
                { name: "youtube", url: "/" },
                { name: "Pinterest", url: "/" },
            ],
        },
        {
            title: "COMPANY",
            links: [
                { name: "Careers", url: "/" },
                { name: "Advertise", url: "/" },
                { name: "About Us", url: "/" },
                { name: "Privacy Notice - For Subscribers", url: "/" },
                { name: "Terms of Service - For Subscribers", url: "/" },
                { name: "Privacy Notice - For Non-Subscribers", url: "/" },
                { name: "Terms of Service - For Non-Subscribers", url: "/" },
                { name: "Your Privacy Choices", url: "/" },
                { name: "Video Viewing Policy", url: "/" },
                { name: "Cookie/SDK Policy", url: "/" },
            ],
        },
    ];

    return (
        <footer className='pt-16 bg-dark-gray-600 text-white'>
            <Container>
                <div className='flex justify-between'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    {footerLinks.map((section, index) => (
                        <div key={index} className='max-w-[240px]'>
                            <h5 className='text-base leading-normal uppercase font-bold mb-2'>{section.title}</h5>
                            <ul className='space-y-4'>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className='text-sm leading-notmal hover:text-primary-400 duration-200 cursor-pointer'>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className='pt-[52px] pb-8 text-center text-light-gray-200 text-xs leading-normal'>© 2025 companyname.com, Company Name Platforms Limited. All rights reserved</p>
            </Container>
        </footer>
    )
}

export default Footer