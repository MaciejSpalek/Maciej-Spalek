import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import _ from "lodash";

import {
  RightArrowButton,
  LeftArrowButton,
  Container,
  ImageWrapper,
  Modal,
} from "./PostPreview.styled";
import { RightBasicArrowIcon, LeftBasicArrowIcon } from "assets";

import { useOutsideClick } from "hooks/useOutsideClick";
import { GET_POST_QUERY } from "queries";
import { convertPreview } from "helpers";
import { LoadingWrapper } from "components/molecules";
import { PostPreviewProps } from "./PostPreview.model";
import Image from "next/image";

export const PostPreview = ({ postIds }: PostPreviewProps) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const currentPostId = router.query.photo?.toString();
  const currentIndex = postIds?.indexOf(currentPostId);

  const { data: previewData, loading } = useQuery(GET_POST_QUERY, {
    variables: {
      id: currentPostId,
    },
  });

  const preview = convertPreview(previewData);
  const { image, title } = preview || {};

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
        {loading ? (
          <LoadingWrapper />
        ) : (
          <>
            <ImageWrapper>
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
                priority
                alt={title}
              />
            </ImageWrapper>
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
          </>
        )}
      </Modal>
    </Container>
  );
};
