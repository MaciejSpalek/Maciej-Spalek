import { useQuery } from "@tanstack/react-query";
import { getQueryParams } from "helpers";
import { ENDPOINTS } from "helpers/endpoints";
import { QUERY_KEYS } from "helpers/queryKeys";
import { axiosInstance } from "services/axiosClient";
import type { IArticle } from "types";

interface IProps {
	filters?: {
		[key: string]: string | number | boolean | undefined;
	};
}
export const useArticlesListQuery = ({ filters = {} }: IProps) => {
	const getArticleList = async (): Promise<{ data: IArticle[] }> => {
		const queryParams = getQueryParams(filters);
		return await axiosInstance.get(ENDPOINTS.ARTICLE.LIST(queryParams));
	};

	const { data, isFetching, isError, refetch } = useQuery<{ data: IArticle[] }>(
		{
			queryKey: [QUERY_KEYS.ARTICLE.LIST({ filters })],
			queryFn: getArticleList,
		},
	);

	const fetchedData = data?.data || null;

	return {
		data: fetchedData,
		refetch,
		isFetching,
		isError,
	};
};
