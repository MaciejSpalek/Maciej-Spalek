import "react-alice-carousel/lib/alice-carousel.css";
import { gsap } from "gsap";
import { animationParams } from "helpers";
import { useIsMobileView } from "hooks";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import type AliceCarousel from "react-alice-carousel";
import type { ISection } from "../../../types";
import type { ISections } from "./Sections.model";
import { DotItem, ImageWrapper } from "./Sections.styled";

export const useSections = (sections: ISections["sections"]) => {
	const sectionsCarouselContainerRef = useRef(null);
	const sectionsCarouselBarRef = useRef(null);
	const sectionsContainerRef = useRef(null);
	const sectionsHeadingRef = useRef(null);
	const sectionsListRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const isMobileView = useIsMobileView();
	const carouselRef = useRef<AliceCarousel | null>(null);

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
		if (carouselRef.current) {
			carouselRef.current.slideTo(index);
		}
	};

	const dots = sections.map((section: ISection, index: number) => (
		<DotItem
			key={section.title}
			isActive={currentIndex === index}
			onClick={() => handleDotClick(index)}
		/>
	));

	const renderCarouselSlides = () =>
		sections.map(({ _id, image, title }) => (
			<ImageWrapper key={_id}>
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					alt={title}
				/>
			</ImageWrapper>
		));

	const carouselSlides = renderCarouselSlides();

	const handleNextSlide = () => {
		if (carouselRef.current) {
			if (currentIndex >= sections.length - 1) {
				setCurrentIndex(0);
				carouselRef.current.slidePrev();
			} else {
				setCurrentIndex((prevIndex) => prevIndex + 1);
				carouselRef.current.slideNext();
			}
		}
	};

	const handlePrevSlide = () => {
		if (carouselRef.current) {
			if (currentIndex <= 0) {
				setCurrentIndex(sections.length);
				carouselRef.current.slideNext();
			} else {
				setCurrentIndex((prevIndex) => prevIndex - 1);
				carouselRef.current.slidePrev();
			}
		}
	};

	// Sections
	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		if (!isMobileView) {
			const ctx = gsap.context(() => {
				gsap.fromTo(
					sectionsContainerRef.current,
					{
						y: "+=300",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: sectionsContainerRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					sectionsHeadingRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: sectionsHeadingRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					sectionsListRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: sectionsListRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					sectionsCarouselBarRef.current,
					{
						y: "+50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: sectionsCarouselBarRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					sectionsCarouselContainerRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: sectionsCarouselContainerRef.current,
							start: "top bottom",
						},
					},
				);
			});

			return () => ctx.revert();
		}
	}, [isMobileView]);

	return {
		handlePrevSlide,
		handleNextSlide,
		setCurrentIndex,
		carouselSlides,
		currentIndex,
		isMobileView,
		sectionsCarouselContainerRef,
		sectionsCarouselBarRef,
		sectionsContainerRef,
		sectionsHeadingRef,
		sectionsListRef,
		carouselRef,
		dots,
	};
};
