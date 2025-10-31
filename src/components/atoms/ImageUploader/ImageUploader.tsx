import { ENDPOINTS } from "helpers/endpoints";
import Image from "next/image";
import type React from "react";
import { forwardRef, useRef, useState } from "react";
import { axiosInstance } from "services/axiosClient";
import type { IInput } from "./ImageUploader.model";
import {
	ButtonContainer,
	Container,
	FileButton,
	FileImageWrapper,
	HiddenWrapper,
	ImageWrapper,
	Input,
	SmallDownloadIcon,
	StyledButton,
	StyledDownloadIcon,
} from "./ImageUploader.styled";

export const ImageUploader = forwardRef<HTMLDivElement, IInput>(
	({ id, setValue, buttonStyle, defaultValue = "" }: IInput, ref) => {
		const [image, setImage] = useState<string>(defaultValue?.toString());
		const hiddenFileInput = useRef<HTMLInputElement>(null);

		const handleClick = () => {
			hiddenFileInput?.current?.click();
		};

		const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target?.files?.[0];
			const formData = new FormData();

			formData.append("file", file as File);

			const { data: imageUrl } = await axiosInstance.post(
				ENDPOINTS.IMAGE.UPLOAD,
				formData,
				{
					headers: {
						"Content-Type": "multipart-form",
					},
				},
			);

			setValue(id, imageUrl);

			if (file?.type.startsWith("image/")) {
				const reader = new FileReader();
				reader.onload = (e) => {
					setImage(e.target?.result as string);
				};

				reader.readAsDataURL(file);
			}
		};

		if (buttonStyle) {
			return (
				<ButtonContainer ref={ref}>
					<FileButton type="button" onClick={handleClick}>
						<FileImageWrapper>
							{image ? (
								<Image
									src={image}
									loading="eager"
									alt={id}
									layout="fill"
									objectFit="cover"
									objectPosition="center"
								/>
							) : (
								<SmallDownloadIcon />
							)}
						</FileImageWrapper>
						{image ? "Uploaded" : "Upload file"}
					</FileButton>
					<Input type="file" onChange={handleChange} ref={hiddenFileInput} />
				</ButtonContainer>
			);
		}

		return (
			<Container ref={ref}>
				<HiddenWrapper>
					<StyledButton type="button" onClick={handleClick}>
						<StyledDownloadIcon />
					</StyledButton>
				</HiddenWrapper>
				<ImageWrapper>
					{image && (
						<Image
							src={image}
							loading="eager"
							alt={id}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					)}
				</ImageWrapper>
				<Input type="file" onChange={handleChange} ref={hiddenFileInput} />
			</Container>
		);
	},
);
