import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "My projects",
  description: "See my projects and try them if possible",
};

export default function Layout({ children }: Props) {
  return <div className="flex max-w-screen min-h-screen dark:bg-slate-900">{children}</div>;
}
