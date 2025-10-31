import { type ForwardedRef, forwardRef } from "react";
import {
	IconWrapper,
	Paragraph,
	StyledCheckmarkIcon,
	StyledSnackbarContent,
} from "./SuccessSnackbar.styled";

interface SuccessSnackbarProps {
	message: string;
}

export const SuccessSnackbar = forwardRef<HTMLDivElement, SuccessSnackbarProps>(
	(props, ref: ForwardedRef<HTMLDivElement>) => {
		const { message } = props;

		return (
			<StyledSnackbarContent ref={ref} role="alert">
				<IconWrapper>
					<StyledCheckmarkIcon />
				</IconWrapper>
				<Paragraph>{message}</Paragraph>
			</StyledSnackbarContent>
		);
	},
);

SuccessSnackbar.displayName = "SuccessSnackbar";
