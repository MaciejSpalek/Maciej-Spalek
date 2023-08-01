import React from "react";
import { PostList, Sections } from "components";

export const Drawings = ({ posts, loading }) => {
  return (
    <>
      <PostList title="Rysunek" loading={loading} list={posts} />
      <Sections hiddenSectionName="Rysunek" />
    </>
  );
};
