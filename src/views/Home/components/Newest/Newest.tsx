import React, { useEffect, useState } from "react";
import { Wrapper, Container, ListItem, List } from "./Newest.styled";
import { Section } from "layouts/Section";
import { GET_NEWEST_POSTS_QUERY } from "queries";
import { convertPosts } from "helpers";
import { useQuery } from "@apollo/client";
import { PostTypes } from "types";
import Image from "next/image";
import { Button } from "components";
import { useRouter } from "next/router";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const Newest = () => {
  const [isSectionVisible, setVisibleState] = useState(false);
  const { visible, ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const router = useRouter();

  useEffect(() => {
    if (visible) {
      setVisibleState(true);
    }
    //eslint-disable-next-line
  }, [visible]);

  const { data, loading } = useQuery(GET_NEWEST_POSTS_QUERY, {
    variables: { type: PostTypes.painting },
    skip: !isSectionVisible,
  });

  const newest = convertPosts(data?.posts?.data);

  const handleOnClick = () => router.push("/paintings");

  return (
    <Wrapper ref={ref}>
      <Section title="Najnowsze obrazy" isLoading={loading}>
        <Container>
          <List>
            {newest?.map(({ id, image, title }) => (
              <ListItem key={id}>
                <Image
                  quality={100}
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              </ListItem>
            ))}
          </List>
          <Button outline onClick={handleOnClick}>
            Więcej
          </Button>
        </Container>
      </Section>
    </Wrapper>
  );
};
