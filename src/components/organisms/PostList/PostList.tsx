import { Button, List, MainImageContainer } from "./PostList.styled";
import { PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animationParams } from "helpers";
import { gsap } from "gsap";

export const PostList = ({ title, list, image }: PostListProps) => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        ease: "ease",
        opacity: 0
      },
      {
        opacity: 1,
        duration: animationParams.duration,
        delay: 1,
        ease: "ease",
      }
    );
  });

  return (
    <Section title={title}>
      <MainImageContainer ref={imageRef}>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="image"
        />
      </MainImageContainer>
      <List>
        {list.map((post) => (
          <li key={post.id}>
            <PostCard onClick={openModal} {...post} />
          </li>
        ))}
      </List>
      <PostPreview list={list} />
    </Section>
  );
};
