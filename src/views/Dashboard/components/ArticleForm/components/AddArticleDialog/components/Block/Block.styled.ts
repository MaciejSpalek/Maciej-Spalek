import styled from "styled-components";
import { colors, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  align-items: flex-start;
`;

export const FieldsWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
`;

export const Iterator = styled.p`
  ${getFont("regular", 16)};
  letter-spacing: 7.2px;
  color: ${colors.grayScale[4]};
  text-transform: uppercase;
`;
