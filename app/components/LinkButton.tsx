import { Link } from "@remix-run/react";
import { ReactNode } from "react";

const LinkButton = ({
  to = "",
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="bg-amber-500 px-2 py-1 rounded text-white shadow hover:bg-amber-700 transition-colors"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
