import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 5rem;
`;

export const BlocksWrapper = styled.div`
  ${flexColumn};
  gap: 24px;
`;

export const MainImageContainer = styled.div`
  ${flexCenter};
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 1/1;

  @media ${devices.md} {
    aspect-ratio: 16 / 9;
  }
`;

export const Heading = styled.h2`
  color: ${colors.grayScale[1]};
  ${getFont("regular", 24)};
  text-transform: uppercase;
  text-align: start;
`;

export const Paragraph = styled.p`
  color: ${colors.grayScale[1]};
  ${getFont("regular", 18)};
  text-align: justify;
`;
