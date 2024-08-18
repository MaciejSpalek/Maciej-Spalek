/* eslint-disable react/display-name */
import React, { forwardRef, useRef, useState } from "react";
import Image from "next/image";

import { IInput } from "./ImageUploader.model";
import {
  StyledDownloadIcon,
  HiddenWrapper,
  ImageWrapper,
  StyledButton,
  Container,
  Input,
  ButtonContainer,
  FileButton,
  FileImageWrapper,
  SmallDownloadIcon,
} from "./ImageUploader.styled";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";

export const ImageUploader = forwardRef<HTMLDivElement, IInput>(
  ({ id, setValue, buttonStyle, defaultValue = null }: IInput, ref) => {
    const [image, setImage] = useState<string>(defaultValue?.toString());
    const hiddenFileInput = useRef(null);

    const handleClick = () => {
      hiddenFileInput.current.click();
    };

    const handleChange = async (event) => {
      const file = event.target.files[0];
      const formData = new FormData();

      formData.append("file", file);

      const { data: imageUrl } = await axiosInstance.post(
        ENDPOINTS.IMAGE.UPLOAD,
        formData,
        {
          headers: {
            "Content-Type": "multipart-form",
          },
        }
      );

      setValue(id, imageUrl);

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result as string);
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
  }
);
