import { GetServerSidePropsContext } from "next";
import { Article as ArticleView } from "views";
import { IArticle } from "types";
import { URLS } from "helpers";

interface ArticleProps {
  data: IArticle;
}

const Article = ({ data }: ArticleProps) => <ArticleView data={data} />;

export default Article;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    const articleResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article/${ctx?.params?.id}`
    );

    const { data } = await articleResponse.json();

    if (null == data) {
      return {
        redirect: {
          destination: URLS.home,
          permanent: false,
        },
      };
    }
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
}
