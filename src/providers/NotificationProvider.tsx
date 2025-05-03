import React from "react";
import { SnackbarProvider } from "notistack";

import { SuccessSnackbar, ErrorSnackbar } from "components";
import { IChildren } from "types";
import { useIsMobileView } from "hooks";

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
