import Image from "next/image";
import { useState } from "react";
import type { ZoomImageProps } from "./ZoomImage.model";
import { ImageContainer } from "./ZoomImage.styled";

export const ZoomImage = ({ src, alt }: ZoomImageProps) => {
	const [ratio, setRatio] = useState(1);
	const [pos, setPos] = useState({ x: 50, y: 50 });
	const [zoomActive, setZoomActive] = useState(false);

	const zoom = 2.5;

	const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;

		setPos({ x, y });
	};

	return (
		<ImageContainer
			ratio={ratio}
			onMouseMove={handleOnMouseMove}
			onMouseEnter={() => setZoomActive(true)}
			onMouseLeave={() => setZoomActive(false)}
			zoom={zoom}
			zoomActive={zoomActive}
			posX={pos.x}
			posY={pos.y}
		>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				objectFit="cover"
				onLoadingComplete={({ naturalWidth, naturalHeight }) =>
					setRatio(naturalWidth / naturalHeight)
				}
				priority
			/>
		</ImageContainer>
	);
};
