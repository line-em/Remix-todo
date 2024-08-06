import { Link, Outlet } from "@remix-run/react";
import LinkButton from "~/components/LinkButton";

const TasksRoute = () => {
  return (
    <main className="px-4">
      <div className="flex items-center justify-between max-w-[80ch] md:mx-auto">
        <h1 className="font-extrabold text-3xl text-orange-500">Tasks</h1>
        <LinkButton to="add">Add a Task</LinkButton>
      </div>
      <Outlet />
    </main>
  );
};

export default TasksRoute;
