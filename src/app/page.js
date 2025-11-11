"use client";

import CricketAPI from "@/app/assets/image/png/api-bg.jpg";
import Australia from "@/app/assets/image/png/australia.png";
import Blog1 from "@/app/assets/image/png/blog-1.png";
import Blog2 from "@/app/assets/image/png/blog-2.png";
import Blog3 from "@/app/assets/image/png/blog-3.png";
import England from "@/app/assets/image/png/england.png";
import India from "@/app/assets/image/png/india.png";
import News1 from "@/app/assets/image/png/news-1.png";
import News2 from "@/app/assets/image/png/news-2.png";
import Pakistan from "@/app/assets/image/png/pakistan.png";
import { ICCRankings } from "@/components/icc-rankings";
import { RecentMatches } from "@/components/recent-matches";
import { RecentResults } from "@/components/recent-results";
import { RecentTrendingPlayers } from "@/components/recent-trending-players";
import { Button } from "@/components/ui/button";
import { UpcomingMatch } from "@/components/upcoming-match";
import { UpcomingMatchesCard } from "@/components/upcoming-matches-card";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Container from "./shared/Container";
import { Ball, Cup, UpRightArrow, Users } from "./shared/Icon";
import NewsCard from "./shared/NewsCard";

export default function Home() {
  const upcomingSeries = [
    {
      time: "Starts from Tomorrow • 2:30 PM",
      format: "T20I",
      firstTeam: "India",
      firstTeamFlag: India,
      secondTeam: "Pakistan",
      secondTeamFlag: Pakistan,
      matchDetail: "3 Matches T20I Series",
      venue: "United Arab Emirates",
    },
    {
      time: "Starts from Oct 2 • 9:30 AM",
      format: "ODI",
      firstTeam: "Australia",
      firstTeamFlag: Australia,
      secondTeam: "england",
      secondTeamFlag: England,
      matchDetail: "5 Matches ODI Series",
      venue: "Australia",
    },
  ];

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
        <div className="grid grid-cols-4 gap-4 mt-4">
          <RecentMatches />
        </div>

        <div className="flex items-center gap-4 mt-8">
          <p>Quick Access</p>
          <div className="flex items-center gap-4">
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
              <div className="absolute z-2 top-0 left-0 w-full h-full flex flex-col items-center pt-9 px-14">
                <h4 className="text-white text-center text-[40px] leading-[47px]">
                  Get Your <span className="font-bold">Cricket API</span> Today
                </h4>
                <Button variant="secondary" className="rounded-full w-fit mt-4">
                  <UpRightArrow />
                </Button>
              </div>
            </div>
            <RecentTrendingPlayers />
            <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
              <div className="flex items-center justify-between p-6 pb-4 border-b border-black/10">
                <h5 className="text-primary font-bold leading-[21px]">
                  Upcoming Series
                </h5>
                <Button variant="link" className="text-right">
                  Full Schedule
                </Button>
              </div>
              {upcomingSeries.map((match, i) => (
                <UpcomingMatch key={i} match={match} />
              ))}
            </div>

            <RecentResults />

            <div className="p-6">
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
            <div className="p-4 divide-y divide-black/10">
              <div className="py-6 first-of-type:pt-0 last-of-type:pb-0">
                <p className="uppercase text-dark-gray-500 mb-3 text-xs leading-3.5">
                  SQUAD ANNOUNCEMENT
                </p>
                <Image
                  src={Blog1}
                  alt="blog 1"
                  className="max-h-[230px] rounded-sm object-cover"
                />
                <Link
                  href="/"
                  className="font-bold text-2xl leading-7 mt-6 block"
                >
                  Nitish Reddy, Devdutt Padikkal return for West Indies Tests
                </Link>
                <p className="text-dark-gray-500 text-sm leading-normal mt-2">
                  Ravindra Jadeja named vice-captain; No place for Karun Nair or
                  Abhimanyu Easwaran
                </p>
              </div>
              <div className="py-6 first-of-type:pt-0 last-of-type:pb-0">
                <p className="uppercase text-dark-gray-500 mb-3 text-xs leading-3.5">
                  ASIA CUP 2025
                </p>
                <Image
                  src={Blog2}
                  alt="blog 2"
                  className="max-h-[230px] rounded-sm object-cover"
                />
                <Link
                  href="/"
                  className="font-bold text-2xl leading-7 mt-6 block"
                >
                  Pakistan sneak narrow win to set finals date with India
                </Link>
                <p className="text-dark-gray-500 text-sm leading-normal mt-2">
                  In a low-scoring affair, Pakistan managed to cover up their
                  poor batting effort with a good bowling performance
                </p>
              </div>
              <div className="py-6 first-of-type:pt-0 last-of-type:pb-0">
                <p className="uppercase text-dark-gray-500 mb-3 text-xs leading-3.5">
                  CAPTAINCY SHUFFLE
                </p>
                <Image
                  src={Blog3}
                  alt="blog 3"
                  className="max-h-[230px] rounded-sm object-cover"
                />
                <Link
                  href="/"
                  className="font-bold text-2xl leading-7 mt-6 block"
                >
                  Iyer to lead India 'A' in one-dayers with Patidar handed Irani
                  Cup reins
                </Link>
                <p className="text-dark-gray-500 text-sm leading-normal mt-2">
                  Abhishek Sharma, Arshdeep Singh and Tilak Varma will join for
                  the second and third one-dayers against Australia A
                </p>
                <Link
                  href="/"
                  className="text-sm leading-normal font-bold text-info mt-6 block"
                >
                  Shreyas Iyer requests break from red-ball cricket
                </Link>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
}
