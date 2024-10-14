import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetTodos = () => {
  const getTodos = ({ pageParam }) =>
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`);

  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["getTodos"],
    queryFn: getTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allpages) => {
      const nextPage = lastPage.data.length ? allpages.length + 1 : undefined;
      return nextPage;
    },
  });

  return {
    data: data?.pages,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetTodos;
