import axios from "axios";

export const axiosHttpClient = axios.create({
  baseURL: process.env.PRIVATE_API_URL,
  headers: {
    "x-private-api-secret": process.env.PRIVATE_API_KEY,
  },
});
