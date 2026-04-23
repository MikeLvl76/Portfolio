"use client";

import SkillSections from "./skill-sections";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 p-6 sm:p-10 max-w-5xl mx-auto min-h-screen bg-bg-light dark:bg-bg-dark">
      <SkillSections className="flex flex-col sm:flex-row sm:flex-wrap gap-6" />
    </div>
  );
}
