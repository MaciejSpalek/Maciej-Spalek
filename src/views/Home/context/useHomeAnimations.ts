import { gsap } from "gsap";
import { animationParams } from "helpers";
import { useIsMobileView } from "hooks";
import { useLayoutEffect, useRef } from "react";

export const useHomeAnimations = () => {
	const aboutSectionContainerRef = useRef(null);

	const isMobileView = useIsMobileView();

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		if (!isMobileView) {
			const ctx = gsap.context(() => {
				gsap.fromTo(
					aboutSectionContainerRef.current,
					{
						y: "+=50",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
						scrollTrigger: {
							trigger: aboutSectionContainerRef.current,
							start: "300px bottom",
						},
					},
				);
			});

			return () => ctx.revert();
		}
	}, [isMobileView]);

	return {
		aboutSectionContainerRef,
	};
};
