import { Button, PostList } from "components";
import { URLS } from "helpers";
import { useRouter } from "next/router";
import type { ILastPaintingsProps } from "./LastPaintings.model";
import { Container, Heading, HeadingWrapper } from "./LastPaintings.styled";

export const LastPaintings = ({ posts }: ILastPaintingsProps) => {
	const limitedPosts = posts.slice(0, 3);
	const router = useRouter();

	const goToPaintings = () => {
		router.push(URLS.paintings);
	};
	return (
		<Container>
			<HeadingWrapper>
				<Heading>Last paintings</Heading>
				<Button outline onClick={goToPaintings}>
					MORE
				</Button>
			</HeadingWrapper>
			<PostList
				postsAmount={6}
				initialList={limitedPosts}
				type="painting"
				hideDescription
			/>
		</Container>
	);
};
