import { useWindowSize } from "./useWindowSize";
import { breakpoints } from "theme";

export const useIsMobileView = () => {
  const windowSize = useWindowSize();
  const isMobileView = windowSize.width < breakpoints.md;

  return isMobileView;
};
