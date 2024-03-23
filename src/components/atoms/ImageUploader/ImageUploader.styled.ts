import styled from "styled-components";
import { colors, flexCenter, flexColumn } from "theme";
import { DownloadIcon } from "assets";

export const Container = styled.div`
  position: relative;
  ${flexColumn};
  aspect-ratio: 1/1;

  :hover :first-child {
    visibility: visible;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const StyledButton = styled.button`
  background-color: ${colors.transparent.main};
  border: none;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background: ${colors.grayScale[7]};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledDownloadIcon = styled(DownloadIcon)`
  width: 42px;
  height: 42px;
  :hover path {
    fill: ${colors.grayScale[7]};
  }
  path {
    fill: ${colors.grayScale[4]};
  }
`;

export const HiddenWrapper = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.transparent.black.medium};
  visibility: hidden;
  padding: 12px;
  z-index: 999;
`;
