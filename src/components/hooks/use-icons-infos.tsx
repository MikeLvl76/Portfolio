"use client";

import { Asset } from "@/types/asset";
import { useMemo } from "react";

export type Icon = Asset;

type Params = {
  dir: string;
};

export const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export function useIconsInfos({ dir }: Params) {
  const icons = useMemo<Icon[]>(
    () => [
      {
        filepath: `${basePath}/icons/tools/android.svg`,
        alt: "Android icon",
        title: "Android",
      },
      {
        filepath: `${basePath}/icons/tools/as.svg`,
        alt: "Android Studio icon",
        title: "Android Studio",
      },
      {
        filepath: `${basePath}/icons/frameworks/bootstrap.svg`,
        alt: "Bootstrap icon",
        title: "Bootstrap",
      },
      {
        filepath: `${basePath}/icons/languages/c.svg`,
        alt: "C icon",
        title: "C",
      },
      {
        filepath: `${basePath}/icons/tools/chrome.svg`,
        alt: "Chrome icon",
        title: "Chrome",
      },
      {
        filepath: `${basePath}/icons/languages/cpp.svg`,
        alt: "C++ icon",
        title: "C++",
      },
      {
        filepath: `${basePath}/icons/languages/css.svg`,
        alt: "CSS icon",
        title: "CSS",
      },
      {
        filepath: `${basePath}/icons/librairies/discordjs.svg`,
        alt: "Discord.js icon",
        title: "Discord.js",
      },
      {
        filepath: `${basePath}/icons/tools/docker.svg`,
        alt: "Docker icon",
        title: "Docker",
      },
      {
        filepath: `${basePath}/icons/tools/doctrine.svg`,
        alt: "Doctrine icon",
        title: "Doctrine",
      },
      {
        filepath: `${basePath}/icons/tools/eslint.svg`,
        alt: "ESLint icon",
        title: "ESLint",
      },
      {
        filepath: `${basePath}/icons/frameworks/express.svg`,
        alt: "Express icon",
        title: "Express",
      },
      {
        filepath: `${basePath}/icons/tools/firefox.svg`,
        alt: "Firefox icon",
        title: "Firefox",
      },
      {
        filepath: `${basePath}/icons/tools/git.svg`,
        alt: "Git icon",
        title: "Git",
      },
      {
        filepath: `${basePath}/icons/tools/github.svg`,
        alt: "Github icon",
        title: "Github",
      },
      {
        filepath: `${basePath}/icons/tools/gitlab.svg`,
        alt: "Gitlab icon",
        title: "Gitlab",
      },
      {
        filepath: `${basePath}/icons/tools/gradle.svg`,
        alt: "Gradle icon",
        title: "Gradle",
      },
      {
        filepath: `${basePath}/icons/librairies/graphql.svg`,
        alt: "GraphQL icon",
        title: "GraphQL",
      },
      {
        filepath: `${basePath}/icons/languages/html.svg`,
        alt: "HTML icon",
        title: "HTML",
      },
      {
        filepath: `${basePath}/icons/languages/java.svg`,
        alt: "Java icon",
        title: "Java",
      },
      {
        filepath: `${basePath}/icons/tools/jest.svg`,
        alt: "Jest icon",
        title: "Jest",
      },
      {
        filepath: `${basePath}/icons/languages/js.svg`,
        alt: "JavaScript icon",
        title: "JavaScript",
      },
      {
        filepath: `${basePath}/icons/languages/latex.svg`,
        alt: "LaTeX icon",
        title: "LaTeX",
      },
      {
        filepath: `${basePath}/icons/languages/md.svg`,
        alt: "Markdown icon",
        title: "Markdown",
      },
      {
        filepath: `${basePath}/icons/database/mongodb.svg`,
        alt: "MongoDB icon",
        title: "MongoDB",
      },
      {
        filepath: `${basePath}/icons/librairies/mongoose.svg`,
        alt: "Mongoose.js icon",
        title: "Mongoose.js",
      },
      {
        filepath: `${basePath}/icons/librairies/mui.svg`,
        alt: "Material UI icon",
        title: "Material UI",
      },
      {
        filepath: `${basePath}/icons/database/mysql.svg`,
        alt: "MySQL icon",
        title: "MySQL",
      },
      {
        filepath: `${basePath}/icons/frameworks/nest.svg`,
        alt: "Nest.js icon",
        title: "Nest.js",
      },
      {
        filepath: `${basePath}/icons/frameworks/next.svg`,
        alt: "NextJS icon",
        title: "NextJS",
      },
      {
        filepath: `${basePath}/icons/tools/node.svg`,
        alt: "Node.js icon",
        title: "Node.js",
      },
      {
        filepath: `${basePath}/icons/frameworks/nuxt.svg`,
        alt: "NuxtJS icon",
        title: "NuxtJS",
      },
      {
        filepath: `${basePath}/icons/librairies/p5.svg`,
        alt: "p5.js icon",
        title: "p5.js",
      },
      {
        filepath: `${basePath}/icons/database/pgsql.svg`,
        alt: "PostgreSQL icon",
        title: "PostgreSQL",
      },
      {
        filepath: `${basePath}/icons/languages/php.svg`,
        alt: "PHP icon",
        title: "PHP",
      },
      {
        filepath: `${basePath}/icons/tools/postman.svg`,
        alt: "Postman icon",
        title: "Postman",
      },
      {
        filepath: `${basePath}/icons/librairies/processing.svg`,
        alt: "Processing icon",
        title: "Processing",
      },
      {
        filepath: `${basePath}/icons/languages/python.svg`,
        alt: "Python icon",
        title: "Python",
      },
      {
        filepath: `${basePath}/icons/frameworks/react.svg`,
        alt: "React icon",
        title: "React",
      },
      {
        filepath: `${basePath}/icons/database/sqlite.svg`,
        alt: "SQLite icon",
        title: "SQLite",
      },
      {
        filepath: `${basePath}/icons/frameworks/symfony.svg`,
        alt: "Symfony icon",
        title: "Symfony",
      },
      {
        filepath: `${basePath}/icons/frameworks/tailwind.svg`,
        alt: "Tailwind CSS icon",
        title: "Tailwind CSS",
      },
      {
        filepath: `${basePath}/icons/languages/ts.svg`,
        alt: "TypeScript icon",
        title: "TypeScript",
      },
      {
        filepath: `${basePath}/icons/librairies/vite.svg`,
        alt: "Vite.js icon",
        title: "Vite.js",
      },
      {
        filepath: `${basePath}/icons/tools/vsc.svg`,
        alt: "Visual Studio Code icon",
        title: "Visual Studio Code",
      },
      {
        filepath: `${basePath}/icons/frameworks/vue.svg`,
        alt: "Vue.js icon",
        title: "Vue.js",
      },
    ],
    []
  );

  return icons.filter(({ filepath }) => {
    const lastIndex = filepath.lastIndexOf("/");
    const path = filepath.substring(0, lastIndex);
    return path.includes(dir);
  });
}
