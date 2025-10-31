import { Dashboard } from "views";

export default Dashboard;

export async function getServerSideProps() {
	try {
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
