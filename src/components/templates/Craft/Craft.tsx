import { PostList, Sections } from "components/organisms";
import { IPost, ISection } from "types";
import { Container } from "./Craft.styled";

interface ICraft {
  craft: ISection;
  sections: ISection[];
  posts: IPost[];
}

export const Craft = ({ craft, sections, posts }: ICraft) => {
  const { title, image, type } = craft;

  return (
    <Container>
      <PostList title={title} initialList={posts} image={image} type={type} />
      <Sections sections={sections} />
    </Container>
  );
};
