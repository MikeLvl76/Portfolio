"use client";

import { LabeledSection } from "@/components/labeled-section";
import { Locale } from "@/components/providers";
import { SimpleList } from "@/components/simple-list";
import { cn } from "@/lib/utils";

type Props = {
  lists: Locale["content"]["pages"]["about"]["lists"];
  className?: string;
};

export default function Sections({ lists, className }: Props) {
  const sections = lists.map(({ name, items }, i) => (
    <LabeledSection
      key={i}
      label={name}
      labelProps={{
        className:
          "text-base sm:text-lg font-semibold text-text-dark dark:text-text-light",
      }}
      className="flex flex-col gap-3 w-full sm:w-[48%] p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
    >
      <SimpleList
        items={items}
        renderItem={(item) => `• ${item}`}
        itemProps={{
          className:
            "text-sm sm:text-base text-text-dark dark:text-text-light leading-relaxed",
        }}
        className="space-y-2"
      />
    </LabeledSection>
  ));

  return <div className={cn(className)}>{sections}</div>;
}
