import styled from "styled-components";
import { colors, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const Title = styled.p`
  font-size: 32px;
  font-family: "Lexend";
  font-weight: 500;
  color: ${colors.grayscale[700]};
`;
