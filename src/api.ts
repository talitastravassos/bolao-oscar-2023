import axios from "axios";

export const api = axios.create({
  baseURL: "https://oscar-2023-api.vercel.app/",
});
