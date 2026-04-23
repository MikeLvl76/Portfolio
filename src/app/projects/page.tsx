"use client";

import ProjectSections from "./project-sections";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10 p-6 sm:p-10 max-w-screen mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      <ProjectSections
        sections={[
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
        ]}
        className="flex flex-col sm:grid sm:grid-cols-2 gap-6"
      />
    </div>
  );
}
