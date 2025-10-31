import { URLS } from "helpers";
import { useRouter } from "next/router";

export const useHeader = () => {
	const { push } = useRouter();

	const handleOnClick = () => push(URLS.contact);

	return {
		handleOnClick,
	};
};
