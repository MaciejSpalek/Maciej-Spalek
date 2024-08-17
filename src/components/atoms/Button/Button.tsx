import React from "react";
import { ButtonTypes } from "helpers";
import { IButton } from "./Button.model";
import {
  BaseButton,
  StyledContent,
  Wrapper,
  StyledIconWrapper,
} from "./Button.styled";
import { CircularProgress } from "../CircularProgress";

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
  ...props
}: IButton): JSX.Element => {
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
