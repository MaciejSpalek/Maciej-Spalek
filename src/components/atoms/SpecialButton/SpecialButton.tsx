import { RightCircleArrowIcon } from "assets";
import type { ISpecialButton } from "./SpecialButton.model";
import { BaseButton, IconWrapper } from "./SpecialButton.styled";

export const SpecialButton = ({
	children,
	onClick,
	fullWidth = false,
	type = "button",
}: ISpecialButton): JSX.Element => {
	return (
		<BaseButton fullWidth={fullWidth} onClick={onClick} type={type}>
			<p>{children}</p>
			<IconWrapper>
				<RightCircleArrowIcon />
			</IconWrapper>
		</BaseButton>
	);
};
