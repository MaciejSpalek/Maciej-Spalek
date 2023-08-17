import { Button, List, MainImageContainer } from "./PostList.styled";
import { PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";
import Image from "next/image";

export const PostList = ({ title, list, image }: PostListProps) => {
  const postIds = list?.map(({ id }) => id);
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  return (
    <Section title={title}>
      <MainImageContainer>
        <Image src={image} layout="fill" objectFit="cover" objectPosition={"bottom"} alt="image" />
      </MainImageContainer>
      <List>
        {list?.map(({ image, id, title }) => (
          <li key={id}>
            <Button onClick={() => openModal(id)}>
              <PostCard image={image} title={title} />
            </Button>
          </li>
        ))}
      </List>
      <PostPreview postIds={postIds}  list={list} />
    </Section>
  );
};
