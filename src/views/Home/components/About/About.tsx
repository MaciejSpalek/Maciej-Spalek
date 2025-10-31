import { CirclePhoto } from "components";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";
import {
	Container,
	Heading,
	LeftWrapper,
	Paragraph,
	RightWrapper,
} from "./About.styled";

export const About = () => {
	const { aboutSectionContainerRef, about } = useHomeContextProvider();

	return (
		<Container ref={aboutSectionContainerRef}>
			<LeftWrapper>
				<Heading>About me</Heading>
				<CirclePhoto width={233} />
			</LeftWrapper>
			<RightWrapper>
				<Paragraph>{about.description}</Paragraph>
			</RightWrapper>
		</Container>
	);
};
