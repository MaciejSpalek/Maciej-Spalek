import { PostList, Sections } from "components/organisms";
import { IPost, ISection } from "types";
import { Container } from "./Craft.styled";

interface ICraft {
  sections: ISection[];
  craft: ISection;
  posts: IPost[];
  postsAmount: number;
}

export const Craft = ({ craft, sections, posts, postsAmount }: ICraft) => {
  const { title, image, type } = craft;

  return (
    <Container>
      <PostList title={title} initialList={posts} image={image} type={type} postsAmount={postsAmount}/>
      <Sections sections={sections} />
    </Container>
  );
};
