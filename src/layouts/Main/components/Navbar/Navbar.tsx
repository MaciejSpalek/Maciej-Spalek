import { LoadingWrapper } from "components";
import { useIsMobileView } from "hooks";
import { DesktopNavigation, MobileNavigation } from "./components";
import { Nav } from "./Navbar.styled";

export const Navbar = () => {
	const isMobileView = useIsMobileView();

	if (null == isMobileView) {
		return <LoadingWrapper height="70px" size={16} />;
	}

	return (
		<Nav>{isMobileView ? <MobileNavigation /> : <DesktopNavigation />}</Nav>
	);
};
