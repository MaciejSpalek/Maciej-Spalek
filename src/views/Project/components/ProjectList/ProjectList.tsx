import Masonry from "react-masonry-css";
import { Image, Item, Button } from "./ProjectList.styled";

const columns = {
  default: 3,
  1000: 2,
  700: 1,
};

export const ProjectList = ({ list, loading, error, onClick }) => {
  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Masonry
      breakpointCols={columns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {list.map((url, index) => (
        <Item key={url}>
          <Button onClick={() => onClick(index)}>
            <Image src={url} alt="" />
          </Button>
        </Item>
      ))}
    </Masonry>
  );
};
