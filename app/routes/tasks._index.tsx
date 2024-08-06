import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Todo } from "~/types/todoTypes";

export const loader = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  if (!response) throw new Response("Error fetching data", { status: 400 });
  const data = await response.json();
  return json({ todos: data });
};

const TasksActions = () => {
  const { todos } = useLoaderData<typeof loader>();
  console.log(todos);
  return (
    <ul className="mt-4 shadow p-4 bg-white rounded leading-7">
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex gap-4 py-2 [&:not(:last-child)]:border border-transparent border-b-sky-400"
        >
          <input type="checkbox" name="todo" id={`todo-${todo.id}`} />
          {todo.title}
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
