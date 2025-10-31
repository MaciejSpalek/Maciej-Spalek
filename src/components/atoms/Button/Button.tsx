import { ButtonTypes } from "helpers";
import { CircularProgress } from "../CircularProgress";
import type { IButton } from "./Button.model";
import {
	BaseButton,
	StyledContent,
	StyledIconWrapper,
	Wrapper,
} from "./Button.styled";

export const Button = ({
	icon: Icon,
	size = "medium",
	outline,
	disabled,
	children,
	onClick,
	isLoading = false,
	fullWidth = false,
	type = "button",
}: IButton) => {
	const content = () => {
		if (Icon && (size === ButtonTypes.MEDIUM || size === ButtonTypes.SQUARE)) {
			return (
				<StyledContent>
					<StyledIconWrapper disabled={!!disabled} isLoading={isLoading}>
						{isLoading ? <CircularProgress size={24} /> : <Icon />}
					</StyledIconWrapper>
					{children && <span>{children}</span>}
				</StyledContent>
			);
		}

		return (
			<StyledContent>
				{isLoading && (
					<StyledIconWrapper disabled={!!disabled} isLoading={isLoading}>
						<CircularProgress size={24} />
					</StyledIconWrapper>
				)}
				<Wrapper>{children}</Wrapper>
			</StyledContent>
		);
	};

	return (
		<BaseButton
			fullWidth={fullWidth}
			type={type}
			disabled={!!disabled}
			outline={!!outline}
			onClick={onClick}
			size={size}
		>
			{content()}
		</BaseButton>
	);
};
