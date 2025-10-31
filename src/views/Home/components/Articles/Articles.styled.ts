import styled from "styled-components";
import { colors, flexCenter, getFont, flexColumn } from "theme";

export const Container = styled.header`
  ${flexColumn};
  align-items: flex-start;
  gap: 32px;
`;

export const ArticlesContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 1/1;
  width: 100%;
`;

export const ArticleThumbnail = styled.div`
  ${flexColumn};
  gap: 16px;
  width: 100%;
  cursor: pointer;
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[3]};
  margin: 0;
  text-transform: uppercase;
`;

export const ThumbnailHeading = styled.h2`
  ${getFont("medium", 8, 14)};
  color: ${colors.grayScale[1]};
  text-transform: uppercase;
  letter-spacing: 2.2px;
  line-height: 100%;
`;

// export const Paragraph = styled.p`
//   ${getFont("medium", 26, 40)};
//   color: ${colors.grayScale[1]};
//   text-align: center;
//   word-break: keep-all;
//   margin-top: 40px;

//   @media ${devices.md} {
//     margin: 0;
//     text-align: left;
//     word-break: normal;
//   }
// `;
