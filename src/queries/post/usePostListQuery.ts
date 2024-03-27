import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "helpers/endpoints";
import { QUERY_KEYS } from "helpers/queryKeys";
import { axiosInstance } from "services/axiosClient";
import { IPost, PostType } from "types";

interface IProps {
  type?: PostType;
}

export const usePostListQuery = (filters: IProps) => {
  const getPosts = async ({ queryKey }): Promise<{ data: IPost[] }> => {
    const filters = queryKey[0][1];
    return await axiosInstance.get(ENDPOINTS.POST.LIST(filters));
  };

  const { data, isFetching, isError, refetch } = useQuery<{ data: IPost[] }>({
    queryKey: [QUERY_KEYS.POST.LIST(filters)],
    queryFn: getPosts,
  });

  const fetchedData = data?.data;

  console.log(fetchedData);
  return {
    data: fetchedData,
    refetch,
    isFetching,
    isError,
  };
};
