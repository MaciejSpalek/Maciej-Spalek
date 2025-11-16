import axios from "axios";
import { COOKIES, getCookie } from "../helpers/cookies";

const getHeaders = ({ token }: { token: string | null }) => ({
	"Access-Control-Allow-Origin": "*",
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization: token ? `Bearer ${token}` : "",
});

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: getHeaders({ token: getCookie(COOKIES.MS_AUTH_TOKEN) }),
});
