import React from "react";
import { PostList, Sections } from "components";

export const Photography = ({ posts, loading }) => {
  return (
    <>
      <PostList title="Fotografia" loading={loading} list={posts} />
      <Sections hiddenSectionName="Fotografia" />
    </>
  );
};
