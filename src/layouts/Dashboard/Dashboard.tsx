import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { IChildren } from "types";
import { Container, InnerWrapper, MainWrapper } from "./Dashboard.styled";

gsap.registerPlugin(ScrollTrigger);

export const Dashboard = ({ children }: IChildren) => (
	<Container>
		<InnerWrapper>
			<MainWrapper>{children}</MainWrapper>
		</InnerWrapper>
	</Container>
);
