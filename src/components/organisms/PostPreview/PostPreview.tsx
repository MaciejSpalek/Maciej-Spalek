import React from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import {
  RightArrowButton,
  LeftArrowButton,
  Container,
  ImageWrapper,
  Modal,
  CloseIconButton,
} from "./PostPreview.styled";
import {
  CloseIcon,
  LeftRectangleArrowIcon,
  RightRectangleArrowIcon,
} from "assets";

import { PostPreviewProps } from "./PostPreview.model";
import Image from "next/image";

export const PostPreview = ({ list }: PostPreviewProps) => {
  const router = useRouter();

  const listIds = list.map(({ _id }) => _id);
  const currentPostId = router.query.photo?.toString();
  const currentIndex = listIds?.indexOf(currentPostId);
  const { image } = list?.find(({ _id }) => _id === currentPostId) || {};

  const closePreview = () => {
    router.query = _.omit(router.query, "photo");
    router.push(router);
  };

  const changePhoto = (type = "increment") => {
    if (type === "increment") {
      router.query.photo = listIds[currentIndex + 1];
    } else {
      router.query.photo = listIds[currentIndex - 1];
    }

    router.push(router);
  };

  const showChangePhotoButton = (type) => {
    if (type === "increment") {
      return currentIndex < listIds?.length - 1;
    } else {
      return currentIndex > 0;
    }
  };

  const isLeftArrowButtonVisible = showChangePhotoButton("decrement");
  const isRightArrowButtonVisible = showChangePhotoButton("increment");
  const isOpen = null != router.query.photo && null != listIds;

  if (!isOpen) return null;

  return (
    <Container>
      <CloseIconButton onClick={closePreview}>
        <CloseIcon />
      </CloseIconButton>
      <Modal>
        <ImageWrapper>
          <Image
            objectFit="contain"
            layout="fill"
            src={image}
            alt=""
            priority
          />
        </ImageWrapper>
        {isLeftArrowButtonVisible && (
          <LeftArrowButton onClick={() => changePhoto("decrement")}>
            <LeftRectangleArrowIcon />
          </LeftArrowButton>
        )}
        {isRightArrowButtonVisible && (
          <RightArrowButton onClick={() => changePhoto("increment")}>
            <RightRectangleArrowIcon />
          </RightArrowButton>
        )}
      </Modal>
    </Container>
  );
};
