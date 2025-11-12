import axios from "axios";

export const sportbexClient = axios.create({
  baseURL: "/api/cricbex",
  headers: {
    "sb-live-score-api-key": process.env.NEXT_PUBLIC_SPORTBEX_API_KEY,
  },
});
