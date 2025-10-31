import { LeftRectangleArrowIcon, RightRectangleArrowIcon } from "assets";
import type { ICarouselButtons } from "./CarouselButtons.model";
import { CarouselButtonsWrapper, IconButton } from "./CarouselButtons.styled";

export const CarouselButtons = ({
	handlePrevSlide,
	handleNextSlide,
}: ICarouselButtons) => {
	return (
		<CarouselButtonsWrapper>
			<IconButton aria-label="Show previous image" onClick={handlePrevSlide}>
				<LeftRectangleArrowIcon />
			</IconButton>
			<IconButton aria-label="Show next image" onClick={handleNextSlide}>
				<RightRectangleArrowIcon />
			</IconButton>
		</CarouselButtonsWrapper>
	);
};
