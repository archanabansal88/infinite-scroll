import useGetTodos from "../hooks/use-get-todos";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ToDoList = () => {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetTodos();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>{error.message}</div>;

  return (
    <div className="todo-container">
      {data?.map((todos) =>
        todos.data.map((todo) => (
          <div key={todo.id} className="todo-card">
            <div>{todo.id}</div>
            <div>{todo.title}</div>
          </div>
        ))
      )}
      {/* <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More..."
          : "Nothing more to Load"}
      </button> */}
      <div ref={ref}>{isFetchingNextPage && "Loading...."}</div>
    </div>
  );
};

export default ToDoList;
