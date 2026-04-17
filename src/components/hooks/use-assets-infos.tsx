export type AssetInfos = {
  filepath: string;
  alt: string;
  title: string;
  description?: string;
};

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const infos: AssetInfos[] = [
  {
    filepath: `${basePath}/icons/android.svg`,
    alt: "Android icon",
    title: "Android",
  },
  {
    filepath: `${basePath}/icons/as.svg`,
    alt: "Android Studio icon",
    title: "Android Studio",
  },
  {
    filepath: `${basePath}/icons/bootstrap.svg`,
    alt: "Bootstrap icon",
    title: "Bootstrap",
  },
  {
    filepath: `${basePath}/icons/c.svg`,
    alt: "C icon",
    title: "C",
  },
  {
    filepath: `${basePath}/icons/chrome.svg`,
    alt: "Chrome icon",
    title: "Chrome",
  },
  {
    filepath: `${basePath}/icons/cpp.svg`,
    alt: "C++ icon",
    title: "C++",
  },
  {
    filepath: `${basePath}/icons/css.svg`,
    alt: "CSS icon",
    title: "CSS",
  },
  {
    filepath: `${basePath}/icons/docker.svg`,
    alt: "Docker icon",
    title: "Docker",
  },
  {
    filepath: `${basePath}/icons/discordjs.svg`,
    alt: "Discord.js icon",
    title: "Discord.js",
  },
  {
    filepath: `${basePath}/icons/doctrine.svg`,
    alt: "Doctrine icon",
    title: "Doctrine",
  },
  {
    filepath: `${basePath}/icons/eslint.svg`,
    alt: "ESLint icon",
    title: "ESLint",
  },
  {
    filepath: `${basePath}/icons/express.svg`,
    alt: "Express icon",
    title: "Express",
  },
  {
    filepath: `${basePath}/icons/firefox.svg`,
    alt: "Firefox icon",
    title: "Firefox",
  },
  {
    filepath: `${basePath}/icons/git.svg`,
    alt: "Git icon",
    title: "Git",
  },
  {
    filepath: `${basePath}/icons/github.svg`,
    alt: "Github icon",
    title: "Github",
  },
  {
    filepath: `${basePath}/icons/gitlab.svg`,
    alt: "Gitlab icon",
    title: "Gitlab",
  },
  {
    filepath: `${basePath}/icons/gradle.svg`,
    alt: "Gradle icon",
    title: "Gradle",
  },
  {
    filepath: `${basePath}/icons/graphql.svg`,
    alt: "GraphQL icon",
    title: "GraphQL",
  },
  {
    filepath: `${basePath}/icons/html.svg`,
    alt: "HTML icon",
    title: "HTML",
  },
  {
    filepath: `${basePath}/icons/java.svg`,
    alt: "Java icon",
    title: "Java",
  },
  {
    filepath: `${basePath}/icons/js.svg`,
    alt: "JavaScript icon",
    title: "JavaScript",
  },
  {
    filepath: `${basePath}/icons/jest.svg`,
    alt: "Jest icon",
    title: "Jest",
  },
  {
    filepath: `${basePath}/icons/latex.svg`,
    alt: "LaTeX icon",
    title: "LaTeX",
  },
  {
    filepath: `${basePath}/icons/md.svg`,
    alt: "Markdown icon",
    title: "Markdown",
  },
  {
    filepath: `${basePath}/icons/mui.svg`,
    alt: "Material UI icon",
    title: "Material UI",
  },
  {
    filepath: `${basePath}/icons/mongodb.svg`,
    alt: "MongoDB icon",
    title: "MongoDB",
  },
  {
    filepath: `${basePath}/icons/mongoose.svg`,
    alt: "Mongoose.js icon",
    title: "Mongoose.js",
  },
  {
    filepath: `${basePath}/icons/mysql.svg`,
    alt: "MySQL icon",
    title: "MySQL",
  },
  {
    filepath: `${basePath}/icons/nest.svg`,
    alt: "Nest.js icon",
    title: "Nest.js",
  },
  {
    filepath: `${basePath}/icons/next.svg`,
    alt: "NextJS icon",
    title: "NextJS",
  },
  {
    filepath: `${basePath}/icons/node.svg`,
    alt: "Node.js icon",
    title: "Node.js",
  },
  {
    filepath: `${basePath}/icons/nuxt.svg`,
    alt: "NuxtJS icon",
    title: "NuxtJS",
  },
  {
    filepath: `${basePath}/icons/p5.svg`,
    alt: "p5.js icon",
    title: "p5.js",
  },
  {
    filepath: `${basePath}/icons/php.svg`,
    alt: "PHP icon",
    title: "PHP",
  },
  {
    filepath: `${basePath}/icons/pgsql.svg`,
    alt: "PostgreSQL icon",
    title: "PostgreSQL",
  },
  {
    filepath: `${basePath}/icons/postman.svg`,
    alt: "Postman icon",
    title: "Postman",
  },
  {
    filepath: `${basePath}/icons/processing.svg`,
    alt: "Processing icon",
    title: "Processing",
  },
  {
    filepath: `${basePath}/icons/python.svg`,
    alt: "Python icon",
    title: "Python",
  },
  {
    filepath: `${basePath}/icons/react.svg`,
    alt: "React icon",
    title: "React",
  },
  {
    filepath: `${basePath}/icons/sqlite.svg`,
    alt: "SQLite icon",
    title: "SQLite",
  },
  {
    filepath: `${basePath}/icons/symfony.svg`,
    alt: "Symfony icon",
    title: "Symfony",
  },
  {
    filepath: `${basePath}/icons/tailwind.svg`,
    alt: "Tailwind CSS icon",
    title: "Tailwind CSS",
  },
  {
    filepath: `${basePath}/icons/ts.svg`,
    alt: "TypeScript icon",
    title: "TypeScript",
  },
  {
    filepath: `${basePath}/icons/vite.svg`,
    alt: "Vite.js icon",
    title: "Vite.js",
  },
  {
    filepath: `${basePath}/icons/vsc.svg`,
    alt: "Visual Studio Code icon",
    title: "Visual Studio Code",
  },
  {
    filepath: `${basePath}/icons/vue.svg`,
    alt: "Vue.js icon",
    title: "Vue.js",
  },
  {
    filepath: `${basePath}/images/ts/webflappybird.png`,
    alt: "Web Flappy Bird image",
    title: "Web Flappy Bird",
    description:
      "Web version of the famous Flappy Bird game app! Fly between the pipes and survive as long as possible!",
  },
  {
    filepath: `${basePath}/images/js/snake.png`,
    alt: "Web Snake image",
    title: "Web Snake",
    description:
      "Web version of the famous Snake game! Eat food to earn points and avoid hitting bounds!",
  },
  {
    filepath: `${basePath}/images/js/maze.png`,
    alt: "Web Maze image",
    title: "Web Maze",
    description: "Welcome to the maze! Find exit before time runs out!",
  },
];

type Params = {
  dir: string;
};

export function useAssetsInfos({ dir }: Params) {
  return infos.filter(({ filepath }) => {
    const lastIndex = filepath.lastIndexOf("/");
    const path = filepath.substring(0, lastIndex);
    return path.includes(dir);
  });
}
