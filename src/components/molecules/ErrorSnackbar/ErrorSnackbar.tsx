import { type ForwardedRef, forwardRef } from "react";
import {
	Paragraph,
	StyledErrorIcon,
	StyledSnackbarContent,
} from "./ErrorSnackbar.styled";

interface ErrorSnackbarProps {
	message: string;
}

export const ErrorSnackbar = forwardRef<HTMLDivElement, ErrorSnackbarProps>(
	(props, ref: ForwardedRef<HTMLDivElement>) => {
		const { message } = props;

		return (
			<StyledSnackbarContent ref={ref} role="alert">
				<StyledErrorIcon />
				<Paragraph>{message}</Paragraph>
			</StyledSnackbarContent>
		);
	},
);

ErrorSnackbar.displayName = "ErrorSnackbar";
