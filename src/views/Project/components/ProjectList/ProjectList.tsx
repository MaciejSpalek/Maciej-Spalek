import {
  Item,
  Title,
  Container,
  List,
  ItemTitle,
  ImageWrapper,
  ItemDescription,
} from "./ProjectList.styled";
import Image from "next/image";

export const ProjectList = ({ list, loading, title, error }) => {
  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {list.map(({ id, title, description, image }, index) => (
          <Item key={id}>
            <ImageWrapper>
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <div>
              <ItemTitle>
                {index + 1}. {title}
              </ItemTitle>
              <ItemDescription>{description}</ItemDescription>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};
