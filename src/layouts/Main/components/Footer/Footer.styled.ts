import styled from "styled-components";
import { breakpoints, colors, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 64px 64px 32px 64px;
  border-radius: 40px 40px 0px 0px;
  background-color: ${colors.grayScale[1]};
`;

export const Copyright = styled.span`
  text-align: center;
  color: ${colors.grayScale[2]};
  line-height: 150%;
  ${getFont("regular", 18)};
`;

export const Heading = styled.h2`
  color: ${colors.white};
  line-height: 100%;
  ${getFont("medium", 94)};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${colors.white};
  line-height: 140%;
  ${getFont("medium", 20)};
`;

export const FirstWrapper = styled.div`
  ${flexColumn};
  padding: 64px;
`;

export const Wrapper = styled.div`
  ${flexColumn};
  font-size: 18px;
  text-align: center;
  color: ${colors.grayscale.primary};
`;

export const SecondWrapper = styled.div`
  ${flexCenter};
  justify-content: space-between;
  padding: 48px 0;
`;

export const LeftWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  width: min-content;
  padding-top: 16px;
`;

export const SocialsWrapper = styled.div`
  ${flexCenter};
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  width: min-content;
  gap: 128px;
`;

export const ImageWrapper = styled.div`
  background-color: ${colors.primary.main};
  border-radius: 50%;
  width: 145px;
  height: 145px;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: ${colors.grayScale[2]};
  height: 1px;
  border: none;
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: ${colors.grayScale[3]};
  line-height: 150% ${getFont("semibold", 18)};
`;

export const ListTitle = styled.p`
  color: ${colors.white};
  line-height: 140% ${getFont("medium", 20)};
`;

export const List = styled.ul`
  ${flexColumn};
  align-items: flex-start;
  list-style: none;
  padding: 0;
  gap: 16px;
`;

export const InnerWrapper = styled.div`
  ${flexColumn}
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  max-width: ${breakpoints.lg}px;
`;
