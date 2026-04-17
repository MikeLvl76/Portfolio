"use client";

import { AssetInfos } from "@/components/hooks/use-assets-infos";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  info: AssetInfos;
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
      className="min-w-36 min-h-36 sm:min-w-48 sm:min-h-48 md:min-w-60 md:min-h-60 rounded-md shadow-lg/30 touch-none select-none"
    >
      <div className="relative w-full h-full group overflow-hidden">
        <Image
          src={info.filepath}
          alt={info.alt}
          width={0}
          height={0}
          loading="eager"
          className="hover:cursor-pointer object-fill size-36 sm:size-48 md:size-60 rounded-md"
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-full flex gap-2 translate-y-full group-hover:backdrop-blur-lg group-hover:translate-y-0
           bg-white/0 transition-all duration-500 hover:cursor-pointer ${
             mobileHoldPress ? "backdrop-blur-lg translate-y-0" : ""
           }`}
        >
          <div className="flex flex-col gap-2 w-full min-h-1/2 max-h-full overscroll-y-auto p-2">
            <h4 className="text-sm sm:text-base font-bold text-justify text-pretty text-slate-100">
              {info.title}
            </h4>
            <p className="text-[10px] sm:text-sm font-medium text-justify text-pretty text-slate-100">
              {info.description ?? "No description"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
