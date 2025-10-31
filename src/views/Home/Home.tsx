import { Sections } from "components";
import type { IHome as IHomeData, IPost, ISection } from "types";
import { About, Articles, Header, LastPaintings } from "./components";
import { HomeContextProvider } from "./context/HomeContextProvider";
import { Container } from "./Home.styled";

interface IHome {
	data: {
		home: IHomeData;
		crafts: ISection[];
		posts: IPost[];
	};
}

export const Home = ({ data }: IHome) => {
	const { home, crafts, posts } = data || {};

	return (
		<HomeContextProvider home={home}>
			<Container>
				<Header />
				<LastPaintings posts={posts} />
				<About />
				<Articles />
				<Sections sections={crafts} />
			</Container>
		</HomeContextProvider>
	);
};
