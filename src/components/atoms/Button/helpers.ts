import { ButtonTypes } from "helpers";
import { css } from "styled-components";
import { colors } from "theme";

// main styles
export const defaultStyles = css`
  background: ${colors.primary.main};
  color: ${colors.white};
  border: none;
  svg path {
    fill: ${colors.white};
  }
`;

export const outlineStyles = css`
  border: 2px solid ${colors.primary.main};
  background: ${colors.white};
  color: ${colors.primary.main};
  svg path {
    fill: ${colors.primary.main};
  }
`;

export const disabledStyles = css`
  background: ${colors.grayscale.secondary};
  color: ${colors.grayscale.primary};
  :focus {
    outline: none;
  }
`;

export const outlineWithDisabledStyles = css`
  border: 2px solid ${colors.grayscale.secondary};
  background: ${colors.white};
  color: ${colors.grayscale.secondary};
  svg path {
    fill: ${colors.grayscale.secondary};
  }
`;

// hover styles
export const primaryHover = css`
  background: ${colors.primary.dark};
  color: ${colors.white};
`;

export const outlineHover = css`
  border: 2px solid ${colors.primary.dark};
  color: ${colors.primary.dark};
  svg path {
    fill: ${colors.primary.dark};
  }
`;

export const disabledHover = css`
  cursor: default;
`;

// types styles
export const square = css`
  width: 50px;
  height: 50px;
  padding: 0;
  div {
    margin: 0px;
  }
`;

export const small = css`
  width: auto;
  height: 32px;
  font-size: 11px;
  padding: 0 16px;
`;

export const medium = css`
  width: auto;
  height: 40px;
  font-size: 14px;
  padding: 0 24px;
`;

// handlers
export const getButtonSize = (size: string) => {
  switch (size) {
    case ButtonTypes.SQUARE:
      return square;
    case ButtonTypes.SMALL:
      return small;
    default:
      return medium;
  }
};

export const getHover = (outline: boolean, disabled: boolean) => {
  if (outline && !disabled) return outlineHover;
  else if ((disabled && !outline) || (outline && disabled))
    return disabledHover;
  return primaryHover;
};

export const getStyles = (outline: boolean, disabled: boolean) => {
  if (outline && !disabled) return outlineStyles;
  else if (disabled && !outline) return disabledStyles;
  else if (outline && disabled) return outlineWithDisabledStyles;
  return defaultStyles;
};
