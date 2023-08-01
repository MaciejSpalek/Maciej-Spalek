import styled from "styled-components";
import { colors, flexCenter } from "theme";

export const Text = styled.p`
  font-family: Lexend;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.grayscale[700]};
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  max-width: 2rem;
  aspect-ratio: 1/1;
`;