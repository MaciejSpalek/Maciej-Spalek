import { List, MainImageContainer } from "./PostList.styled";
import { PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";
import Image from "next/image";
import { usePostList } from "./usePostList";

export const PostList = ({ title, list, image }: PostListProps) => {
  const { imageRef, listRef } = usePostList();
  const router = useRouter();

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
      <PostPreview list={list} />
    </Section>
  );
};
