import { ListCheckIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="p-4 bg-gray-300 flex justify-between">
      <div className="flex gap-2">
        <ListCheckIcon /> Todo App
      </div>
      <nav className="text-red-500">Links</nav>
    </header>
  );
}
