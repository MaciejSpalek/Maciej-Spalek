import { gsap } from "gsap";
import { animationParams } from "helpers";
import { useIsMobileView } from "hooks";
import { useLayoutEffect, useRef } from "react";
import type { SectionProps } from "./Section.model";
import { Container, Content, Heading, HeadingWrapper } from "./Section.styled";

export const Section = ({ title, children }: SectionProps) => {
	const isMobileView = useIsMobileView();
	const headingRef = useRef(null);

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		if (!isMobileView) {
			const ctx = gsap.context(() => {
				gsap.fromTo(
					headingRef.current,
					{
						y: "+=100",
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: animationParams.duration,
					},
				);
			});

			return () => ctx.revert();
		}
	}, [isMobileView]);

	return (
		<Container>
			{title && (
				<HeadingWrapper ref={headingRef}>
					<Heading>{title}</Heading>
				</HeadingWrapper>
			)}
			<Content>{children}</Content>
		</Container>
	);
};
