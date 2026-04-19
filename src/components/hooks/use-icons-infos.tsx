"use client";

import { BASE_PATH } from "@/lib/paths";
import { Asset } from "@/types/asset";
import { useMemo } from "react";

export type Icon = Asset;

type Params = {
  dir: string;
};

export function useIconsInfos({ dir }: Params) {
  const icons = useMemo<Icon[]>(
    () => [
      {
        filepath: `${BASE_PATH}/icons/tools/android.svg`,
        alt: "Android icon",
        title: "Android",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/as.svg`,
        alt: "Android Studio icon",
        title: "Android Studio",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/bootstrap.svg`,
        alt: "Bootstrap icon",
        title: "Bootstrap",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/c.svg`,
        alt: "C icon",
        title: "C",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/chrome.svg`,
        alt: "Chrome icon",
        title: "Chrome",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/cpp.svg`,
        alt: "C++ icon",
        title: "C++",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/css.svg`,
        alt: "CSS icon",
        title: "CSS",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/discordjs.svg`,
        alt: "Discord.js icon",
        title: "Discord.js",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/docker.svg`,
        alt: "Docker icon",
        title: "Docker",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/doctrine.svg`,
        alt: "Doctrine icon",
        title: "Doctrine",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/eslint.svg`,
        alt: "ESLint icon",
        title: "ESLint",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/express.svg`,
        alt: "Express icon",
        title: "Express",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/firefox.svg`,
        alt: "Firefox icon",
        title: "Firefox",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/git.svg`,
        alt: "Git icon",
        title: "Git",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/github.svg`,
        alt: "Github icon",
        title: "Github",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/gitlab.svg`,
        alt: "Gitlab icon",
        title: "Gitlab",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/gradle.svg`,
        alt: "Gradle icon",
        title: "Gradle",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/graphql.svg`,
        alt: "GraphQL icon",
        title: "GraphQL",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/html.svg`,
        alt: "HTML icon",
        title: "HTML",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/java.svg`,
        alt: "Java icon",
        title: "Java",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/jest.svg`,
        alt: "Jest icon",
        title: "Jest",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/js.svg`,
        alt: "JavaScript icon",
        title: "JavaScript",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/latex.svg`,
        alt: "LaTeX icon",
        title: "LaTeX",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/md.svg`,
        alt: "Markdown icon",
        title: "Markdown",
      },
      {
        filepath: `${BASE_PATH}/icons/database/mongodb.svg`,
        alt: "MongoDB icon",
        title: "MongoDB",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/mongoose.svg`,
        alt: "Mongoose.js icon",
        title: "Mongoose.js",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/mui.svg`,
        alt: "Material UI icon",
        title: "Material UI",
      },
      {
        filepath: `${BASE_PATH}/icons/database/mysql.svg`,
        alt: "MySQL icon",
        title: "MySQL",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/nest.svg`,
        alt: "Nest.js icon",
        title: "Nest.js",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/next.svg`,
        alt: "NextJS icon",
        title: "NextJS",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/node.svg`,
        alt: "Node.js icon",
        title: "Node.js",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/nuxt.svg`,
        alt: "NuxtJS icon",
        title: "NuxtJS",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/p5.svg`,
        alt: "p5.js icon",
        title: "p5.js",
      },
      {
        filepath: `${BASE_PATH}/icons/database/pgsql.svg`,
        alt: "PostgreSQL icon",
        title: "PostgreSQL",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/php.svg`,
        alt: "PHP icon",
        title: "PHP",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/postman.svg`,
        alt: "Postman icon",
        title: "Postman",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/processing.svg`,
        alt: "Processing icon",
        title: "Processing",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/python.svg`,
        alt: "Python icon",
        title: "Python",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/react.svg`,
        alt: "React icon",
        title: "React",
      },
      {
        filepath: `${BASE_PATH}/icons/database/sqlite.svg`,
        alt: "SQLite icon",
        title: "SQLite",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/symfony.svg`,
        alt: "Symfony icon",
        title: "Symfony",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/tailwind.svg`,
        alt: "Tailwind CSS icon",
        title: "Tailwind CSS",
      },
      {
        filepath: `${BASE_PATH}/icons/languages/ts.svg`,
        alt: "TypeScript icon",
        title: "TypeScript",
      },
      {
        filepath: `${BASE_PATH}/icons/librairies/vite.svg`,
        alt: "Vite.js icon",
        title: "Vite.js",
      },
      {
        filepath: `${BASE_PATH}/icons/tools/vsc.svg`,
        alt: "Visual Studio Code icon",
        title: "Visual Studio Code",
      },
      {
        filepath: `${BASE_PATH}/icons/frameworks/vue.svg`,
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
