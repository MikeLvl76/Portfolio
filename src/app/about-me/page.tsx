"use client";

import { useLocale } from "@/components/providers";
import Sections from "./sections";

export default function Page() {
  const { getLocalePagesContent } = useLocale();
  const content = getLocalePagesContent().about;

  return (
    <div className="flex flex-col gap-10 p-6 sm:p-10 max-w-5xl mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-text-dark dark:text-text-light">
        {content.h1.label}
      </h2>
      <Sections
        lists={content.lists}
        className="flex flex-col sm:flex-row sm:flex-wrap gap-6"
      />
    </div>
  );
}
