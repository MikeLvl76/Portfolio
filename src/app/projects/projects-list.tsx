"use client";

import { SimpleList } from "@/components/simple-list";
import { ProjectItem } from "./project-item";
import {
  ImageInfos,
  useImagesInfos,
} from "@/components/hooks/use-images-infos";

type Props = {
  assetDirname: string;
};

export default function ProjectsList({ assetDirname }: Props) {
  const infos = useImagesInfos({ dir: assetDirname });

  return (
    <SimpleList<ImageInfos>
      items={infos}
      renderItem={(item) => <ProjectItem info={item} />}
      itemProps={{ className: "leading-relaxed" }}
      className="flex flex-row justify-center sm:justify-start items-start flex-wrap gap-4 sm:gap-8"
    />
  );
}
