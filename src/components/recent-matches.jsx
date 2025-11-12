"use client";

import MatchCard from "@/app/shared/MatchCard";

import { recentMatchesQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";

export const RecentMatches = () => {
  const { data: recentMatches, isLoading } = useQuery({
    ...recentMatchesQueryOptions,
    refetchInterval: 10 * 1000, // refetch every 10 seconds
  });

  if (isLoading) {
    return (
      <SwiperSlider
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.25 },
          575: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.25 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {new Array(4).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <Skeleton className="h-[183px] w-full rounded-2xl" />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    );
  }

  return (
    <>
      <SwiperSlider
        className="w-full"
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1.25 },
          575: { slidesPerView: 1.5 },
          575: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.25 },
          1280: { slidesPerView: 4 },
        }}
      >
        {recentMatches.map((match, i) => (
          <SwiperSlide>
            <MatchCard key={i} data={match} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </>
  );
};
