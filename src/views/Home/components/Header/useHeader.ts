import { useRouter } from "next/router";
import { URLS } from "helpers";

export const useHeader = () => {
  const { push } = useRouter();

  const handleOnClick = () => push(URLS.contact);

  return {
    handleOnClick,
  };
};
