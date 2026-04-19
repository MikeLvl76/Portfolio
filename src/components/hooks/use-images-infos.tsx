"use client";

import { Asset } from "@/types/asset";
import { useLocaleContext } from "../providers";
import { useMemo } from "react";
import { BASE_PATH } from "@/lib/paths";

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

const BASE_APP_URL = process.env.NEXT_PUBLIC_BASE_APP_URL;
const BASE_REPO_URL = process.env.NEXT_PUBLIC_BASE_REPO_URL;

export function useImagesInfos({ dir }: Params) {
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent().projects;

  const images = useMemo<ImageInfos[]>(
    () => [
      {
        filepath: `${BASE_PATH}/images/ts/webflappybird.png`,
        alt: content.sections.ts.items.bird.alt,
        title: content.sections.ts.items.bird.title,
        description: content.sections.ts.items.bird.description,
        externalLinks: {
          app: `${BASE_APP_URL}/web-flappy-bird`,
          code: `${BASE_REPO_URL}/web-flappy-bird`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/js/snake.png`,
        alt: content.sections.js.items.snake.alt,
        title: content.sections.js.items.snake.title,
        description: content.sections.js.items.snake.description,
        externalLinks: {
          app: `${BASE_APP_URL}/Snake`,
          code: `${BASE_REPO_URL}/Snake`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/js/maze.png`,
        alt: content.sections.js.items.maze.alt,
        title: content.sections.js.items.maze.title,
        description: content.sections.js.items.maze.description,
        externalLinks: {
          app: `${BASE_APP_URL}/Maze`,
          code: `${BASE_REPO_URL}/Maze`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/ts/webgames.webp`,
        alt: content.sections.ts.items.webgames.alt,
        title: content.sections.ts.items.webgames.title,
        description: content.sections.ts.items.webgames.description,
        externalLinks: {
          app: `https://web-games-eight.vercel.app/`,
          code: `${BASE_REPO_URL}/web-games`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/chesspy.png`,
        alt: content.sections.py.items.chess.alt,
        title: content.sections.py.items.chess.title,
        description: content.sections.py.items.chess.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/ChessPy`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/codepen-scraper.png`,
        alt: content.sections.py.items.scraper.alt,
        title: content.sections.py.items.scraper.title,
        description: content.sections.py.items.scraper.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/codepen-scraper`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/kakuro-solver.png`,
        alt: content.sections.py.items.kakuro.alt,
        title: content.sections.py.items.kakuro.title,
        description: content.sections.py.items.kakuro.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/kakuro-solver`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/java/shapes-in-bag.png`,
        alt: content.sections.java.items.shapes.alt,
        title: content.sections.java.items.shapes.title,
        description: content.sections.java.items.shapes.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/shapes-in-bag`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/js/hangman.png`,
        alt: content.sections.js.items.hangman.alt,
        title: content.sections.js.items.hangman.title,
        description: content.sections.js.items.hangman.description,
        externalLinks: {
          app: `${BASE_APP_URL}/Hangman`,
          code: `${BASE_REPO_URL}/Hangman`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/connect-four.png`,
        alt: content.sections.py.items["connect-four"].alt,
        title: content.sections.py.items["connect-four"].title,
        description: content.sections.py.items["connect-four"].description,
        externalLinks: {
          code: `${BASE_REPO_URL}/Connect-four`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/js/real-estate-website.png`,
        alt: content.sections.js.items.estate.alt,
        title: content.sections.js.items.estate.title,
        description: content.sections.js.items.estate.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/Real-Estate-Website`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/java/tic-tac-toe.png`,
        alt: content.sections.java.items["tic-tac-toe"].alt,
        title: content.sections.java.items["tic-tac-toe"].title,
        description: content.sections.java.items["tic-tac-toe"].description,
        externalLinks: {
          code: `${BASE_REPO_URL}/TICTACTOE`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/statistics.png`,
        alt: content.sections.py.items.statistics.alt,
        title: content.sections.py.items.statistics.title,
        description: content.sections.py.items.statistics.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/Statistics`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/python/converter.png`,
        alt: content.sections.py.items.converter.alt,
        title: content.sections.py.items.converter.title,
        description: content.sections.py.items.converter.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/Converter`,
        },
      },
      {
        filepath: `${BASE_PATH}/images/java/classroom.png`,
        alt: content.sections.java.items.classroom.alt,
        title: content.sections.java.items.classroom.title,
        description: content.sections.java.items.classroom.description,
        externalLinks: {
          code: `${BASE_REPO_URL}/Classroom`,
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
