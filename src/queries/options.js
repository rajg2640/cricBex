import { sportbexClient } from "@/services/sportbex";
import { queryOptions } from "@tanstack/react-query";

export const recentMatchesQueryOptions = queryOptions({
  queryKey: ["recent-matches"],
  queryFn: async () => {
    const response = await sportbexClient.get("/match/recent");
    return response.data;
  },
  select: (data) =>
    data?.data
      ?.sort((a, b) => {
        // First sort by status - LIVE matches come first
        if (a.status === "LIVE" && b.status !== "LIVE") return -1;
        if (a.status !== "LIVE" && b.status === "LIVE") return 1;

        // Then sort by startDate (newest first)
        return new Date(a.startDate) - new Date(b.startDate);
      })
      .slice(0, 4),
});

export const upcomingMatchesQueryOptions = queryOptions({
  queryKey: ["upcoming-matches"],
  queryFn: async () => {
    const response = await sportbexClient.get("/match/upcoming");
    return response.data;
  },
  select: (data) => data?.data?.slice(0, 2),
});

export const playerRankingsQueryOptions = queryOptions({
  queryKey: ["player-rankings"],
  queryFn: async ({ queryKey }) => {
    const [_, { format, type }] = queryKey;

    const response = await sportbexClient.get(
      `/rank/player?gender=MALE&matchType=${format}&type=${type}`
    );
    return response.data;
  },
  select: (data) => data?.data,
});

export const teamRankingsQueryOptions = queryOptions({
  queryKey: ["team-rankings"],
  queryFn: async ({ queryKey }) => {
    const [_, { format }] = queryKey;

    const response = await sportbexClient.get(
      `/rank?gender=MALE&matchType=${format}`
    );
    return response.data;
  },
  select: (data) => data?.data,
});

export const upcomingSeriesQueryOptions = queryOptions({
  queryKey: ["upcoming-series"],
  queryFn: async () => {
    const response = await sportbexClient.get("/series/upcoming");
    return response.data;
  },
  select: (data) => data?.data?.slice(0, 2),
});
