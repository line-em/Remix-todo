import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Todo } from "~/types/todoTypes";

export const loader = async () => {
  const response = await fetch(
    "https://66b22eb41ca8ad33d4f6dcc6.mockapi.io/todos"
  );
  if (!response) throw new Response("Error fetching data", { status: 400 });
  const data = await response.json();
  return json({ todos: data });
};

// useFetcher

const TasksActions = () => {
  const { todos } = useLoaderData<typeof loader>();
  return (
    <ul className="mt-4 shadow p-4 bg-white rounded leading-7">
      {todos?.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex gap-4 py-2 [&:not(:last-child)]:border border-transparent border-b-sky-400"
        >
          <input
            type="checkbox"
            name="todo"
            id={`todo-${todo.id}`}
            className="cursor-pointer"
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.todo}
          </label>
          <button className="ml-auto">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export const ErrorBoundary = () => {
  return <p className="mt-4">No Todos were found!</p>;
};

export default TasksActions;
