import type { IArticleHintBlockType } from "types";
import { Container, Heading, Paragraph } from "./Hint.styled";

interface HintProps {
	data: IArticleHintBlockType;
}

export const Hint = ({ data }: HintProps) => {
	const { description } = data;

	return (
		<Container>
			<Heading>Hint</Heading>
			<Paragraph>{description}</Paragraph>
		</Container>
	);
};
