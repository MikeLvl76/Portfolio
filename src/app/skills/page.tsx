"use client";

import { useMemo } from "react";
import SkillSection from "./skill-section";
import { useLocaleContext } from "@/components/providers";

type Section = {
  title: string;
  assetDirname: string;
};

export default function Page() {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent().skills;

  const sections: Section[] = useMemo(
    () => [
      {
        title: content.sections.languages.label,
        assetDirname: "languages",
      },
      {
        title: content.sections.frameworks.label,
        assetDirname: "frameworks",
      },
      {
        title: content.sections.db.label,
        assetDirname: "database",
      },
      {
        title: content.sections.tools.label,
        assetDirname: "tools",
      },
      {
        title: content.sections.libs.label,
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

  const skillSections = sections.map(({ title, assetDirname }, i) => (
    <SkillSection key={i} title={title} assetDirname={assetDirname} />
  ));

  return (
    <div className="flex flex-col items-start justify-start gap-2 sm:gap-4 max-w-full min-h-screen overscroll-y-auto dark:bg-slate-900">
      {...skillSections}
    </div>
  );
}
