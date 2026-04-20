"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { JSX } from "react";

type Props = {
  title: string;
  elements: JSX.Element[];
  className?: string;
};

export default function Section({ title, elements, className }: Props) {
  return (
    <div className="sm:ml-4 flex flex-col items-start sm:min-w-md md:min-w-lg max-w-full gap-2 sm:gap-4 p-4">
      <div className="flex flex-row gap-x-2 items-end justify-between w-fit">
        <ChevronRightIcon className="size-4 sm:size-7 text-text-dark dark:text-text-light" />
        <h1 className="text-sm sm:text-base md:text-xl font-bold text-text-dark dark:text-text-light">
          {title}
        </h1>
      </div>
      <div className={cn(className)}>{...elements}</div>
    </div>
  );
}
