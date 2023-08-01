import { PostList, Sections } from "components";

export const Paintings = ({ posts, loading }) => {
  return (
    <>
      <PostList title="Obrazy" loading={loading} list={posts} />
      <Sections hiddenSectionName="Obrazy" />
    </>
  );
};
