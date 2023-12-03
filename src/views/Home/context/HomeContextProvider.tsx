import { createContext, useContext } from "react";
import { useHomeAnimations } from "./useHomeAnimations";

export type HomeContent = {
  aboutSectionContainerRef: any;
  headerContainerRef: any;
  headerParagraphRef: any;
  headerRightImageRef: any;
  headerLeftImageRef: any;
  headerHeadingRef: any;
  headerButtonRef: any;
};

export const HomeContext = createContext<HomeContent>({
  aboutSectionContainerRef: null,
  headerContainerRef: null,
  headerParagraphRef: null,
  headerRightImageRef: null,
  headerLeftImageRef: null,
  headerHeadingRef: null,
  headerButtonRef: null,
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
