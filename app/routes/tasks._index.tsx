import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Todo } from "~/types/todoTypes";
import { Circle, CircleCheckBig, Trash, Trash2 } from "lucide-react";
import { LOGICAL_OPERATORS } from "@babel/types";

export const loader = async () => {
  const response = await fetch(import.meta.env.VITE_URL);
  if (!response) throw new Response("Error fetching data", { status: 400 });
  const data = await response.json();
  return json({ todos: data });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const formEntries = Object.fromEntries(formData.entries());

  if (formEntries.hasOwnProperty("delete")) {
    const deleteId = formEntries["delete"];
    await fetch(`${import.meta.env.VITE_URL}/${deleteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  if (formEntries.hasOwnProperty("patch")) {
    const patchId = formEntries["patch"];
    const content = formEntries["content"];
    const completed = formEntries["status"];
    await fetch(`${import.meta.env.VITE_URL}/${patchId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        id: patchId,
        completed: completed !== "true",
        todo: content,
      }),
    });
  }
  return null;
};

const TasksActions = () => {
  const { todos } = useLoaderData<typeof loader>();
  return (
    <ul className="mt-4 shadow p-4 bg-white rounded leading-7">
      {todos?.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex gap-4 py-2 [&:not(:last-child)]:border border-transparent border-b-sky-400"
        >
          <Form method="patch" className="flex gap-2">
            <input hidden name="patch" defaultValue={todo.id} />
            <input hidden name="content" defaultValue={todo.todo} />
            <input
              hidden
              name="status"
              defaultValue={todo.completed ? "true" : "false"}
            />
            <button>
              {todo.completed ? (
                <CircleCheckBig className="text-green-600" />
              ) : (
                <Circle />
              )}
            </button>
            {todo.todo}
          </Form>

          <Form method="delete" className="ml-auto">
            <input
              hidden
              name="delete"
              defaultValue={todo.id}
              className="hidden"
            />
            <button>
              <Trash2 className="text-red-500" />
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
};

export const ErrorBoundary = () => {
  return <p className="mt-4">No Todos were found!</p>;
};

export default TasksActions;
