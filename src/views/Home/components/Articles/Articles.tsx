import { Button } from "components";
import { URLS } from "helpers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useArticlesListQuery } from "queries";
import {
	ArticlesContainer,
	ArticleThumbnail,
	Container,
	Description,
	DescriptionWrapper,
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
			<Heading>Artykuły</Heading>
			<ArticlesContainer>
				{articles?.map((article) => (
					<ArticleThumbnail key={article._id}>
						<ImageWrapper>
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
						<DescriptionWrapper>
							<ThumbnailHeading>{article.title}</ThumbnailHeading>
							<Description>{article.description.slice(0, 100)}...</Description>
							<Button onClick={() => goToArticle({ id: article._id })} outline>
								CZYTAJ DALEJ...
							</Button>
						</DescriptionWrapper>
					</ArticleThumbnail>
				))}
			</ArticlesContainer>
		</Container>
	);
};
