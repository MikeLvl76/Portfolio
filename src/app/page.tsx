"use client";

import { useLocaleContext } from "@/components/providers/locale-provider";

export default function Home() {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent();

  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-full min-h-80">
      <h1 className="text-4xl sm:text-6xl font-bold">
        {content.home.h1.label}
      </h1>
      <p className="text-base sm:text-xl p-2 text-pretty">
        {content.home.text.label}
      </p>
    </div>
  );
}
