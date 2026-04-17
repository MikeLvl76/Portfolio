export type AssetInfos = {
  filepath: string;
  alt: string;
  title: string;
  description?: string;
  externalLinks?: Record<string, string>;
};

export const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
const baseAppUrl = process.env.NEXT_PUBLIC_BASE_APP_URL;
const baseRepoUrl = process.env.NEXT_PUBLIC_BASE_REPO_URL;

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
    externalLinks: {
      app: `${baseAppUrl}/web-flappy-bird`,
      code: `${baseRepoUrl}/web-flappy-bird`,
    },
  },
  {
    filepath: `${basePath}/images/js/snake.png`,
    alt: "Web Snake image",
    title: "Web Snake",
    description:
      "Web version of the famous Snake game! Eat food to earn points and avoid hitting bounds!",
    externalLinks: {
      app: `${baseAppUrl}/Snake`,
      code: `${baseRepoUrl}/Snake`,
    },
  },
  {
    filepath: `${basePath}/images/js/maze.png`,
    alt: "Web Maze image",
    title: "Web Maze",
    description: "Welcome to the maze! Find exit before time runs out!",
    externalLinks: {
      app: `${baseAppUrl}/Maze`,
      code: `${baseRepoUrl}/Maze`,
    },
  },
  {
    filepath: `${basePath}/images/ts/webgames.webp`,
    alt: "Web Games logo",
    title: "Web Games",
    description: "Play on varied games!",
    externalLinks: {
      app: `https://web-games-eight.vercel.app/`,
      code: `${baseRepoUrl}/web-games`,
    },
  },
  {
    filepath: `${basePath}/images/python/chesspy.png`,
    alt: "ChessPy image",
    title: "ChessPy",
    description: "A command-line version of chess written in Python.",
    externalLinks: {
      code: `${baseRepoUrl}/ChessPy`,
    },
  },
  {
    filepath: `${basePath}/images/python/codepen-scraper.png`,
    alt: "Codepen scraper image",
    title: "Codepen scraper",
    description:
      "An old forked scraper that fetches codepen projects for fun using Selenium.",
    externalLinks: {
      code: `${baseRepoUrl}/codepen-scraper`,
    },
  },
  {
    filepath: `${basePath}/images/python/kakuro-solver.png`,
    alt: "Kakuro solver image",
    title: "Kakuro solver",
    description:
      "Old college project about resolving kakuro puzzle in Python using simulated annealing.",
    externalLinks: {
      code: `${baseRepoUrl}/kakuro-solver`,
    },
  },
  {
    filepath: `${basePath}/images/java/shapes-in-bag.png`,
    alt: "Shapes in bag image",
    title: "Shapes in bag",
    description:
      "Old college project about putting different shapes in bag. This project has been redone because it had many issues and hade bad code.",
    externalLinks: {
      code: `${baseRepoUrl}/shapes-in-bag`,
    },
  },
  {
    filepath: `${basePath}/images/js/hangman.png`,
    alt: "Hangman image",
    title: "Hangman",
    description:
      "Old college project hangman game. Originally developped by using a connected Arduino with WebSocket. The code was improved years before and style is obsolete.",
    externalLinks: {
      app: `${baseAppUrl}/Hangman`,
      code: `${baseRepoUrl}/Hangman`,
    },
  },
  {
    filepath: `${basePath}/images/python/connect-four.png`,
    alt: "Connect four image",
    title: "Connect four",
    description: "A command line connect four game in Python.",
    externalLinks: {
      code: `${baseRepoUrl}/Connect-four`,
    },
  },
  {
    filepath: `${basePath}/images/js/real-estate-website.png`,
    alt: "Real Estate Website image",
    title: "Real Estate Website",
    description:
      "An old college project about making a real estate website in JavaScript with Express framework. The project hasn't been updated from long ago. ",
    externalLinks: {
      code: `${baseRepoUrl}/Real-Estate-Website`,
    },
  },
  {
    filepath: `${basePath}/images/java/tic-tac-toe.png`,
    alt: "Tic-tac-toe image",
    title: "Tic-tac-toe",
    description: "A command line tic-tac-toe game in Java.",
    externalLinks: {
      code: `${baseRepoUrl}/TICTACTOE`,
    },
  },
  {
    filepath: `${basePath}/images/python/statistics.png`,
    alt: "Statistics image",
    title: "Statistics",
    description:
      "A Python projet using matplotlib to display graphs of football teams statistics.",
    externalLinks: {
      code: `${baseRepoUrl}/Statistics`,
    },
  },
  {
    filepath: `${basePath}/images/python/converter.png`,
    alt: "Converter image",
    title: "Converter",
    description:
      "An app that can convert currency, temperature and others measurements. This app is written in Python and has user interface provided by tkinter.",
    externalLinks: {
      code: `${baseRepoUrl}/Converter`,
    },
  },
  {
    filepath: `${basePath}/images/java/classroom.png`,
    alt: "Classroom image",
    title: "Classroom",
    description:
      "An old college project developped in Java and using Processing. This project shows a 3D version of one classroom in my University.",
    externalLinks: {
      code: `${baseRepoUrl}/Classroom`,
    },
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
