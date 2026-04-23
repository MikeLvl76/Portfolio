"use client";

import { ImageInfos } from "@/components/hooks";
import { IconLink } from "@/components/icon-link";
import { LucideIcon } from "lucide-react";

type Props = {
  codeIcon: LucideIcon;
  appIcon: LucideIcon;
  links?: ImageInfos["externalLinks"];
};

export default function ProjectItemFooter({
  appIcon: AppIcon,
  codeIcon: CodeIcon,
  links,
}: Props) {
  return (
    <div className="flex flex-row items-end min-h-1/4 justify-end gap-2">
      <IconLink
        icon={CodeIcon}
        iconProps={{
          color: "#eeeeee",
          className:
            "size-8 sm:size-9 rounded-full hover:cursor-pointer p-1 focus:outline-none focus:ring-0",
        }}
        linkProps={{
          target: "_blank",
          rel: "noopener noreferrer",
          href: links?.code || "#",
          title: "View project code in new tab",
          className: "hover:bg-slate-800 rounded-full",
        }}
        canBeRendered={Boolean(links?.code)}
      />
      <IconLink
        icon={AppIcon}
        iconProps={{
          color: "#eeeeee",
          className:
            "size-8 sm:size-9 rounded-full hover:cursor-pointer p-1 focus:outline-none focus:ring-0",
        }}
        linkProps={{
          target: "_blank",
          rel: "noopener noreferrer",
          href: links?.app || "#",
          title: "Open project in new tab",
          className: "hover:bg-slate-800 rounded-full",
        }}
        canBeRendered={Boolean(links?.app)}
      />
    </div>
  );
}
