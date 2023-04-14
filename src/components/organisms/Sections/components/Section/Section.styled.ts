import styled from "styled-components";
import { colors, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  :hover div {
    visibility: visible;
  }
  :focus div {
    visibility: visible;
    overflow: hidden;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-family: "Lexend";
  font-weight: 500;
  color: ${colors.grayscale[700]};
`;

export const HiddenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.transparent.medium};
  visibility: hidden;
  padding: 12px;
`;
