import { gsap } from "gsap";
import { animationParams } from "helpers";
import { useIsMobileView } from "hooks";
import { useLayoutEffect, useRef } from "react";

export const useFooter = () => {
	const isMobileView = useIsMobileView();
	const containerRef = useRef(null);
	const headingRef = useRef(null);
	const buttonRef = useRef(null);
	const secondWrapperRef = useRef(null);
	const copyrightWrapperRef = useRef(null);

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		if (!isMobileView) {
			const ctx = gsap.context(() => {
				gsap.fromTo(
					containerRef.current,
					{
						y: "+=300",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: containerRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					headingRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						delay: 0.25,
						scrollTrigger: {
							trigger: headingRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					buttonRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: buttonRef.current,
							start: "top bottom",
						},
					},
				);

				gsap.fromTo(
					secondWrapperRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: secondWrapperRef.current,
							start: "top bottom",
						},
					},
				);
			});

			return () => ctx.revert();
		}
	}, [isMobileView]);

	return {
		secondWrapperRef,
		copyrightWrapperRef,
		containerRef,
		headingRef,
		buttonRef,
	};
};
