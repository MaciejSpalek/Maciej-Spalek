import { URLS } from "helpers";
import { COOKIES, deleteCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { navigation } from "./helpers";
import type { INavigation } from "./Navigation.model";
import { List, ListItem, Button as NavButton } from "./Navigation.styled";

export const Navigation = ({ step, setStep }: INavigation) => {
	const router = useRouter();
	const logout = () => {
		deleteCookie(COOKIES.MS_AUTH_TOKEN);
		router.push(URLS.admin.login);
	};

	return (
		<List>
			{navigation.map((element) => (
				<ListItem key={element}>
					<NavButton
						isActive={step === element}
						onClick={() => setStep(element)}
					>
						{element.toUpperCase()}
					</NavButton>
				</ListItem>
			))}
			<ListItem>
				<NavButton onClick={logout}>LOGOUT</NavButton>
			</ListItem>
		</List>
	);
};
