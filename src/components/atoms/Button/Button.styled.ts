import { LogoIcon } from "assets";
import styled from "styled-components";
import { colors, flexCenter, fullRotateAnimation } from "theme";
import type { IBaseButton } from "./Button.model";
import { getButtonSize, getHover, getStyles } from "./helpers";

export const BaseButton = styled.button<IBaseButton>`
  ${flexCenter};
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  min-height: 50px;
  border-radius: 8px;
  ${({ outline, disabled }) => getStyles(outline, disabled)};
  ${({ size }) => getButtonSize(size)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  :hover {
    ${({ outline, disabled }) => getHover(outline, disabled)};
  }
`;

interface IStyledIconWrapper {
	disabled: boolean;
	isLoading: boolean;
}

export const StyledIconWrapper = styled.div<IStyledIconWrapper>`
  ${flexCenter};
  width: 50px;
  margin-right: 8px;
  svg path {
    transition: 0.3s ease-in-out;
    width: 16px;
    height: 16px;
    fill: ${({ disabled }) => disabled && colors.grayscale.secondary};
  }
`;

export const StyledContent = styled.div`
  ${flexCenter};
`;

export const Wrapper = styled.div`
  ${flexCenter};
`;

export const StyledLoader = styled(LogoIcon)`
  ${flexCenter};
  animation: ${fullRotateAnimation} 2s infinite linear;
  width: 24px;
  height: 24px;
  path {
    color: ${colors.grayscale.secondary};
  }
`;
