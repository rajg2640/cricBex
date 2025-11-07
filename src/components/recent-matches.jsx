"use client";

import MatchCard from "@/app/shared/MatchCard";

import { liveMatchesQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

export const RecentMatches = () => {
  const { data: recentMatches, isLoading } = useQuery(liveMatchesQueryOptions);

  if (isLoading) {
    return new Array(4)
      .fill(0)
      .map((_, i) => (
        <Skeleton key={i} className="h-[183px] w-full rounded-[16px]" />
      ));
  }

  return recentMatches.map((match, i) => <MatchCard key={i} data={match} />);
};
