import Image from "next/image";
import type { IArticleCommonBlockType } from "types";
import { Container, Heading, ImageWrapper, Paragraph } from "./Common.styled";

interface CommonProps {
	data: IArticleCommonBlockType;
}

export const Common = ({ data }: CommonProps) => {
	const { image, description, title } = data;

	return (
		<Container>
			<Heading>{title}</Heading>
			<Paragraph>{description}</Paragraph>
			<ImageWrapper>
				<Image
					src={image}
					objectFit="contain"
					layout="fill"
					alt={title}
					loading="eager"
				/>
			</ImageWrapper>
		</Container>
	);
};
