"use client";

import ProjectItem from "./project-item";
import {
  ImageInfos,
  useImagesInfos,
} from "@/components/hooks/use-images-infos";

type Props = {
  assetDirname: string;
};

export default function ProjectSection({ assetDirname }: Props) {
  const infos = useImagesInfos({ dir: assetDirname });

  const List = ({ items }: { items: ImageInfos[] }) => (
    <ul className="flex flex-row justify-center sm:justify-start items-start flex-wrap gap-4 sm:gap-8">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          <ProjectItem key={i} info={item} />
        </li>
      ))}
    </ul>
  );

  return <List items={infos} />;
}
