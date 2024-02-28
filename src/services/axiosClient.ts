import axios from "axios";

let headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
};

// const API_DEV = "https://spwrtt.usermd.net/api";
export const API_LOCAL = "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: API_LOCAL,
  headers,
});

