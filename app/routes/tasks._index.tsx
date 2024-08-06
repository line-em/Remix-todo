import { Link, Outlet } from "@remix-run/react";

const TasksActions = () => {
  return (
    <section>
      <Link to={"add"}>Add</Link>
    </section>
  );
};

export default TasksActions;
