import { forwardRef } from "react";
import {
  Paragraph,
  StyledSnackbarContent,
  IconWrapper,
  StyledCheckmarkIcon
} from "./SuccessSnackbar.styled";

export const SuccessSnackbar = forwardRef((props: any, ref: any) => {
  const { message } = props;

  return (
    <StyledSnackbarContent ref={ref} role="alert">
        <IconWrapper>
          <StyledCheckmarkIcon />
        </IconWrapper>
        <Paragraph>{message}</Paragraph>
    </StyledSnackbarContent>
  );
});

SuccessSnackbar.displayName = "ErrorSnackbar"
