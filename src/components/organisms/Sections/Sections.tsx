import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { CarouselButtons, Section } from "./components";
import type { ISections } from "./Sections.model";
import {
	CarouselBar,
	CarouselContainer,
	CarouselHeading,
	Container,
	DotsContainer,
	Heading,
	List,
} from "./Sections.styled";
import { useSections } from "./useSections";

export const Sections = ({ sections = [] }: ISections) => {
	const {
		handlePrevSlide,
		handleNextSlide,
		setCurrentIndex,
		carouselSlides,
		currentIndex,
		isMobileView,
		carouselRef,
		dots,
		sectionsCarouselContainerRef,
		sectionsCarouselBarRef,
		sectionsContainerRef,
		sectionsHeadingRef,
		sectionsListRef,
	} = useSections(sections);

	return (
		<Container ref={sectionsContainerRef}>
			<Heading ref={sectionsHeadingRef}>what i’m doing</Heading>
			<List ref={sectionsListRef}>
				{sections.map(({ _id, href, title }) => (
					<li key={_id}>
						<Section href={href} title={title} />
					</li>
				))}
			</List>
			<CarouselBar ref={sectionsCarouselBarRef}>
				<CarouselHeading>my crafts</CarouselHeading>
				{!isMobileView && (
					<CarouselButtons
						handlePrevSlide={handlePrevSlide}
						handleNextSlide={handleNextSlide}
					/>
				)}
			</CarouselBar>
			<CarouselContainer ref={sectionsCarouselContainerRef}>
				{isMobileView && (
					<CarouselButtons
						handlePrevSlide={handlePrevSlide}
						handleNextSlide={handleNextSlide}
					/>
				)}
				<AliceCarousel
					items={carouselSlides}
					ref={carouselRef}
					activeIndex={currentIndex}
					onSlideChanged={({ item }) => setCurrentIndex(item)}
					disableButtonsControls
					disableDotsControls
					animationType="fadeout"
					animationDuration={1000}
					infinite
				/>
				<DotsContainer>{dots}</DotsContainer>
			</CarouselContainer>
		</Container>
	);
};
