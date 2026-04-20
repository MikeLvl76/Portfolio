"use client";

import { useLocaleContext } from "@/components/providers";

export default function Home() {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent();

  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-full min-h-screen bg-bg-light dark:bg-bg-dark">
      <h1 className="text-4xl sm:text-6xl font-bold text-text-dark dark:text-text-light">
        {content.home.h1.label}
      </h1>
      <p className="text-base sm:text-xl p-2 text-pretty text-text-dark dark:text-text-light">
        {content.home.text.label}
      </p>
    </div>
  );
}
