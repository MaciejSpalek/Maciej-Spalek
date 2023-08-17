import styled from "styled-components";
import {
  breakpoints,
  colors,
  devices,
  flexCenter,
  flexColumn,
  getFont,
} from "theme";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 64px 24px 32px;
  border-radius: 40px 40px 0px 0px;
  background-color: ${colors.grayScale[1]};
`;

export const FirstWrapper = styled.div`
  ${flexColumn};
`;

export const Wrapper = styled.div`
  ${flexColumn};
  font-size: 18px;
  text-align: center;
  color: ${colors.grayscale.primary};
`;

export const SecondWrapper = styled.div`
  ${flexColumn};

  @media ${devices.md} {
    padding: 48px 0;
    ${flexCenter};
    justify-content: space-between;
  }
`;

export const LeftWrapper = styled.div`
  margin: 60px 0;

  @media ${devices.md} {
    ${flexColumn};
    align-items: flex-start;
    align-self: stretch;
    justify-content: space-between;
    width: min-content;
    padding-top: 16px;
    margin: 0;
  }
`;

export const SocialsWrapper = styled.div`
  ${flexColumn};
  gap: 80px;

  @media ${devices.md} {
    ${flexCenter};
    align-items: flex-start;
    align-self: stretch;
    justify-content: space-between;
    width: min-content;
    gap: 128px;
  }
`;

export const ImageWrapper = styled.div`
  background-color: ${colors.primary.main};
  border-radius: 50%;
  width: 145px;
  height: 145px;
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
  text-align: center;
  ${getFont("medium", 94)};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${colors.white};
  line-height: 140%;
  ${getFont("medium", 20)};
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: ${colors.grayScale[2]};
  height: 1px;
  border: none;
`;

export const ListTitle = styled.p`
  color: ${colors.white};
  line-height: 140%;
  text-align: center;
  ${getFont("medium", 18)};

  @media ${devices.md} {
    ${getFont("medium", 20)};
    text-align: left;
  }
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: ${colors.grayScale[3]};
  line-height: 150%;
  ${getFont("regular", 14)};

  @media ${devices.md} {
    ${getFont("regular", 18)};
  }
`;

export const List = styled.ul`
  ${flexColumn};
  list-style: none;
  align-items: center;
  padding: 0;
  gap: 16px;

  @media ${devices.md} {
    align-items: flex-start;
  }
`;

export const InnerWrapper = styled.div`
  ${flexColumn}
  justify-content: space-between;
  width: 100%;
  gap: 32px;
  max-width: ${breakpoints.lg}px;
`;
