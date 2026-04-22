"use client";

import { useLocale } from "@/components/providers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { getLocalePagesContent } = useLocale();
  const content = getLocalePagesContent().home;

  return (
    <div className="flex flex-col justify-evenly items-center max-w-full min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="flex flex-col gap-4 items-center w-full sm:w-[35%]">
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-text-dark dark:text-text-light">
            {content.h1.label}
          </h1>
          <Image
            src={"/homepage/wave-hand.png"}
            alt={"Wave hand emoji"}
            width={0}
            height={0}
            loading="eager"
            className="hover:cursor-pointer object-cover size-6 sm:size-12 md:size-20 rounded-md"
          />
        </div>
        <p className="text-base sm:text-xl text-center text-pretty p-2 w-full sm:w-80 md:w-full text-text-dark dark:text-text-light">
          {content.text.label}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center p-2 w-full sm:w-[25%] md:w-[35%]">
        <Link
          href="/projects"
          className="text-sm sm:text-md md:text-lg text-text-dark dark:text-text-light 
          hover:cursor-pointer hover:decoration-0 hover:bg-bg-dark/20 dark:hover:bg-bg-light/20 p-2 rounded-md"
        >
          {content.links.projects.name}
        </Link>
        <Link
          href="/contact"
          className="text-sm sm:text-md md:text-lg text-text-dark dark:text-text-light 
          hover:cursor-pointer hover:decoration-0 hover:bg-bg-dark/20 dark:hover:bg-bg-light/20 p-2 rounded-md"
        >
          {content.links.contact.name}
        </Link>
      </div>
    </div>
  );
}
