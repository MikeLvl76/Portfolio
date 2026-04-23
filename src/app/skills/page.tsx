"use client";

import { useMemo } from "react";
import { useLocale } from "@/components/providers";
import SkillSection from "./skill-section";

type Section = {
  name: string;
  assetDirname: string;
};

export default function Page() {
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

  const skillsSections = sections.map(({ name, assetDirname }, i) => (
    <div
      key={i}
      className="flex flex-col gap-3 w-full sm:w-[48%] p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
    >
      <h3 className="text-base sm:text-lg font-semibold text-text-dark dark:text-text-light">
        {name}
      </h3>
      <SkillSection assetDirname={assetDirname} />
    </div>
  ));

  return (
    <div className="flex flex-col gap-10 p-6 sm:p-10 max-w-5xl mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* <h2 className="text-2xl sm:text-4xl font-bold text-center text-text-dark dark:text-text-light">
        {content.h1.label}
      </h2> */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
        {skillsSections}
      </div>
    </div>
  );
}
