import styled from "styled-components";
import { colors, flexColumn, flexRow, getFont } from "theme";

interface IContainer {
	fullWidth?: boolean;
}

interface IWrapper {
	error: boolean;
	isIcon: boolean;
}

interface IInput {
	fullWidth?: boolean;
	error: boolean;
}

export const Container = styled.div<IContainer>`
  ${flexColumn};
  align-items: flex-start;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
`;

export const Wrapper = styled.div<IWrapper>`
  ${flexRow};
  border: 1px solid
    ${({ error }) =>
			error ? colors.secondary.main : colors.grayscale.tertiary};
  border-radius: 8px;
  overflow: hidden;
  padding: ${({ isIcon }) => (isIcon ? "0 8px" : 0)};
  :focus-within {
    border: 1px solid
      ${({ error }) => (error ? colors.secondary.main : colors.primary.main)};
  }
`;

export const StyledInput = styled.input<IInput>`
  ${getFont("medium", 12, 18)};
  padding: 0 12px;
  width: 100%;
  height: 52px;
  background: ${({ error }) =>
		error ? colors.label.red.light : colors.grayScale[7]};
  color: ${({ error }) =>
		error ? colors.secondary.main : colors.grayScale[1]};
  border: none;
  outline: 0;
  ::placeholder {
    color: ${colors.grayScale[3]};
  }
`;

export const Label = styled.label`
  background: ${colors.white};
  color: ${colors.grayscale.tertiary};
`;

export const ErrorMessage = styled.p`
  color: ${colors.label.red.medium};
  margin: 6px 2px;
  ${getFont("medium", 12)};
`;
