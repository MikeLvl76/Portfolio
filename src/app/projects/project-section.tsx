"use client";

import ProjectItem from "./project-item";
import { Section } from "@/components/section";
import { useImagesInfos } from "@/components/hooks/use-images-infos";

type Props = {
  title: string;
  assetDirname: string;
};

export default function ProjectSection({ title, assetDirname }: Props) {
  const infos = useImagesInfos({ dir: assetDirname });

  return (
    <Section
      title={title}
      elements={infos.map((info, i) => (
        <ProjectItem key={i} info={info} />
      ))}
      className="flex flex-col gap-4 items-center sm:flex-row sm:flex-wrap sm:items-start"
    />
  );
}
