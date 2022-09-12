import React from "react";

import { Button, Item } from "./PostList.styled";

import { PostCard } from "components";

import Masonry from "react-masonry-css";

interface IProps {
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

export const PostList = ({ loading, error, list, onClick }: IProps) => {
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
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
  );
};
