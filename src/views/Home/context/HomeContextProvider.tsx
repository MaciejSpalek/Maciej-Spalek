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
  about: any;
  header: any;
};

export const HomeContext = createContext<HomeContent>({
  aboutSectionContainerRef: null,
  headerContainerRef: null,
  headerParagraphRef: null,
  headerRightImageRef: null,
  headerLeftImageRef: null,
  headerHeadingRef: null,
  headerButtonRef: null,
  about: {
    description: "",
    photo: null,
  },
  header: {
    description: "",
    first_photo: null,
    second_photo: null,
  },
});

export const useHomeContextProvider = () => useContext(HomeContext);

export const HomeContextProvider = ({ children, home }) => {
  const refs = useHomeAnimations();

  const { about, header } = home || {};

  return (
    <HomeContext.Provider
      value={{
        ...refs,
        header,
        about,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
