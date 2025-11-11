import axios from "axios";

export const sportbexClient = axios.create({
  baseURL: "http://94.136.188.185:5001/api/cricbex",
  headers: {
    "sb-live-score-api-key": process.env.NEXT_PUBLIC_SPORTBEX_API_KEY,
  },
});
