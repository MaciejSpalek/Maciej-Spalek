import styled from "styled-components";
import {
  colors,
  flexColumn,
  flexRow,
  getFont,
} from "theme";


export const Section = styled.div`
  ${flexColumn};
  align-items: flex-start;
  gap: 16px;
  border-radius: 40px;
  padding: 24px;
  background-color: ${colors.black};
`;

export const Form = styled.form`
  ${flexRow};
  justify-content: space-between;
  gap: 16px;
`;

export const Heading = styled.p`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;

