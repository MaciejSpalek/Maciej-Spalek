import Image from "next/image";
import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.header`
  ${flexColumn};
  justify-content: space-between;
  overflow: hidden;
  background-color: ${colors.grayScale[1]};
  border-radius: 48px;
  gap: 16px;
  padding: 128px 16px 16px;

  @media ${devices.md} {
    padding: 128px 24px 24px 24px;
    gap: 16px;
  }
`;

export const Heading = styled.h1`
  ${getFont("semibold", 32, 72)};
  color: ${colors.white};
  text-align: center;
  margin: 0;
`;

export const Paragraph = styled.p`
  ${getFont("regular", 14, 28)};
  font-weight: 400;
  line-height: 150%;
  color: ${colors.grayScale[5]};
  max-width: 75%;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-height: 280px;
  ${flexCenter};
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 48px;

  @media ${devices.md} {
    min-height: 680px;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 24px;
`;
