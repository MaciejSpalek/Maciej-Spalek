import { Button, List } from "./PostList.styled";
import { PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { PostListProps } from "./PostList.model";
import { useRouter } from "next/router";

export const PostList = ({ title, loading, list }: PostListProps) => {
  const postIds = list?.map(({ id }) => id);
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  return (
    <Section title={title} isLoading={loading}>
      <List>
        {list?.map(({ image, id, title, date }) => (
          <li key={id}>
            <Button onClick={() => openModal(id)}>
              <PostCard image={image} title={title} date={date} />
            </Button>
          </li>
        ))}
      </List>
      <PostPreview postIds={postIds} />
    </Section>
  );
};
