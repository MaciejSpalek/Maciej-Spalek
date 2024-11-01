import { PostList, Sections } from "components/organisms";
import { Container } from "./Craft.styled";
import { ICraftPage } from "types";

export const Craft = ({ craft, sections, posts, postsAmount }: ICraftPage) => {
  const { title, image, type } = craft;
  console.log(posts);
  return (
    <Container>
      <PostList
        postsAmount={postsAmount}
        initialList={posts}
        title={title}
        image={image}
        type={type}
      />
      <Sections sections={sections} />
    </Container>
  );
};
