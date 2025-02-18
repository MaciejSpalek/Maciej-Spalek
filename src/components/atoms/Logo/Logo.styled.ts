import { LogoIcon } from "assets";
import styled from "styled-components";
import { colors, devices, flexCenter } from "theme";

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  aspect-ratio: 1 / 1;
`;

export const LogoImage = styled(LogoIcon)`
  width: 42px;
  height: 42px;
  color: ${colors.black}
`;
