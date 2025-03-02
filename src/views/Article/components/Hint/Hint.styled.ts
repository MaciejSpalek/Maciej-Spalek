import styled from "styled-components";
import { colors, devices, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 16px;
  border: 1px solid ${colors.label.green.medium};
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.label.green.light};
  margin: 65px 0;
  width: 100%;

  @media ${devices.md} {
    min-width: 480px;
    max-width: 640px;
  }
`;

export const Heading = styled.h2`
  color: ${colors.label.green.medium};
  ${getFont("regular", 24)};
  text-transform: uppercase;
  text-align: start;
  margin: 0;

`;

export const Paragraph = styled.p`
  color: ${colors.label.green.medium};
  ${getFont("regular", 18)};
  text-align: justify;
  margin: 0
`;
