import { useState } from "react";
import Image from "next/image";

import { List, MainImageContainer } from "./PostList.styled";
import { Button, PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";
import { usePostList } from "./usePostList";
import { usePostListQuery } from "queries";
import { IPost } from "types";

export const PostList = ({
  hideDescription,
  initialList,
  postsAmount,
  title,
  image,
  type,
}: PostListProps) => {
  const [enabled, setEnabled] = useState(false);
  const { imageRef, listRef } = usePostList();
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  const filters = { type, limit };
  const { data: fetchedList, isFetching } = usePostListQuery({
    filters,
    enabled,
  });

  const list = fetchedList || initialList || [];
  const isLoadingMoreButtonVisible = null != postsAmount && postsAmount >= limit;

  const handleOnButton = () => {
    setLimit((prev) => (prev += 10));
    setEnabled(true);
  };

  const openModal = (id: IPost["_id"]) => {
    router.query.photo = id;
    router.push(router, undefined, { shallow: true });
  };

  return (
    <Section title={title}>
      {null != image && <MainImageContainer ref={imageRef}>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          loading="eager"
          priority
        />
      </MainImageContainer>}\

      <List ref={listRef}>
        {list.map((post) => (
          <li key={post._id}>
            <PostCard onClick={openModal} hideDescription={hideDescription} {...post} />
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
