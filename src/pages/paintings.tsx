import React from "react";
import { Craft } from "components";
import { ICraftPage, PostTypes } from "types";

interface IPaintings {
  data: ICraftPage;
}

const Paintings = ({ data }: IPaintings) => <Craft {...data} />;

export default Paintings;

export async function getServerSideProps() {
  try {
    const craftResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/craft/get/${PostTypes.painting}`
    );
    
    const sectionsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/craft/get-all`
    );

    const postsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/list?type=${PostTypes.painting}&limit=10`
    );

    const postsAmountResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/amount?type=${PostTypes.painting}`
    );

    if (!craftResponse.ok) {
      return {
        notFound: true,
      };
    }

    const postsAmount = await postsAmountResponse.json();
    const sections = await sectionsResponse.json();
    const craft = await craftResponse.json();
    const posts = await postsResponse.json();

    return {
      props: {
        data: { sections, craft, posts, postsAmount },
      },
    };
  } catch (error) {

    return {
      props: {
        data: { craft: {}, sections: [], postsAmount: 0 },
      },
    };
  }
}
