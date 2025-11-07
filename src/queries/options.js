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
