import styled from "styled-components";
import { colors, devices, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  overflow: hidden;
  border-radius: 40px;
  background-color: ${colors.grayScale[1]};
  padding: 24px;
  gap: 64px;
  margin-top: 64px;
  
  @media ${devices.md} {
    max-width: 600px;
  }
`;

export const FormWrapper = styled.form`
  ${flexColumn};
  gap: 15px;
`;

export const Heading = styled.h1`
  color: ${colors.grayScale[4]};
  letter-spacing: 7.2px;
  text-transform: uppercase;
  text-align: start;
  white-space: no-wrap;
  ${getFont("regular", 12, 18)};
`;
