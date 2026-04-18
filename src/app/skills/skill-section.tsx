"use client";

import { useAssetsInfos } from "@/components/hooks/use-assets-infos";
import { Section } from "@/components/section";
import Image from "next/image";

type Props = {
  title: string;
  assetDirname: string;
};

export default function SkillSection({ title, assetDirname }: Props) {
  const infos = useAssetsInfos({ dir: assetDirname });

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
          loading="lazy"
          className="hover:cursor-pointer p-2"
        />
      ))}
      className="grid grid-cols-3 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-start"
    />
  );
}
