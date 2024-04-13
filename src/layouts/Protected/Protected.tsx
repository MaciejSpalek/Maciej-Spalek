// Import components
import { URLS } from "helpers";
import { getCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Protected = ({ children }) => {
  const isAuth = getCookie("ms_auth_token");
  const { push } = useRouter();

  useEffect(() => {
    if (isAuth) {
      push(URLS.admin.dashboard);
    } else {
      push(URLS.admin.login);
    }
  }, [isAuth]);

  return children;
};
