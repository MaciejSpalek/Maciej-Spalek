import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  Container,
  ImageWrapper,
  AsideWrapper,
  TopWrapper,
  BottomWrapper,
  RightArrowButton,
  LeftArrowButton,
  Description,
  Title,
  Image,
  Button,
  Modal,
} from "./PostPreview.styled";
import { CloseSquareIcon } from "assets/svgComponents/CloseSquareIcon";
import { useOutsideClick } from "hooks/useOutsideClick/useOutsideClick";
import { RightBasicArrowIcon, LeftBasicArrowIcon } from "assets";

export const PostPreview = ({ data, close }) => {
  const { image, title, description } = data || {};

  const router = useRouter();

  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    close();
  });

  const changePhoto = (type = "increment") => {
    if (type === "increment") {
      router.query.photo++;
    } else {
      router.query.photo--;
    }

    router.push(router);
  };

  const showChangePhotoButton = (type) => {
    if (type === "decrement") {
      return router.query.photo > 1;
    } else {
      return router.query.photo < 100;
    }
  };

  const isLeftArrowButtonVisible = showChangePhotoButton("decrement");
  const isRightArrowButtonVisible = showChangePhotoButton("increment");

  const isOpen = null != router.query.photo && null != data;

  if (!isOpen) return null;

  return (
    <Container>
      <Modal ref={modalRef}>
        <ImageWrapper>
          <Image src={image} alt={title} />
        </ImageWrapper>
        <AsideWrapper>
          <TopWrapper>
            <Title>{title}</Title>
            <Button onClick={close}>
              <CloseSquareIcon />
            </Button>
          </TopWrapper>
          <BottomWrapper>
            <Description>{description}</Description>
          </BottomWrapper>
        </AsideWrapper>
        {isLeftArrowButtonVisible && (
          <LeftArrowButton onClick={() => changePhoto("decrement")}>
            <LeftBasicArrowIcon />
          </LeftArrowButton>
        )}
        {isRightArrowButtonVisible && (
          <RightArrowButton onClick={() => changePhoto("increment")}>
            <RightBasicArrowIcon />
          </RightArrowButton>
        )}
      </Modal>
    </Container>
  );
};
