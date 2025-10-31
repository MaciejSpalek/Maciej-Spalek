import { URLS } from "helpers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useArticlesListQuery } from "queries";

import {
	ArticlesContainer,
	ArticleThumbnail,
	Container,
	Heading,
	ImageWrapper,
	ThumbnailHeading,
} from "./Articles.styled";

export const Articles = () => {
	const { data: articles } = useArticlesListQuery({ filters: {} });
	const router = useRouter();

	const goToArticle = ({ id }: { id: string }) => {
		router.push(URLS.article({ id }));
	};

	if (!articles?.length) {
		return null;
	}

	return (
		<Container>
			<Heading>Articles</Heading>
			<ArticlesContainer>
				{articles?.map((article) => (
					<ArticleThumbnail key={article._id}>
						<ImageWrapper onClick={() => goToArticle({ id: article._id })}>
							<Image
								src={article.image}
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								alt="image"
								loading="eager"
								priority
							/>
						</ImageWrapper>
						<ThumbnailHeading>{article.title || "dupa"}</ThumbnailHeading>
					</ArticleThumbnail>
				))}
			</ArticlesContainer>
		</Container>
	);
};
