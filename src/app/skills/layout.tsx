import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "My skills",
  description: "See the technologies I use to do programming",
};

export default function Layout({ children }: Props) {
  return <div className="flex max-w-screen min-h-screen">{children}</div>;
}
