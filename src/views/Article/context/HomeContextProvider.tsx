import { createContext, type ReactNode, useContext } from "react";
import type { IAbout, IHeader, IHome } from "types";
import { useHomeAnimations } from "./useHomeAnimations";

export interface HomeContent {
	aboutSectionContainerRef: React.RefObject<HTMLElement>;
	headerContainerRef: React.RefObject<HTMLElement>;
	headerParagraphRef: React.RefObject<HTMLParagraphElement>;
	headerRightImageRef: React.RefObject<HTMLLIElement>;
	headerLeftImageRef: React.RefObject<HTMLLIElement>;
	headerHeadingRef: React.RefObject<HTMLHeadingElement>;
	headerButtonRef: React.RefObject<HTMLDivElement>;
	about: IAbout;
	header: IHeader;
}

export const HomeContext = createContext<HomeContent>({
	aboutSectionContainerRef: { current: null },
	headerContainerRef: { current: null },
	headerParagraphRef: { current: null },
	headerRightImageRef: { current: null },
	headerLeftImageRef: { current: null },
	headerHeadingRef: { current: null },
	headerButtonRef: { current: null },
	about: {
		description: "",
		photo: "",
	},
	header: {
		description: "",
		first_photo: "",
		second_photo: "",
	},
});

interface IHomeContextProvider {
	children: ReactNode;
	home: IHome;
}

export const useHomeContextProvider = () => useContext(HomeContext);
export const HomeContextProvider = ({
	children,
	home,
}: IHomeContextProvider) => {
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
