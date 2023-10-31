import styled from "styled-components";

export const ImageWrapper = styled.div<{ width: number }>`
  position: relative;
  border-radius: 50%;
  min-width: ${({ width }) => width}px;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  width: 100%;
  overflow: hidden;
  border: none;
`;
