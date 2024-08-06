import { Link } from "@remix-run/react";
import { ListCheckIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="p-4 bg-gray-200 flex justify-between shadow">
      <Link to={""} className="flex gap-2">
        <ListCheckIcon className="text-amber-500" /> todo.app
      </Link>
      <nav className="text-red-500">Links</nav>
    </header>
  );
}
