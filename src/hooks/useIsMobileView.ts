import { breakpoints } from "theme";
import { useWindowSize } from "./useWindowSize";

export const useIsMobileView = () => {
	const windowSize = useWindowSize();
	const isMobileView = (windowSize.width as number) < breakpoints.md;

	if (null == windowSize.height || null == windowSize.width) {
		return null;
	}

	return isMobileView;
};
