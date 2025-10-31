import { Logo } from "components";
import { leftNavigation, rightNavigation } from "../../helpers";
import { ListRenderer } from "../ListRenderer";
import { List } from "./DesktopNavigation.styled";

interface DesktopNavigation {
	toggle?: () => void;
}

export const DesktopNavigation = ({ toggle }: DesktopNavigation) => {
	return (
		<List>
			<ListRenderer navigation={leftNavigation} toggle={toggle} />
			<li>
				<Logo />
			</li>
			<ListRenderer navigation={rightNavigation} toggle={toggle} />
		</List>
	);
};
