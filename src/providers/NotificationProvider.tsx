import { ErrorSnackbar, SuccessSnackbar } from "components";
import { useIsMobileView } from "hooks";
import { SnackbarProvider } from "notistack";
import type { IChildren } from "types";

export const NotificationsProvider = ({ children }: IChildren) => {
	const isMobileView = useIsMobileView();

	return (
		<SnackbarProvider
			maxSnack={3}
			autoHideDuration={3000}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: isMobileView ? "center" : "right",
			}}
			Components={{ success: SuccessSnackbar, error: ErrorSnackbar }}
		>
			{children}
		</SnackbarProvider>
	);
};
