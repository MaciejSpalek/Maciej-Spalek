import { Button, PostList, ZoomImage } from "components";
import { useRouter } from "next/router";
import { LeftRectangleArrowIcon } from "../../assets";
import type { PostProps } from "./Post.model";
import {
	ButtonWrapper,
	Container,
	DescriptionWrapper,
	Heading,
	Paragraph,
	SimilarPaintingsText,
	SimilarPaintingsWrapper,
	TopContainer,
	Wrapper,
} from "./Post.styled";

export const Post = ({ data, posts }: PostProps) => {
	const { description, image, _id } = data || {};
	const [title, size, technique] = description?.split(",") || [];
	const router = useRouter();

	const filteredPosts = posts.filter((post) => post._id !== _id);

	return (
		<TopContainer>
			<Container>
				<ZoomImage src={image} />
				<Wrapper>
					<DescriptionWrapper>
						{title && <Heading>{title}</Heading>}
						<Paragraph>
							{size}, {technique}
						</Paragraph>
					</DescriptionWrapper>
					<ButtonWrapper>
						<Button
							outline
							icon={LeftRectangleArrowIcon}
							onClick={() => router.back()}
						>
							WRÓĆ
						</Button>
					</ButtonWrapper>
				</Wrapper>
			</Container>
			{!!filteredPosts.length && (
				<SimilarPaintingsWrapper>
					<SimilarPaintingsText>POZOSTAŁE OBRAZY</SimilarPaintingsText>
					<PostList
						postsAmount={9}
						initialList={filteredPosts}
						type="painting"
						hideDescription
						isPreview={false}
					/>
				</SimilarPaintingsWrapper>
			)}
		</TopContainer>
	);
};
