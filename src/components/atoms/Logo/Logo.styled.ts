import { LogoIcon } from "assets";
import styled from "styled-components";
import { colors, flexCenter } from "theme";

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

export const LogoImage = styled(LogoIcon)`
  width: 48px;
  height: 48px;
  color: ${colors.black}
`;
