// Import components

import { LoadingWrapper } from "components";
import { URLS } from "helpers";
import { COOKIES, getCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { IChildren } from "types";

const AUTH_STATE = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILED: "failed",
};

export const Protected = ({ children }: IChildren) => {
	const [authState, setAuthState] = useState(AUTH_STATE.LOADING);
	const token = getCookie(COOKIES.MS_AUTH_TOKEN);
	const { push } = useRouter();

	useEffect(() => {
		if (token) {
			setAuthState("success");
		} else {
			setAuthState("failed");
			push(URLS.admin.login);
		}
		//eslint-disable-next-line
	}, [authState, push, token]);

	if (authState === "loading") {
		return <LoadingWrapper height="100vh" />;
	}

	if (authState === "success") {
		return <>{children}</>;
	}

	return null;
};
