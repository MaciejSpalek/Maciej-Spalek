import { COOKIES, deleteCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { navigation } from "./helpers";
import type { INavigation } from "./Navigation.model";
import { List, ListItem, Button as NavButton } from "./Navigation.styled";

export const Navigation = ({ step, setStep }: INavigation) => {
	const router = useRouter();

	const logout = () => {
		deleteCookie({ name: COOKIES.MS_AUTH_TOKEN, path: router.pathname });
		window.location.reload();
	};

	return (
		<List>
			{navigation.map(({ name, type }) => (
				<ListItem key={type}>
					<NavButton isActive={step === type} onClick={() => setStep(type)}>
						{name.toUpperCase()}
					</NavButton>
				</ListItem>
			))}
			<ListItem>
				<NavButton onClick={logout}>WYLOGUJ SIĘ</NavButton>
			</ListItem>
		</List>
	);
};
