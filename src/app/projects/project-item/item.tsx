"use client";

import { SafeImage } from "@/components/fallback";
import { ImageInfos } from "@/components/hooks";
import { CodeIcon, ExternalLinkIcon } from "lucide-react";
import { useRef, useState } from "react";
import ProjectItemBody from "./body";
import ProjectItemFooter from "./footer";

type Props = {
  info: ImageInfos;
};

export default function ProjectItem({ info }: Props) {
  const [mobileHoldPress, setMobileHoldPress] = useState(false);
  const timer = useRef<NodeJS.Timeout>(null);

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
      className="flex w-32 h-32 sm:w-36 sm:h-36 md:w-42 md:h-42 lg:w-50 lg:h-50 rounded-md shadow-lg/30 touch-none select-none"
    >
      <div className="relative w-full h-full group overflow-hidden">
        <SafeImage
          src={info.filepath}
          alt={info.alt}
          width={0}
          height={0}
          loading="eager"
          fallbackIconProps={{
            fill: "#111111",
            className:
              "flex self-end object-cover justify-self-center hover:cursor-pointer w-full h-full bg-bg-light rounded-md",
          }}
          className="hover:cursor-pointer object-cover w-full h-full rounded-md bg-bg-light"
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-full flex gap-2 translate-y-full bg-nav-dark group-hover:backdrop-blur-lg backdrop-brightness-75 group-hover:translate-y-0
          transition-all duration-500 hover:cursor-pointer ${
            mobileHoldPress ? "backdrop-blur-lg translate-y-0" : ""
          }`}
        >
          <div className="flex flex-col justify-between gap-2 w-full min-h-1/2 max-h-full overscroll-y-auto p-2">
            <ProjectItemBody
              label={info.title}
              description={info.description}
            />

            <ProjectItemFooter
              appIcon={ExternalLinkIcon}
              codeIcon={CodeIcon}
              links={info.externalLinks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
