export const COOKIES = {
	MS_AUTH_TOKEN: "ms_auth_token",
};

export const getCookie = (name: string): string | null => {
	if (typeof window !== "undefined") {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) {
			const cookieValue = parts.pop()?.split(";").shift();
			return cookieValue ?? null;
		}
	}
	return null;
};

interface SetCookieOptions {
	date?: Date;
	path?: string;
	domain?: string;
	secure?: string;
}

export const setCookie = (
	name: string,
	val: string,
	options: SetCookieOptions,
): void => {
	if (typeof window !== "undefined") {
		if (navigator.cookieEnabled) {
			const { date, domain, path, secure } = options || {};
			const cookieName = encodeURIComponent(name);
			const cookieVal = encodeURIComponent(val);
			let cookieText = cookieName + "=" + cookieVal;

			if (date) {
				cookieText += "; expires=" + date.toUTCString();
			}

			if (path) {
				cookieText += "; path=" + path;
			}

			if (domain) {
				cookieText += "; domain=" + domain;
			}

			if (secure) {
				cookieText += "; secure";
			}

			document.cookie = cookieText;
		}
	}
};

export const deleteCookie = ({
	name,
	path,
}: {
	name: string;
	path: string;
}) => {
	const cookie = getCookie(name);

	if (cookie) {
		document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=${path};`;
	}
};

export const getExpireDate = (tokenLifeTime: number): Date => {
	const getSecondsSinceEpoch = (): number => {
		const date = new Date();
		return Math.round(date.getTime() / 1000);
	};

	return new Date((getSecondsSinceEpoch() + tokenLifeTime) * 1000);
};
