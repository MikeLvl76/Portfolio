"use client";

import SkillSection from "./skill-section";

type Section = {
  title: string;
  assetDirname: string;
};

const sections: Section[] = [
  {
    title: "Languages",
    assetDirname: "languages",
  },
  {
    title: "Frameworks",
    assetDirname: "frameworks",
  },
  {
    title: "Database",
    assetDirname: "database",
  },
  {
    title: "Tools",
    assetDirname: "tools",
  },
  {
    title: "Librairies",
    assetDirname: "librairies",
  },
];

export default function Page() {
  const skillSections = sections.map(({ title, assetDirname }, i) => (
    <SkillSection key={i} title={title} assetDirname={assetDirname} />
  ));

  return (
    <div className="flex flex-col items-start justify-start gap-2 sm:gap-4 max-w-full min-h-screen overscroll-y-auto">
      {...skillSections}
    </div>
  );
}
