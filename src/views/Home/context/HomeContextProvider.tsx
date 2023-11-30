import { createContext, useContext } from "react";
import { useHomeAnimations } from "./useHomeAnimations";

export type HomeContent = {
  headerContainerRef: any;
  headerParagraphRef: any;
  headerRightImageRef: any;
  headerLeftImageRef: any;
  headerHeadingRef: any;
  headerButtonRef: any;
  aboutSectionContainerRef: any;
  sectionsCarouselContainerRef: any;
  sectionsCarouselBarRef: any;
  sectionsContainerRef: any;
  sectionsHeadingRef: any;
  sectionsListRef: any;
};

export const HomeContext = createContext<HomeContent>({
  headerContainerRef: null,
  headerParagraphRef: null,
  headerRightImageRef: null,
  headerLeftImageRef: null,
  headerHeadingRef: null,
  headerButtonRef: null,
  aboutSectionContainerRef: null,
  sectionsCarouselContainerRef: null,
  sectionsCarouselBarRef: null,
  sectionsContainerRef: null,
  sectionsHeadingRef: null,
  sectionsListRef: null,
});

export const useHomeContextProvider = () => useContext(HomeContext);

export const HomeContextProvider = ({ children }) => {
  const refs = useHomeAnimations();

  return (
    <HomeContext.Provider
      value={{
        ...refs,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
