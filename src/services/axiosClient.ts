import axios from "axios";

let headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const axiosInstance = axios.create({
  baseURL: "https://spwrtt.usermd.net/api",
  headers,
});

