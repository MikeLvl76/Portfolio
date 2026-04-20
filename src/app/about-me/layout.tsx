import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "About me",
  description: "This page is about my life and my experiences",
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex max-w-screen min-h-screen bg-bg-light dark:bg-bg-dark">
      {children}
    </div>
  );
}
