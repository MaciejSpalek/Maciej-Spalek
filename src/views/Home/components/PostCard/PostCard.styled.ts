import styled from "styled-components";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  :hover div {
    visibility: visible;
  }
  :hover {
    scale: 1.025;
  }
`;

export const Image = styled.img``;

export const HiddenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  padding: 12px;
  margin: 0;
  border-radius: 4px;
`;
