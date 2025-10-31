export interface SectionProps {
	title: string;
	href: string;
	id: number;
}

export interface ICarouselButtons {
	handlePrevSlide: () => void;
	handleNextSlide: () => void;
}
