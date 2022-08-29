import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "queries";

import { List } from "./PostList.styled";

import { PostCard } from "../../components";

export const PostList = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS);

  const characters = data?.characters.results;

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <List>
      {characters.map(({ image, id }) => (
        <li key={id}>
          <PostCard image={image} />
        </li>
      ))}
    </List>
  );
};
