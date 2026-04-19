"use client";

import { useIconsInfos } from "@/components/hooks";
import { Section } from "@/components/section";
import Image from "next/image";

type Props = {
  title: string;
  assetDirname: string;
};

export default function SkillSection({ title, assetDirname }: Props) {
  const infos = useIconsInfos({ dir: assetDirname });

  return (
    <Section
      title={title}
      elements={infos.map(({ filepath, alt, title }, i) => (
        <Image
          key={i}
          src={filepath}
          width={96}
          height={96}
          alt={alt}
          title={title}
          loading="eager"
          className="hover:cursor-pointer p-2 dark:bg-slate-100 dark:rounded-full"
        />
      ))}
      className="grid grid-cols-3 gap-1 sm:gap-4 sm:flex sm:flex-row sm:flex-wrap sm:items-start dark:bg-slate-900"
    />
  );
}
