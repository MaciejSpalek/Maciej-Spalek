import { PostList, Sections } from "components/organisms";
import { Container } from "./Craft.styled";

export const Craft = ({ craft, sections, posts }) => {
  const { title, image } = craft;
  return (
    <Container>
      <PostList title={title} list={posts} image={image} />
      <Sections sections={sections} />
    </Container>
  );
};
