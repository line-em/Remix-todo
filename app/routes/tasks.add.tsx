import { Form, redirect } from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const todo = formData.get("todo");
  if (typeof todo !== "string" || todo?.length < 5) {
    return json(
      {
        error: "Invalid data",
      },
      { status: 400 }
    );
  }

  await fetch("https://66b22eb41ca8ad33d4f6dcc6.mockapi.io/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      todo: todo,
      completed: false,
    }),
  });
  return redirect("/tasks");
};

const AddRoute = () => {
  return (
    <div>
      <h2 className="font-bold text-xl text-sky-700">Add a new task</h2>
      <Form
        method="post"
        className="mt-4 shadow p-4 flex flex-col align-center gap-4 bg-white rounded leading-7 md:min-w-[50ch]"
      >
        <label htmlFor="todo" className="font-bold">
          New Todo:
        </label>
        <textarea
          name="todo"
          id="todo"
          placeholder="Today I will..."
          className="border border-sky-700 rounded px-2 w-full"
        />
        <button
          type={"submit"}
          className="bg-amber-500 px-2 py-1 rounded text-white shadow hover:bg-amber-700 transition-colors"
        >
          Add Todo
        </button>
      </Form>
    </div>
  );
};

export default AddRoute;
