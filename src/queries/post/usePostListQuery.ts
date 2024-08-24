import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { QUERY_KEYS } from "helpers/queryKeys";
import { IPost, IPostListFilters } from "types";
import { getQueryParams } from "helpers";

interface IProps {
  filters?: IPostListFilters;
  enabled?: boolean;
}

export const usePostListQuery = ({
  enabled = true,
  filters,
}: IProps) => {
  const getPosts = async (): Promise<{ data: IPost[] }> => {
    const queryParams = getQueryParams(filters);
    return await axiosInstance.get(ENDPOINTS.POST.LIST(queryParams));
  };

  const triggerParams = { 
    filters,
    enabled,
  };

  const { data, isFetching, isError, refetch } = useQuery<{ data: IPost[] }>({
    queryKey: [QUERY_KEYS.POST.LIST(triggerParams)],
    queryFn: getPosts,
    enabled,
  });

  const fetchedData = data?.data || null

  return {
    data: fetchedData,
    refetch,
    isFetching,
    isError,
  };
};
