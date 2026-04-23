"use client";

import { LabeledSection } from "@/components/labeled-section";
import { cn } from "@/lib/utils";
import ProjectsList from "./projects-list";

type Section = {
  name: string;
  assetDirname: string;
};

type Props = {
  sections: Section[];
  className: string;
};

export default function ProjectSections({ sections, className }: Props) {
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
          className="flex flex-col gap-3 w-full p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
        >
          <ProjectsList assetDirname={assetDirname} />
        </LabeledSection>
      ))}
    </div>
  );
}
