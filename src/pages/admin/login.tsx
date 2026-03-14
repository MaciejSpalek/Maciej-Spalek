import type { GetServerSidePropsContext } from "next";
import { Login } from "views";
import { URLS } from "../../helpers";
import { COOKIES } from "../../helpers/cookies";

export default Login;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const token = context.req.cookies[COOKIES.MS_AUTH_TOKEN];

	if (token) {
		return {
			redirect: {
				destination: URLS.admin.dashboard,
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}
