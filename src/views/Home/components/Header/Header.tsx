import { SpecialButton } from "components";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";
import {
	Container,
	Heading,
	ImageWrapper,
	Paragraph,
	StyledImage,
} from "./Header.styled";
import { useHeader } from "./useHeader";

export const Header = () => {
	const { handleOnClick } = useHeader();

	const { header } = useHomeContextProvider();

	const {
		first_photo: firstPhoto,
		description,
	} = header;

	return (
		<Container>
			<Heading>Maciej Spałek</Heading>
			<Paragraph>{description}</Paragraph>
			<SpecialButton onClick={handleOnClick}>KONTAKT</SpecialButton>
			<ImageWrapper>
				<StyledImage
					src={firstPhoto}
					alt="Zdjęcie w windzie"
					layout="fill"
					objectFit="cover"
					priority={true}
					loading="eager"
					sizes="(min-width: 1340px) 588px, calc(46.08vw - 20px)"
				/>
			</ImageWrapper>
		</Container>
	);
};
