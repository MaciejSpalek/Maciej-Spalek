import Link from "next/link";
import { useRouter } from "next/router";
import { Anchor } from "./ListRenderer.styled";

interface INavigation {
	href: string;
	text: string;
}
interface IListRenderer {
	navigation: INavigation[];
	toggle?: () => void;
	isOpen?: boolean;
}

export const ListRenderer = ({
	navigation,
	toggle,
}: IListRenderer): JSX.Element => {
	const { pathname } = useRouter();

	return (
		<>
			{navigation.map(({ href, text }) => (
				<li key={text}>
					<Link href={href} passHref>
						<Anchor onClick={toggle} isActive={pathname === href}>
							{text.toUpperCase()}
						</Anchor>
					</Link>
				</li>
			))}
		</>
	);
};
