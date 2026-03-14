import { Button, PostList } from "components";
import { URLS } from "helpers";
import { useRouter } from "next/router";
import type { ILastPaintingsProps } from "./LastPaintings.model";
import { Container, Heading, HeadingWrapper } from "./LastPaintings.styled";

export const LastPaintings = ({ posts }: ILastPaintingsProps) => {
	const router = useRouter();

	const goToPaintings = () => {
		router.push(URLS.paintings);
	};

	return (
		<Container>
			<HeadingWrapper>
				<Heading>Najnowsze obrazy</Heading>
				<Button outline onClick={goToPaintings}>
					WIĘCEJ
				</Button>
			</HeadingWrapper>
			<PostList
				postsAmount={6}
				initialList={posts}
				type="painting"
				hideDescription
				isPreview={false}
			/>
		</Container>
	);
};
