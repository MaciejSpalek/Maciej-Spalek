import Link from "next/link";
import type { SectionProps } from "./Section.model";
import { Container, Title } from "./Section.styled";

export const Section = ({ href, title }: SectionProps) => {
	return (
		<Link href={href}>
			<Container>
				<Title>{title}</Title>
			</Container>
		</Link>
	);
};
