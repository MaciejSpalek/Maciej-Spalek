import styled from "styled-components";
import { colors, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.header`
  ${flexColumn};
  align-items: flex-start;
  gap: 32px;
`;

export const ArticlesContainer = styled.header`
  ${flexColumn};
  gap: 16px;
  width: 100%;
`;
export const ArticleThumbnail = styled.div`
  ${flexRow};
  align-items: start;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1/1;
  width: 100%;
  max-width: 200px;
  border-radius: 12px;
`;
export const DescriptionWrapper = styled.div`
  ${flexColumn};
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  color: ${colors.grayScale[2]};
  margin: 0;
  text-transform: uppercase;
`;

export const ThumbnailHeading = styled.h3`
  ${getFont("medium", 16)};
  color: ${colors.grayScale[1]};
  text-transform: uppercase;
  letter-spacing: 2.2px;
  margin: 0;
`;

export const Description = styled.p`
  ${getFont("medium", 16)};
  color: ${colors.grayScale[2]};
  text-align: start;
  margin: 0;
`;
