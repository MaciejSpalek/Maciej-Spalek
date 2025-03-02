import { Article as ArticleView } from "views";
import { IArticle } from "types";

interface ArticleProps {
  data: IArticle;
}

const Article = ({ data }: ArticleProps) => <ArticleView data={data} />;

export default Article;

export async function getServerSideProps(ctx: any) {
  try {
    const articleResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article/${ctx.params.id}`
    );

    const article = await articleResponse.json();

    return {
      props: {
        data: article?.data,
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
