import { Logo } from "components";
import { useState } from "react";
import { ListRenderer } from "../../components";
import { leftNavigation, rightNavigation } from "../../helpers";
import {
	Collapsed,
	Container,
	Hamburger,
	Line,
	TopBar,
} from "./MobileNavigation.styled";

export const MobileNavigation = () => {
	const [isOpen, open] = useState(false);

	const toggle = () => open((prev) => !prev);

	const navList = [...leftNavigation, ...rightNavigation];

	return (
		<Container>
			<TopBar>
				<Logo />
				<Hamburger
					onClick={toggle}
					aria-controls="navigation"
					aria-expanded={isOpen}
					aria-label="Menu"
				>
					<Line isOpen={isOpen} />
				</Hamburger>
			</TopBar>
			{isOpen && (
				<Collapsed id="navigation" aria-hidden={!isOpen}>
					<ListRenderer navigation={navList} toggle={toggle} isOpen={isOpen} />
				</Collapsed>
			)}
		</Container>
	);
};
