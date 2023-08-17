import styled from "styled-components";
import { flexCenter } from "theme";

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  max-width: 2rem;
  aspect-ratio: 1 / 1;
`;
