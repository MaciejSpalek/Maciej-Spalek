import axios from "axios";

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Content-Type": "application/json",
	Accept: "application/json",
};

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers,
});
