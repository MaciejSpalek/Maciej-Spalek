import { SecondHeaderPhoto } from "assets/images";
import Image from "next/image";
import { ImageWrapper } from "./CirclePhoto.styled";

interface ICirclePhoto {
	width: number;
}

export const CirclePhoto = ({ width }: ICirclePhoto) => (
	<ImageWrapper width={width}>
		<Image
			src={SecondHeaderPhoto}
			loading="eager"
			quality={100}
			alt="Maciej Spałek"
			priority
			layout="responsive"
			sizes="(min-width: 780px) 233px, (min-width: 560px) 500px, calc(90vw + 14px)"
		/>
	</ImageWrapper>
);
