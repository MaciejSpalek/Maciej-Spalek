import React from "react";
import { ISpecialButton } from "./SpecialButton.model";
import { BaseButton, IconWrapper } from "./SpecialButton.styled";
import { RightCircleArrowIcon } from "assets";

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
