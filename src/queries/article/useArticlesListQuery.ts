import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { QUERY_KEYS } from "helpers/queryKeys";
import { IArticle } from "types";

export const useArticlesListQuery = () => {
  const getArticleList = async (): Promise<{ data: IArticle[] }> => {
    return await axiosInstance.get(ENDPOINTS.ARTICLE.LIST);
  };

  const { data, isFetching, isError, refetch } = useQuery<{ data: IArticle[] }>(
    {
      queryKey: [QUERY_KEYS.ARTICLE.LIST],
      queryFn: getArticleList,
    }
  );

  const fetchedData = data?.data || null;

  return {
    data: fetchedData,
    refetch,
    isFetching,
    isError,
  };
};
