"use client";

import ProjectSection from "./project-section";

type Section = {
  name: string;
  assetDirname: string;
};

const sections: Section[] = [
  {
    name: "JavaScript",
    assetDirname: "js",
  },
  {
    name: "TypeScript",
    assetDirname: "ts",
  },
  {
    name: "Python",
    assetDirname: "python",
  },
  {
    name: "Java",
    assetDirname: "java",
  },
];

export default function Page() {
  const projectSections = sections.map(({ name, assetDirname }, i) => (
    <div
      key={i}
      className="flex flex-col gap-3 w-full p-4 rounded-2xl bg-slate-300 dark:bg-bg-light/5 backdrop-blur-sm shadow-sm"
    >
      <h3 className="text-base sm:text-lg font-semibold text-text-dark dark:text-text-light px-2">
        {name}
      </h3>
      <ProjectSection assetDirname={assetDirname} />
    </div>
  ));

  return (
    <div className="flex flex-col items-center gap-10 p-6 sm:p-10 max-w-screen mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* <h2 className="text-2xl sm:text-4xl font-bold text-center text-text-dark dark:text-text-light">
        {content.h1.label}
      </h2> */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
        {projectSections}
      </div>
    </div>
  );
}
