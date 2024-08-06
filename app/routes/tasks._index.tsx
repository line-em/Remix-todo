import { json } from "@remix-run/node";
import LinkButton from "~/components/LinkButton";

export const loader = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!data) throw new Response("Error fetching data", { status: 400 });
  return json({ data });
};

const TasksActions = () => {
  return <section></section>;
};

export default TasksActions;
