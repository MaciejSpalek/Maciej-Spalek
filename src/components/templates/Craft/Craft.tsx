import { PostList } from "components/organisms";
import { Sections } from "views/Home/components";
import { Container } from "./Craft.styled";

export const Craft = ({ craft, sections }) => {
  const { title, image, posts } = craft;
  return (
    <Container>
      <PostList title={title} list={posts} image={image} />
      <Sections sections={sections} />
    </Container>
  );
};
