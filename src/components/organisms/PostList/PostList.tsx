import React from "react";

import {
  Button,
  Item,
  HeadingWrapper,
  Heading,
  Container,
} from "./PostList.styled";

import { PostCard, PostPreview } from "components";

import Masonry from "react-masonry-css";
import { Section } from "layouts/Section";

interface IProps {
  title: string;
  loading: boolean;
  error: string;
  list: any[];
  onClick?: (id: string) => void;
}

const columns = {
  default: 3,
  768: 2,
  600: 1,
};

export const PostList = ({ title, loading, error, list, onClick }: IProps) => {
  const postIds = list?.map(({ id }) => id);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <Section title={title}>
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
