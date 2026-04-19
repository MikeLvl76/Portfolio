import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Fill the form to contact me and maybe I will respond (if I don't forget to)",
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex max-w-screen min-h-screen dark:bg-slate-900">
      {children}
    </div>
  );
}
