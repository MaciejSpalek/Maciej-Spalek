import type { GetServerSidePropsContext } from "next";
import { Dashboard } from "views";
import { URLS } from "../../helpers";
import { COOKIES } from "../../helpers/cookies";

export default Dashboard;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const token = context.req.cookies[COOKIES.MS_AUTH_TOKEN];

		if (!token) {
			return {
				redirect: {
					destination: URLS.admin.login,
					permanent: false,
				},
			};
		}

		const verifyUserResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/verifyUser`,
			{ headers: { Authorization: `Bearer ${token}` } },
		);

		if (!verifyUserResponse.ok) {
			return {
				redirect: {
					destination: URLS.admin.login,
					permanent: false,
				},
			};
		}

		const homeResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/home/get`,
		);

		const craftsResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/craft/get-all`,
		);

		if (!homeResponse.ok) {
			console.error(`Nieudane zapytanie. Status: ${homeResponse.status}`);
			return {
				notFound: true,
			};
		}

		const crafts = await craftsResponse.json();
		const home = await homeResponse.json();

		return {
			props: {
				home: home?.[0]?.home || null,
				crafts,
			},
		};
	} catch (error) {
		console.error("Błąd podczas pobierania danych:", error);
		return {
			props: {
				home: null,
				crafts: [],
			},
		};
	}
}
