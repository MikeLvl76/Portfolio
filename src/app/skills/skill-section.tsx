"use client";

import { useAssetsInfos } from "@/components/hooks/use-assets-infos";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  assetDirname: string;
};

export default function SkillSection({ title, assetDirname }: Props) {
  const infos = useAssetsInfos({ dir: assetDirname });

  const icons = infos.map(({ filepath, alt, title }, i) => (
    <Image
      key={i}
      src={filepath}
      width={96}
      height={96}
      alt={alt}
      title={title}
      loading="lazy"
      className="hover:cursor-pointer p-2"
    />
  ));

  return (
    <div className="sm:ml-4 flex flex-col items-start sm:min-w-md md:min-w-lg max-w-full gap-2 sm:gap-4 p-4">
      <div className="flex flex-row gap-x-2 items-end justify-between w-fit">
        <ChevronRightIcon
          color="#111111"
          className="size-4 sm:size-6 md:size-10"
        />
        <h1 className="text-sm sm:text-base md:text-xl font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-3 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-start">
        {...icons}
      </div>
    </div>
  );
}
