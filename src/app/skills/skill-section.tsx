"use client";

import { useIconsInfos } from "@/components/hooks";
import { Asset } from "@/types/asset";
import Image from "next/image";

type Props = {
  assetDirname: string;
};

export default function SkillSection({ assetDirname }: Props) {
  const infos = useIconsInfos({ dir: assetDirname });

  const List = ({ items }: { items: Asset[] }) => (
    <ul className="flex flex-row justify-center items-start flex-wrap gap-2">
      {items.map(({ filepath, alt, title }, i) => (
        <li key={i} className="leading-relaxed">
          <Image
            key={i}
            src={filepath}
            width={96}
            height={96}
            alt={alt}
            title={title}
            loading="eager"
            className="hover:cursor-pointer p-2 bg-none dark:bg-bg-light dark:rounded-full"
          />
        </li>
      ))}
    </ul>
  );

  return <List items={infos} />;
}
