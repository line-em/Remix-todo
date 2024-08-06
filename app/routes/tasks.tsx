import { Link, Outlet } from "@remix-run/react";

const TasksRoute = () => {
  return (
    <main className="px-4">
      <h1 className="font-extrabold text-3xl text-orange-500">Tasks</h1>
      <Outlet />
    </main>
  );
};

export default TasksRoute;
