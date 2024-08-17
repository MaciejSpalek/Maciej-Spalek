import { forwardRef } from "react";
import {
  Paragraph,
  StyledSnackbarContent,
  StyledErrorIcon,
} from "./ErrorSnackbar.styled";

export const ErrorSnackbar = forwardRef((props: any, ref: any) => {
  const { message } = props;

  return (
    <StyledSnackbarContent ref={ref} role="alert">
      <StyledErrorIcon />
      <Paragraph>{message}</Paragraph>
    </StyledSnackbarContent>
  );
});
