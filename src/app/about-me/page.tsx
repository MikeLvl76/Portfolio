"use client";

import { useLocaleContext } from "@/components/providers";

export default function Page() {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent().about;

  const List = ({ items }: { items: string[] }) => (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm sm:text-base text-text-dark dark:text-text-light leading-relaxed"
        >
          • {item}
        </li>
      ))}
    </ul>
  );

  const sections = content.lists.map(({ name, items }, i) => (
    <div
      key={i}
      className="flex flex-col gap-3 w-full sm:w-[48%] p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
    >
      <h3 className="text-base sm:text-lg font-semibold text-text-dark dark:text-text-light">
        {name}
      </h3>
      <List items={items} />
    </div>
  ));

  return (
    <div className="flex flex-col gap-10 p-6 sm:p-10 max-w-5xl mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-text-dark dark:text-text-light">
        {content.h1.label}
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
        {sections}
      </div>
    </div>
  );
}
