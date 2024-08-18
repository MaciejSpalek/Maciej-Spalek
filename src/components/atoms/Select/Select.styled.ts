import styled from 'styled-components';

import { colors, flexColumn, flexRow, getFont } from 'theme';

export const Container = styled.div<{ fullWidth?: boolean }>`
  ${flexColumn};
  align-items: flex-start;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
`;

export const Wrapper = styled.div<{ error: boolean; touched: boolean; }>`
  ${flexRow};
  border: 1px solid
    ${({ error, touched }) => (error && touched ? colors.secondary.main : colors.grayscale.tertiary)};
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  :focus-within {
    border: 1px solid
      ${({ error, touched }) => (error && touched ? colors.secondary.main : colors.primary.main)};
  }
`;

export const StyledSelect = styled.select<{ fullWidth?: boolean; touched: boolean; error: boolean }>`
  ${getFont('medium', 12, 18)};
  padding: 0 12px;
  width: 100%;
  height: 52px;
  background: ${colors.grayScale[7]};
  color: ${({ error, touched }) =>
    error && touched ? colors.secondary.main : colors.grayScale[1]};
  text-transform: capitalize;
  border: none;
  outline: 0;
`;

export const Label = styled.label`
  background: ${colors.white};
  color: ${colors.grayscale.tertiary};
`;

export const Option = styled.option`
  color: ${colors.background.light};
`;

