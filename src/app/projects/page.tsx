"use client";

import ProjectSection from "./project-section";

type Section = {
  title: string;
  assetDirname: string;
};

const sections: Section[] = [
  {
    title: "JavaScript",
    assetDirname: "js",
  },
  {
    title: "TypeScript",
    assetDirname: "ts",
  },
  {
    title: "Python",
    assetDirname: "python",
  },
  {
    title: "Java",
    assetDirname: "java",
  },
];

export default function Page() {
  const projectSections = sections.map(({ title, assetDirname }, i) => (
    <ProjectSection key={i} title={title} assetDirname={assetDirname} />
  ));

  return (
    <div className="flex flex-col items-start justify-start gap-2 sm:gap-4 pt-4 sm:pt-6 max-w-full min-h-screen overscroll-y-auto dark:bg-slate-900">
      {...projectSections}
    </div>
  );
}
