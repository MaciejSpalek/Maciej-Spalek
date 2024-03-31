import styled from "styled-components";

import { colors, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.div<{ fullWidth?: boolean }>`
  ${flexColumn};
  align-items: flex-start;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
`;

export const Wrapper = styled.div<{ error: boolean; touched: boolean }>`
  ${flexRow};
  border: 1px solid
    ${({ error, touched }) =>
      error && touched ? colors.secondary.main : colors.grayscale.tertiary};
  border-radius: 8px;
  overflow: hidden;
  padding: ${({ isIcon }) => (isIcon ? "0 8px" : 0)};
  height: 100%;
  :focus-within {
    border: 1px solid
      ${({ error, touched }) =>
        error && touched ? colors.secondary.main : colors.primary.main};
  }
`;

interface IInput {
  fullWidth?: boolean;
  touched: boolean;
  error: boolean;
}
export const StyledInput = styled.textarea<IInput>`
  padding: 12px;
  width: 100%;
  height: 100%;
  background: ${colors.grayScale[7]};
  color: ${({ error, touched }) =>
    error && touched ? colors.secondary.main : colors.grayScale[1]};
  ${getFont('medium', 12, 18)};
  resize: none;
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
