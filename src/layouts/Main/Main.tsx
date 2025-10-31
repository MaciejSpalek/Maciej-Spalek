import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import type { IChildren } from "types";
import { Footer, Navbar } from "./components";
import { Container, InnerWrapper, MainWrapper } from "./Main.styled";

gsap.registerPlugin(ScrollTrigger);

export const Main = ({ children }: IChildren) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		containerRef?.current?.scrollTo(0, document.body.scrollHeight);
	}, []);

	return (
		<Container>
			<Navbar />
			<InnerWrapper ref={containerRef}>
				<MainWrapper>{children}</MainWrapper>
			</InnerWrapper>
			<Footer />
		</Container>
	);
};
