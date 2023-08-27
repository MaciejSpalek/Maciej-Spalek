import Link from "next/link";
import styled from "styled-components";
import { flexCenter, flexColumn, getFont } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  ${flexColumn};
  height: auto;
  border-radius: 28px;
  cursor: pointer;

  :hover div {
    visibility: visible;
  }
  :focus div {
    visibility: visible;
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 28px;
  overflow: hidden;
`;

export const HiddenWrapper = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${colors.transparent.medium};
  visibility: hidden;
`;

export const DescriptionWrapper = styled.div`
  ${flexColumn};
  padding: 16px;
`;

export const Description = styled.p`
  ${getFont("medium", 12, 14)};
  color: ${colors.grayScale[1]};
  text-transform: uppercase;
  letter-spacing: 2.2px;
  line-height: 100%;
`;

export const Price = styled.p`
  ${getFont("medium", 18, 22)};
  color: ${colors.grayScale[1]};
  text-transform: uppercase;
  letter-spacing: 2.2px;
`;

export const LinkContent = styled.p`
  ${getFont("medium", 12, 16)};
  color: ${colors.grayScale[2]};
  text-transform: uppercase;
  letter-spacing: 2.2px;
  border: 1px solid ${colors.grayScale[2]};
  padding: 8px 16px;
  border-radius: 8px;
  :hover {
    border: 1px solid ${colors.grayScale[1]};
    color: ${colors.grayScale[1]};
  }
`;
