import axios from "axios";

export const sportbexClient = axios.create({
  baseURL: "https://trial-api.sportbex.com/api",
  headers: {
    "sportbex-api-key": process.env.NEXT_PUBLIC_SPORTBEX_API_KEY,
  },
});
