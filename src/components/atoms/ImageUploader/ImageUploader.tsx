/* eslint-disable react/display-name */
import React, { forwardRef, useRef, useState } from "react";

import Image from "next/image";

import { IInput } from "./ImageUploader.model";
import {
  StyledPreviewEyeIcon,
  StyledDownloadIcon,
  HiddenWrapper,
  ImageWrapper,
  StyledButton,
  Container,
  Input
} from "./ImageUploader.styled";

export const ImageUploader = forwardRef(
  ({ id, setValue, defaultValue = null }: IInput, ref) => {
    const [image, setImage] = useState<string>(defaultValue?.toString());
    const hiddenFileInput = useRef(null);

    const handleClick = () => {
      hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
      const file = event.target.files[0];

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result as any);
          setValue(id, e.target.result);
        };

        reader.readAsDataURL(file);
      }
    };

    return (
      <Container ref={ref}>
        <HiddenWrapper>
          <StyledButton type="button" onClick={handleClick}>
            <StyledPreviewEyeIcon />
          </StyledButton>
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
        <Input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
        />
      </Container>
    );
  }
);
