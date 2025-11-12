"use client";

import CricketAPI from "@/app/assets/image/png/api-bg.jpg";
import Blog1 from "@/app/assets/image/png/blog-1.png";
import Blog2 from "@/app/assets/image/png/blog-2.png";
import Blog3 from "@/app/assets/image/png/blog-3.png";
import News1 from "@/app/assets/image/png/news-1.png";
import News2 from "@/app/assets/image/png/news-2.png";
import { ICCRankings } from "@/components/icc-rankings";
import { RecentMatches } from "@/components/recent-matches";
import { RecentResults } from "@/components/recent-results";
import { RecentTrendingPlayers } from "@/components/recent-trending-players";
import { Button } from "@/components/ui/button";
import { UpcomingMatchesCard } from "@/components/upcoming-matches-card";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Container from "./shared/Container";
import { Ball, Cup, UpRightArrow, Users } from "./shared/Icon";
import NewsCard from "./shared/NewsCard";
import { UpcomingSeries } from "@/components/upcoming-series";
import SwiperSlider from "./shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";

const BlogCard = ({ data }) => {
  return (
    <div className="pb-6 mb-6 last-of-type:pb-0 last-of-type:mb-0">
      <p className="uppercase text-dark-gray-500 mb-3 text-xs leading-3.5">
        {data.label}
      </p>
      <Image
        src={data.image}
        alt="blog 1"
        className="max-h-[230px] w-full rounded-sm object-cover"
      />
      <Link
        href="/"
        className="font-bold lg:text-2xl sm:text-xl lg:leading-7 leading-6 lg:mt-6 mt-3 block"
      >
        {data.title}
      </Link>
      <p className="text-dark-gray-500 text-sm leading-normal mt-2">
        {data.desc}
      </p>
      {
        data?.linkTitle &&
        <Link
          href={data?.link}
          className="text-sm leading-normal font-bold text-info mt-6 block"
        >
          {data?.linkTitle}
        </Link>
      }
    </div>
  )
}

export default function Home() {
  const newsData = [
    {
      image: News1,
      title: "August 2025 - News Digest",
      description: "News bytes that you may have missed otherwise",
    },
    {
      image: News2, // Use different image for different cards
      title: "Where faith met fearlessness: The Abhishek Sharma story",
      description:
        "Behind the sixes and strike-rates lies a boy from Amritsar, shaped by devotion and a belief that every ball is meant to be hit",
    },
  ];

  const blog = [
    {
      label: "SQUAD ANNOUNCEMENT",
      image: Blog1,
      title: "Nitish Reddy, Devdutt Padikkal return for West Indies Tests",
      desc: "Ravindra Jadeja named vice-captain; No place for Karun Nair or Abhimanyu Easwaran",
    },
    {
      label: "ASIA CUP 2025",
      image: Blog2,
      title: "Pakistan sneak narrow win to set finals date with India",
      desc: "In a low-scoring affair, Pakistan managed to cover up their poor batting effort with a good bowling performance",
    },
    {
      label: "CAPTAINCY SHUFFLE",
      image: Blog3,
      title:
        "Iyer to lead India 'A' in one-dayers with Patidar handed Irani Cup reins",
      desc: "Abhishek Sharma, Arshdeep Singh and Tilak Varma will join for the second and third one-dayers against Australia A",
      linkTitle: "Shreyas Iyer requests break from red-ball cricket",
      link: "/",
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between mt-2">
          <h5 className="text-lg leading-[27px] font-semibold text-dark-gray">
            Recent Matches
          </h5>
          <Button variant="link" className="">
            View All Matches
          </Button>
        </div>
        <div className="-mx-2.5 -mb-2.5 sm:mt-4 mt-2">
          <RecentMatches />
        </div>

        <div className="flex items-center gap-4 mt-5">
          <p className="max-sm:hidden">Quick Access</p>
          <div className="flex items-center md:gap-4 gap-2 overflow-x-auto">
            <Button variant="outline" className="rounded-full py-[11px] px-4">
              <Cup />
              Asia Cup
            </Button>
            <Button variant="outline" className="rounded-full py-[11px] px-4">
              <Users />
              Team India
            </Button>
            <Button variant="outline" className="rounded-full py-[11px] px-4">
              <Ball />
              Browse Series
            </Button>
            <Button variant="outline" className="rounded-full py-[11px] px-4">
              <Cup />
              T20 World Cup
            </Button>
          </div>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            1200: 3,
          }}
        >
          <Masonry className="mt-4 gap-6! [&>*>div]:mb-6 *:gap-0!">
            <UpcomingMatchesCard />

            <ICCRankings />
            <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[525px] w-full">
              AD
            </div>
            <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[525px] w-full">
              AD
            </div>
            <div className="relative rounded-2xl overflow-hidden h-fit w-full">
              <Image
                src={CricketAPI}
                className="h-[278px] object-cover"
                alt="cricket api bg"
              />
              <span className="absolute bg-[linear-gradient(180deg,rgba(239,18,7,0)_0%,var(--orange)_86.69%)] block h-full w-full z-1 top-0 left-0"></span>
              <div className="absolute z-2 top-0 left-0 w-full h-full flex flex-col items-center justify-center pt-9 lg:px-14 sm:px-10 px-6">
                <h4 className="text-white text-center sm:text-[40px] text-3xl sm:leading-[47px] leading-9">
                  Get Your <span className="font-bold">Cricket API</span> Today
                </h4>
                <Button variant="secondary" className="rounded-full w-fit mt-4">
                  <UpRightArrow />
                </Button>
              </div>
            </div>

            <RecentTrendingPlayers />
            <UpcomingSeries />

            <RecentResults />

            <div className="md:p-6">
              <h6 className="text-primary  uppercase font-bold text-base leading-normal mb-4">
                Latest News
              </h6>
              <div className="space-y-6">
                {newsData.map((news, i) => (
                  <NewsCard
                    key={i}
                    image={news.image}
                    title={news.title}
                    description={news.description}
                    link={news.link}
                  />
                ))}
              </div>
            </div>
            <div className="md:p-4 w-full">
              <div className="md:hidden">
                <SwiperSlider
                  className="w-full"
                  spaceBetween={16}
                  breakpoints={{
                    0: { slidesPerView: 1.25 },
                    575: { slidesPerView: 1.5 },
                  }}
                >
                  {
                    blog.map((data, i) => (
                      <SwiperSlide key={i}>
                        <BlogCard data={data} />
                      </SwiperSlide>
                    ))
                  }
                </SwiperSlider>
              </div>
              <div className="max-md:hidden md:divide-y divide-black/10">
                {
                  blog.map((data, i) => (
                    <BlogCard data={data} key={i} />
                  ))
                }
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
}
