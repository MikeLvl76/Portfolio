"use client";

import { LabeledSection } from "@/components/labeled-section";
import { useLocale } from "@/components/providers";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import SkillList from "./skills-list";

type Section = {
  name: string;
  assetDirname: string;
};

type Props = {
  className?: string;
};

export default function SkillSections({ className }: Props) {
  const { getLocalePagesContent } = useLocale();
  const content = getLocalePagesContent().skills;

  const sections: Section[] = useMemo(
    () => [
      {
        name: content.sections.languages.label,
        assetDirname: "languages",
      },
      {
        name: content.sections.frameworks.label,
        assetDirname: "frameworks",
      },
      {
        name: content.sections.db.label,
        assetDirname: "database",
      },
      {
        name: content.sections.tools.label,
        assetDirname: "tools",
      },
      {
        name: content.sections.libs.label,
        assetDirname: "librairies",
      },
    ],
    [
      content.sections.db.label,
      content.sections.frameworks.label,
      content.sections.languages.label,
      content.sections.libs.label,
      content.sections.tools.label,
    ]
  );

  return (
    <div className={cn(className)}>
      {sections.map(({ name, assetDirname }, i) => (
        <LabeledSection
          key={i}
          label={name}
          labelProps={{
            className:
              "text-base sm:text-lg font-semibold text-text-dark dark:text-text-light",
          }}
          className="flex flex-col gap-3 w-full sm:w-[48%] p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
        >
          <SkillList assetDirname={assetDirname} />
        </LabeledSection>
      ))}
    </div>
  );
}
