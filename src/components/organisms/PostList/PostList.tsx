import React from "react";
import Masonry from "react-masonry-css";

import { Button, Item } from "./PostList.styled";

import { PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";

import { PostListProps } from "./PostList.model";

const columns = {
  default: 3,
  768: 2,
  600: 1,
};

export const PostList = ({ title, loading, list, onClick }: PostListProps) => {
  const postIds = list?.map(({ id }) => id);

  return (
    <Section title={title} isLoading={loading}>
      <Masonry
        breakpointCols={columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {list?.map(({ image, id, title, date }) => (
          <Item key={id}>
            <Button onClick={() => onClick(id)}>
              <PostCard image={image} title={title} date={date} />
            </Button>
          </Item>
        ))}
      </Masonry>
      <PostPreview postIds={postIds} />
    </Section>
  );
};
