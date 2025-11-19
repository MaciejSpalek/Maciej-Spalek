import styled from "styled-components";
import {
	colors,
	devices,
	flexCenter,
	flexColumn,
	flexRow,
	getFont,
} from "theme";

export const TopContainer = styled.div`
    ${flexColumn};
    gap: 64px;
`;

export const Container = styled.div`
    ${flexColumn};
    margin-top: 32px;

    @media ${devices.md} {
        ${flexRow};
        gap: 24px;
    }
`;

export const ImageContainer = styled.div<{ ratio: number }>`
    ${flexCenter};
    position: relative;
    width: 100%;
    aspect-ratio: ${({ ratio }) => ratio};
    overflow: hidden;
    border-radius: 12px;
    
    @media ${devices.md} {
        max-width: 400px;
    }
`;

export const Wrapper = styled.div`
    ${flexColumn};
    align-items: center;
    margin-top: 32px;
    gap: 32px;
    
    @media ${devices.md} {
        margin-top: 0;
        align-items: flex-start;
    }
`;

export const DescriptionWrapper = styled.div`
    ${flexColumn};
    align-items: center;
    gap: 8px;

    @media ${devices.md} {
        align-items: flex-start;
    }
`;
export const ButtonWrapper = styled.div`
    ${flexRow};
    justify-content: center;
    gap: 8px;

    @media ${devices.md} {
        justify-content: flex-start;
    }
`;

export const SimilarPaintingsWrapper = styled.div`
    ${flexColumn};
    align-items: flex-start;
`;

export const Heading = styled.h1`
    color: ${colors.grayScale[1]};
    ${getFont("medium", 24)};
    text-transform: uppercase;
    text-align: start;
`;
export const SimilarPaintingsText = styled.h2`
    ${getFont("regular", 12, 22)};
    letter-spacing: 7.2px;
    line-height: 32px;
    color: ${colors.grayScale[2]};
    text-transform: uppercase;
`;

export const Paragraph = styled.p`
    color: ${colors.grayScale[1]};
    ${getFont("regular", 18)};
    text-align: justify;
    margin: 0
`;
