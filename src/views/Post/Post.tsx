import { Button, PostList } from "components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { LeftRectangleArrowIcon } from "../../assets";
import { useIsMobileView } from "../../hooks";
import type { PostProps } from "./Post.model";
import {
	ButtonWrapper,
	Container,
	DescriptionWrapper,
	Heading,
	ImageContainer,
	Paragraph,
	SimilarPaintingsText,
	SimilarPaintingsWrapper,
	TopContainer,
	Wrapper,
} from "./Post.styled";

export const Post = ({ data, posts }: PostProps) => {
	const { description, image, _id } = data || {};
	const [title, size, technique] = description?.split(",") || [];
	const [ratio, setRatio] = useState(1);
	const router = useRouter();

	const isMobileView = useIsMobileView();

	const filteredPosts = posts.filter((post) => post._id !== _id);

	return (
		<TopContainer>
			<Container>
				<ImageContainer ratio={ratio}>
					<Image
						src={image}
						layout="fill"
						objectFit="contain"
						objectPosition={isMobileView ? "center" : "left"}
						alt={title || "Artwork image"}
						onLoadingComplete={({ naturalWidth, naturalHeight }) =>
							setRatio(naturalWidth / naturalHeight)
						}
						priority
					/>
				</ImageContainer>

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
							Back
						</Button>
					</ButtonWrapper>
				</Wrapper>
			</Container>
			<SimilarPaintingsWrapper>
				<SimilarPaintingsText>Similar paintings</SimilarPaintingsText>
				<PostList
					postsAmount={9}
					initialList={filteredPosts}
					type="painting"
					hideDescription
					isPreview={false}
				/>
			</SimilarPaintingsWrapper>
		</TopContainer>
	);
};
