import styled from "styled-components";
import { devices } from "../../../theme";

interface ImageContainerProps {
	ratio: number;
	zoom: number;
	zoomActive: boolean;
	posX: number;
	posY: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;
	overflow: hidden;
	width: 100%;
	aspect-ratio: ${({ ratio }) => ratio};

	img {
		will-change: transform, transform-origin;
		transform: ${({ zoomActive, zoom }) =>
			zoomActive ? `scale(${zoom})` : "scale(1)"};
		transform-origin: ${({ posX, posY }) => `${posX}% ${posY}%`};
	}

	@media ${devices.md} {
		max-width: 400px;
	}
`;
