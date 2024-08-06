import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ListCheckIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="px-4">
      <Link to={"/tasks"}>Go to your Tasks</Link>
    </main>
  );
}
