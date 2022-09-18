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
import { useQuery } from "@apollo/client";
import { GET_POST_QUERY } from "queries";
import _ from "lodash";
import { convertPreview } from "helpers";

export const PostPreview = ({ postIds }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  let currentPostId = router.query.photo;
  const currentIndex = postIds?.indexOf(currentPostId);

  const { data: previewData } = useQuery(GET_POST_QUERY, {
    variables: {
      id: currentPostId,
    },
  });

  const preview = convertPreview(previewData);
  const { image, title, description } = preview || {};

  const closePreview = () => {
    router.query = _.omit(router.query, "photo");
    router.push(router);
  };

  useOutsideClick(modalRef, () => {
    closePreview();
  });

  const changePhoto = (type = "increment") => {
    if (type === "increment") {
      router.query.photo = postIds[currentIndex + 1];
    } else {
      router.query.photo = postIds[currentIndex - 1];
    }

    router.push(router);
  };

  const showChangePhotoButton = (type) => {
    if (type === "increment") {
      return currentIndex < postIds?.length - 1;
    } else {
      return currentIndex > 0;
    }
  };

  const isLeftArrowButtonVisible = showChangePhotoButton("decrement");
  const isRightArrowButtonVisible = showChangePhotoButton("increment");

  const isOpen = null != router.query.photo && null != postIds;

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
            <Button onClick={closePreview}>
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
