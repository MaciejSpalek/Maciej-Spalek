import React from "react";
import {
  DescriptionWrapper,
  ImageWrapper,
  Container,
  Description,
  LinkContent,
} from "./PostCard.styled";
import { IPostCard, PostStates } from "types";
import Image from "next/image";
import { URLS } from "helpers";
import Link from "next/link";

export const PostCard = ({
  image,
  description,
  id,
  onClick,
  state,
}: IPostCard) => {
  const isMakeOfferLinkVisible = state === PostStates.available;
  const href = `${URLS.contact}?id=${id}`;

  return (
    <Container>
      <ImageWrapper onClick={() => onClick(id)}>
        <Image src={image} alt="title" layout="fill" objectFit="cover" />
      </ImageWrapper>

      <DescriptionWrapper>
        <Description>{description}</Description>
        {isMakeOfferLinkVisible && (
          <Link href={href}>
            <LinkContent>make offer</LinkContent>
          </Link>
        )}
      </DescriptionWrapper>
    </Container>
  );
};
