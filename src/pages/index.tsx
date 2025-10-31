import { Home } from "views";
import { PostTypes } from "../types";

export default Home;

export async function getServerSideProps() {
	try {
		const homeResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/home/get`,
		);
		const craftsResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/craft/get-all`,
		);

		const postsResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/post/list?type=${PostTypes.painting}&limit=3`,
		);

		if (!homeResponse.ok || !postsResponse.ok || !craftsResponse.ok) {
			return {
				notFound: true,
			};
		}

		const homeData = await homeResponse.json();
		const craftsData = await craftsResponse.json();
		const postsData = await postsResponse.json();

		return {
			props: {
				data: { home: homeData[0].home, crafts: craftsData, posts: postsData },
			},
		};
	} catch {
		return {
			props: {
				data: null,
			},
		};
	}
}
