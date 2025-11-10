import { sportbexClient } from "@/services/sportbex";
import { queryOptions } from "@tanstack/react-query";

export const recentMatchesQueryOptions = queryOptions({
  queryKey: ["recent-matches"],
  queryFn: async () => {
    const response = await sportbexClient.get("/match/recent");
    return response.data;
  },
  select: (data) => data?.data?.slice(0, 4),
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
