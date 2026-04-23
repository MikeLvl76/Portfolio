"use client";

import { useIconsInfos } from "@/components/hooks";
import { SimpleList } from "@/components/simple-list";
import { Asset } from "@/types/asset";
import Image from "next/image";

type Props = {
  assetDirname: string;
};

export default function SkillSection({ assetDirname }: Props) {
  const infos = useIconsInfos({ dir: assetDirname });

  return (
    <SimpleList<Asset>
      items={infos}
      renderItem={({ filepath, alt, title }) => (
        <Image
          src={filepath}
          width={96}
          height={96}
          alt={alt}
          title={title}
          loading="eager"
          className="hover:cursor-pointer p-2 bg-none dark:bg-bg-light dark:rounded-full"
        />
      )}
      itemProps={{ className: "leading-relaxed" }}
      className="flex flex-row justify-start items-start flex-wrap gap-2 sm:gap-3"
    />
  );
}
