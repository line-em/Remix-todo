import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import Header from "~/components/Header";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Todo</title>
      </head>
      <body className="w-full h-screen flex flex-col bg-gray-100 text-teal-950 gap-4">
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <footer className="px-4 pb-4">Copyright X</footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
