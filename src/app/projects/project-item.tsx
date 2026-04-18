"use client";

import { AssetInfos, basePath } from "@/components/hooks/use-assets-infos";
import { IconLink } from "@/components/icon-link";
import { CodeIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { SyntheticEvent, useRef, useState } from "react";

type Props = {
  info: AssetInfos;
};

export default function ProjectItem({ info }: Props) {
  const [mobileHoldPress, setMobileHoldPress] = useState(false);
  const timer = useRef<NodeJS.Timeout>(null);
  const [imageError, setImageError] =
    useState<SyntheticEvent<HTMLImageElement, Event>>();
  const fallbackPath = `${basePath}/error/image-not-found.svg`;

  const handlePressEnd = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  return (
    <div
      onTouchStart={() => {
        handlePressEnd();

        timer.current = setTimeout(() => {
          setMobileHoldPress((prev) => !prev);
        }, 500);
      }}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressEnd}
      onTouchMove={handlePressEnd}
      onContextMenu={(e) => e.preventDefault()}
      className="flex flex-row min-w-36 min-h-36 sm:min-w-48 sm:min-h-48 md:min-w-60 md:min-h-60 rounded-md shadow-lg/30 touch-none select-none"
    >
      <div className="relative w-full h-full group overflow-hidden">
        <Image
          src={imageError ? fallbackPath : info.filepath}
          alt={imageError ? "Error image" : info.alt}
          width={0}
          height={0}
          loading="eager"
          onError={setImageError}
          className="hover:cursor-pointer object-fill size-36 sm:size-48 md:size-60 rounded-md"
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-full flex gap-2 translate-y-full bg-slate-900 group-hover:backdrop-blur-lg backdrop-brightness-75 group-hover:translate-y-0
          transition-all duration-500 hover:cursor-pointer ${
            mobileHoldPress ? "backdrop-blur-lg translate-y-0" : ""
          }`}
        >
          <div className="flex flex-col justify-between gap-2 w-full min-h-1/2 max-h-full overscroll-y-auto p-2">
            <div className="flex flex-col justify-start gap-2 w-full max-h-3/4">
              <h4 className="text-sm sm:text-base font-bold text-pretty text-slate-100 select-none touch-none">
                {info.title}
              </h4>
              <span className="text-[10px] sm:text-sm font-medium text-pretty overflow-hidden hover:overflow-y-auto no-scrollbar text-slate-100 select-none">
                {info.description ?? "No description"}
              </span>
            </div>

            <div className="flex flex-row items-end min-h-1/4 justify-end gap-2">
              {info.externalLinks?.code && (
                <IconLink
                  icon={CodeIcon}
                  iconProps={{
                    color: "#eeeeee",
                    className:
                      "size-8 sm:size-9 rounded-full hover:cursor-pointer p-1",
                  }}
                  linkProps={{
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: info.externalLinks.code,
                    title: "View project code in new tab",
                    className: "hover:bg-slate-800 rounded-full",
                  }}
                />
              )}
              {info.externalLinks?.app && (
                <IconLink
                  icon={ExternalLinkIcon}
                  iconProps={{
                    color: "#eeeeee",
                    className:
                      "size-8 sm:size-9 rounded-full hover:cursor-pointer p-1",
                  }}
                  linkProps={{
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: info.externalLinks.app,
                    title: "Open project in new tab",
                    className: "hover:bg-slate-800 rounded-full",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
