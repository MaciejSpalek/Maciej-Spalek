import styled from "styled-components";
import { colors, flexCenter, flexColumn, flexRow, getFont } from "theme";
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

export const ButtonContainer = styled.div`
  ${flexRow};
  position: relative;
  height: 50px;
  gap: 16px;
`;

export const FileButton = styled.button`
  ${flexCenter};
  justify-content: flex-start;
  gap: 16px;
  height: 52px;
  background-color: ${colors.grayScale[7]};
  border-radius: 8px;
  padding: 0 16px 0 0;
  border: none;
  overflow: hidden;
  color: ${colors.grayScale[2]};
  ${getFont('semibold', 14)};
  cursor: pointer;
  transition: 0.5s ease;
  white-space: nowrap;

  :hover {
    background-color: ${colors.grayScale[3]};

    path {
      fill: ${colors.grayScale[2]};
      transition: 0.5s ease;
    }
  }
`;

export const FileImageWrapper = styled.div`
  ${flexCenter};
  width: auto;
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
`;

export const FileTextWrapper = styled.div`
  ${flexCenter};
`;

export const SmallDownloadIcon = styled(DownloadIcon)`
  width: 32px;
  height: 32px;

  path {
    fill: ${colors.grayScale[2]};
    transition: 0.5s ease;
    
  }
`;
