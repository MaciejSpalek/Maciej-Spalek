// Import components
import { URLS } from "helpers";
import { getCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingWrapper } from "components";

const AUTH_STATE = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};

interface IProtected {
  children: React.ReactNode;
}

export const Protected = ({ children }: IProtected) => {
  const [authState, setAuthState] = useState(AUTH_STATE.LOADING);
  const token = getCookie("ms_auth_token");
  const { push } = useRouter();

  useEffect(() => {
    if (token) {
      setAuthState("success");
    } else {
      setAuthState("failed");
      push(URLS.admin.login);
    }
  }, [authState, push]);

  if (authState === "loading") {
    return <LoadingWrapper height="100vh" />;
  }

  if (authState === "success") {
    return <>{children}</>;
  }

  return null;
};
