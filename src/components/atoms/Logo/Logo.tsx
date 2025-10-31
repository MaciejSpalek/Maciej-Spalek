import { URLS } from "helpers";
import Link from "next/link";
import { Anchor, ImageWrapper, LogoImage } from "./Logo.styled";

export const Logo = () => {
	return (
		<Link href={URLS.home} passHref>
			<Anchor>
				<ImageWrapper>
					<LogoImage />
				</ImageWrapper>
			</Anchor>
		</Link>
	);
};
