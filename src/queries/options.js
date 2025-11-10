import { sportbexClient } from "@/services/sportbex";
import { queryOptions } from "@tanstack/react-query";

export const liveMatchesQueryOptions = queryOptions({
  queryKey: ["live-matches"],
  queryFn: async () => {
    const response = await sportbexClient.get("/live-score/match/live");
    return response.data;
  },
  select: (data) => {
    return data.data
      ?.filter((match) => match.status !== "NOT_STARTED")
      ?.slice(0, 4);
  },
});

export const playerRankingsQueryOptions = queryOptions({
  queryKey: ["player-rankings"],
  queryFn: async ({ queryKey }) => {
    const [_, { format, type }] = queryKey;

    const response = await sportbexClient.get(
      `/live-score/rank/player?gender=MALE&matchType=${format}&type=${type}`
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
      `/live-score/rank?gender=MALE&matchType=${format}`
    );
    return response.data;
  },
  select: (data) => data?.data,
});
