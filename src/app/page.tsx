"use client";

import { useLocaleContext } from "@/components/providers";

export default function Home() {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent();

  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-full min-h-screen dark:bg-slate-900">
      <h1 className="text-4xl sm:text-6xl font-bold dark:text-slate-100">
        {content.home.h1.label}
      </h1>
      <p className="text-base sm:text-xl p-2 text-pretty dark:text-slate-100">
        {content.home.text.label}
      </p>
    </div>
  );
}
