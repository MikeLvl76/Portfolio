type IconInfo = {
  filepath: string;
  alt: string;
  title: string;
};

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const infos: IconInfo[] = [
  {
    filepath: `${basePath}/android.svg`,
    alt: "Android icon",
    title: "Android",
  },
  {
    filepath: `${basePath}/as.svg`,
    alt: "Android Studio icon",
    title: "Android Studio",
  },
  {
    filepath: `${basePath}/bootstrap.svg`,
    alt: "Bootstrap icon",
    title: "Bootstrap",
  },
  {
    filepath: `${basePath}/c.svg`,
    alt: "C icon",
    title: "C",
  },
  {
    filepath: `${basePath}/chrome.svg`,
    alt: "Chrome icon",
    title: "Chrome",
  },
  {
    filepath: `${basePath}/cpp.svg`,
    alt: "C++ icon",
    title: "C++",
  },
  {
    filepath: `${basePath}/css.svg`,
    alt: "CSS icon",
    title: "CSS",
  },
  {
    filepath: `${basePath}/docker.svg`,
    alt: "Docker icon",
    title: "Docker",
  },
  {
    filepath: `${basePath}/discordjs.svg`,
    alt: "Discord.js icon",
    title: "Discord.js",
  },
  {
    filepath: `${basePath}/doctrine.svg`,
    alt: "Doctrine icon",
    title: "Doctrine",
  },
  {
    filepath: `${basePath}/eslint.svg`,
    alt: "ESLint icon",
    title: "ESLint",
  },
  {
    filepath: `${basePath}/express.svg`,
    alt: "Express icon",
    title: "Express",
  },
  {
    filepath: `${basePath}/firefox.svg`,
    alt: "Firefox icon",
    title: "Firefox",
  },
  {
    filepath: `${basePath}/git.svg`,
    alt: "Git icon",
    title: "Git",
  },
  {
    filepath: `${basePath}/github.svg`,
    alt: "Github icon",
    title: "Github",
  },
  {
    filepath: `${basePath}/gitlab.svg`,
    alt: "Gitlab icon",
    title: "Gitlab",
  },
  {
    filepath: `${basePath}/gradle.svg`,
    alt: "Gradle icon",
    title: "Gradle",
  },
  {
    filepath: `${basePath}/graphql.svg`,
    alt: "GraphQL icon",
    title: "GraphQL",
  },
  {
    filepath: `${basePath}/html.svg`,
    alt: "HTML icon",
    title: "HTML",
  },
  {
    filepath: `${basePath}/java.svg`,
    alt: "Java icon",
    title: "Java",
  },
  {
    filepath: `${basePath}/js.svg`,
    alt: "JavaScript icon",
    title: "JavaScript",
  },
  {
    filepath: `${basePath}/jest.svg`,
    alt: "Jest icon",
    title: "Jest",
  },
  {
    filepath: `${basePath}/latex.svg`,
    alt: "LaTeX icon",
    title: "LaTeX",
  },
  {
    filepath: `${basePath}/md.svg`,
    alt: "Markdown icon",
    title: "Markdown",
  },
  {
    filepath: `${basePath}/mui.svg`,
    alt: "Material UI icon",
    title: "Material UI",
  },
  {
    filepath: `${basePath}/mongodb.svg`,
    alt: "MongoDB icon",
    title: "MongoDB",
  },
  {
    filepath: `${basePath}/mongoose.svg`,
    alt: "Mongoose.js icon",
    title: "Mongoose.js",
  },
  {
    filepath: `${basePath}/mysql.svg`,
    alt: "MySQL icon",
    title: "MySQL",
  },
  {
    filepath: `${basePath}/nest.svg`,
    alt: "Nest.js icon",
    title: "Nest.js",
  },
  {
    filepath: `${basePath}/next.svg`,
    alt: "NextJS icon",
    title: "NextJS",
  },
  {
    filepath: `${basePath}/node.svg`,
    alt: "Node.js icon",
    title: "Node.js",
  },
  {
    filepath: `${basePath}/nuxt.svg`,
    alt: "NuxtJS icon",
    title: "NuxtJS",
  },
  {
    filepath: `${basePath}/p5.svg`,
    alt: "p5.js icon",
    title: "p5.js",
  },
  {
    filepath: `${basePath}/php.svg`,
    alt: "PHP icon",
    title: "PHP",
  },
  {
    filepath: `${basePath}/pgsql.svg`,
    alt: "PostgreSQL icon",
    title: "PostgreSQL",
  },
  {
    filepath: `${basePath}/postman.svg`,
    alt: "Postman icon",
    title: "Postman",
  },
  {
    filepath: `${basePath}/processing.svg`,
    alt: "Processing icon",
    title: "Processing",
  },
  {
    filepath: `${basePath}/python.svg`,
    alt: "Python icon",
    title: "Python",
  },
  {
    filepath: `${basePath}/react.svg`,
    alt: "React icon",
    title: "React",
  },
  {
    filepath: `${basePath}/sqlite.svg`,
    alt: "SQLite icon",
    title: "SQLite",
  },
  {
    filepath: `${basePath}/symfony.svg`,
    alt: "Symfony icon",
    title: "Symfony",
  },
  {
    filepath: `${basePath}/tailwind.svg`,
    alt: "Tailwind CSS icon",
    title: "Tailwind CSS",
  },
  {
    filepath: `${basePath}/ts.svg`,
    alt: "TypeScript icon",
    title: "TypeScript",
  },
  {
    filepath: `${basePath}/vite.svg`,
    alt: "Vite.js icon",
    title: "Vite.js",
  },
  {
    filepath: `${basePath}/vsc.svg`,
    alt: "Visual Studio Code icon",
    title: "Visual Studio Code",
  },
  {
    filepath: `${basePath}/vue.svg`,
    alt: "Vue.js icon",
    title: "Vue.js",
  },
];

export function useIconsInfo() {
  return infos;
}
