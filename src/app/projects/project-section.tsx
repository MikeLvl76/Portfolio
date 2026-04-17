"use client";

import { useAssetsInfos } from "@/components/hooks/use-assets-infos";
import ProjectItem from "./project-item";
import { ChevronRightIcon } from "lucide-react";

type Props = {
  title: string;
  assetDirname: string;
};

export default function ProjectSection({ title, assetDirname }: Props) {
  const infos = useAssetsInfos({ dir: assetDirname });

  const projects = infos.map((info, i) => <ProjectItem key={i} info={info} />);

  return (
    <div className="ml-8 flex flex-col items-start sm:min-w-md md:min-w-lg max-w-full gap-2 sm:gap-4 p-4">
      <div className="flex flex-row gap-x-2 items-end justify-between w-fit">
        <ChevronRightIcon
          color="#111111"
          className="size-4 sm:size-6 md:size-10"
        />
        <h1 className="text-sm sm:text-base md:text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col gap-4 items-center sm:flex-row sm:flex-wrap sm:items-start">
        {...projects}
      </div>
    </div>
  );
}
