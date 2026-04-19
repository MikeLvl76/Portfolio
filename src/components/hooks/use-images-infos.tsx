"use client";

import { Asset } from "@/types/asset";
import { useLocaleContext } from "../providers/locale-provider";
import { useMemo } from "react";

export interface ImageInfos extends Asset {
  description?: string;
  externalLinks?: {
    app?: string;
    code?: string;
  };
}

type Params = {
  dir: string;
};

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
const baseAppUrl = process.env.NEXT_PUBLIC_BASE_APP_URL;
const baseRepoUrl = process.env.NEXT_PUBLIC_BASE_REPO_URL;

export function useImagesInfos({ dir }: Params) {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent().projects;

  const images = useMemo<ImageInfos[]>(
    () => [
      {
        filepath: `${basePath}/images/ts/webflappybird.png`,
        alt: content.sections.ts.items.bird.alt,
        title: content.sections.ts.items.bird.title,
        description: content.sections.ts.items.bird.description,
        externalLinks: {
          app: `${baseAppUrl}/web-flappy-bird`,
          code: `${baseRepoUrl}/web-flappy-bird`,
        },
      },
      {
        filepath: `${basePath}/images/js/snake.png`,
        alt: content.sections.js.items.snake.alt,
        title: content.sections.js.items.snake.title,
        description: content.sections.js.items.snake.description,
        externalLinks: {
          app: `${baseAppUrl}/Snake`,
          code: `${baseRepoUrl}/Snake`,
        },
      },
      {
        filepath: `${basePath}/images/js/maze.png`,
        alt: content.sections.js.items.maze.alt,
        title: content.sections.js.items.maze.title,
        description: content.sections.js.items.maze.description,
        externalLinks: {
          app: `${baseAppUrl}/Maze`,
          code: `${baseRepoUrl}/Maze`,
        },
      },
      {
        filepath: `${basePath}/images/ts/webgames.webp`,
        alt: content.sections.ts.items.webgames.alt,
        title: content.sections.ts.items.webgames.title,
        description: content.sections.ts.items.webgames.description,
        externalLinks: {
          app: `https://web-games-eight.vercel.app/`,
          code: `${baseRepoUrl}/web-games`,
        },
      },
      {
        filepath: `${basePath}/images/python/chesspy.png`,
        alt: content.sections.py.items.chess.alt,
        title: content.sections.py.items.chess.title,
        description: content.sections.py.items.chess.description,
        externalLinks: {
          code: `${baseRepoUrl}/ChessPy`,
        },
      },
      {
        filepath: `${basePath}/images/python/codepen-scraper.png`,
        alt: content.sections.py.items.scraper.alt,
        title: content.sections.py.items.scraper.title,
        description: content.sections.py.items.scraper.description,
        externalLinks: {
          code: `${baseRepoUrl}/codepen-scraper`,
        },
      },
      {
        filepath: `${basePath}/images/python/kakuro-solver.png`,
        alt: content.sections.py.items.kakuro.alt,
        title: content.sections.py.items.kakuro.title,
        description: content.sections.py.items.kakuro.description,
        externalLinks: {
          code: `${baseRepoUrl}/kakuro-solver`,
        },
      },
      {
        filepath: `${basePath}/images/java/shapes-in-bag.png`,
        alt: content.sections.java.items.shapes.alt,
        title: content.sections.java.items.shapes.title,
        description: content.sections.java.items.shapes.description,
        externalLinks: {
          code: `${baseRepoUrl}/shapes-in-bag`,
        },
      },
      {
        filepath: `${basePath}/images/js/hangman.png`,
        alt: content.sections.js.items.hangman.alt,
        title: content.sections.js.items.hangman.title,
        description: content.sections.js.items.hangman.description,
        externalLinks: {
          app: `${baseAppUrl}/Hangman`,
          code: `${baseRepoUrl}/Hangman`,
        },
      },
      {
        filepath: `${basePath}/images/python/connect-four.png`,
        alt: content.sections.py.items["connect-four"].alt,
        title: content.sections.py.items["connect-four"].title,
        description: content.sections.py.items["connect-four"].description,
        externalLinks: {
          code: `${baseRepoUrl}/Connect-four`,
        },
      },
      {
        filepath: `${basePath}/images/js/real-estate-website.png`,
        alt: content.sections.js.items.estate.alt,
        title: content.sections.js.items.estate.title,
        description: content.sections.js.items.estate.description,
        externalLinks: {
          code: `${baseRepoUrl}/Real-Estate-Website`,
        },
      },
      {
        filepath: `${basePath}/images/java/tic-tac-toe.png`,
        alt: content.sections.java.items["tic-tac-toe"].alt,
        title: content.sections.java.items["tic-tac-toe"].title,
        description: content.sections.java.items["tic-tac-toe"].description,
        externalLinks: {
          code: `${baseRepoUrl}/TICTACTOE`,
        },
      },
      {
        filepath: `${basePath}/images/python/statistics.png`,
        alt: content.sections.py.items.statistics.alt,
        title: content.sections.py.items.statistics.title,
        description: content.sections.py.items.statistics.description,
        externalLinks: {
          code: `${baseRepoUrl}/Statistics`,
        },
      },
      {
        filepath: `${basePath}/images/python/converter.png`,
        alt: content.sections.py.items.converter.alt,
        title: content.sections.py.items.converter.title,
        description: content.sections.py.items.converter.description,
        externalLinks: {
          code: `${baseRepoUrl}/Converter`,
        },
      },
      {
        filepath: `${basePath}/images/java/classroom.png`,
        alt: content.sections.java.items.classroom.alt,
        title: content.sections.java.items.classroom.title,
        description: content.sections.java.items.classroom.description,
        externalLinks: {
          code: `${baseRepoUrl}/Classroom`,
        },
      },
    ],
    [
      content.sections.java.items,
      content.sections.js.items,
      content.sections.py.items,
      content.sections.ts.items,
    ]
  );

  return images.filter(({ filepath }) => {
    const lastIndex = filepath.lastIndexOf("/");
    const path = filepath.substring(0, lastIndex);
    return path.includes(dir);
  });
}
