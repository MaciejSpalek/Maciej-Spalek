import { useState } from "react";
import Image from "next/image";

import { List, MainImageContainer } from "./PostList.styled";
import { Button, PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";
import { usePostList } from "./usePostList";
import { usePostListQuery } from "queries";

export const PostList = ({
  initialList,
  title,
  image,
  type,
}: PostListProps) => {
  const filters = { type };
  const { imageRef, listRef } = usePostList();
  const [limit, setLimit] = useState(10);
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  const { data: fetchedList, isFetching } = usePostListQuery({
    filters,
    enabled,
    limit,
  });

  const list = fetchedList || initialList || [];
  const isLoadingMoreButtonVisible = list.length;

  const handleOnButton = () => {
    setLimit((prev) => (prev += 10));
    setEnabled(true);
  };

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  return (
    <Section title={title}>
      <MainImageContainer ref={imageRef}>
        <Image src={image} layout="fill" objectFit="cover" alt="image" />
      </MainImageContainer>
      <List ref={listRef}>
        {list.map((post) => (
          <li key={post._id}>
            <PostCard onClick={openModal} {...post} />
          </li>
        ))}
      </List>
      {isLoadingMoreButtonVisible && (
        <Button isLoading={isFetching} onClick={handleOnButton}>
          Load more
        </Button>
      )}
      <PostPreview list={list} />
    </Section>
  );
};
