"use client";

import { useIconsInfo } from "@/components/hooks/use-icons-info";
import Image from "next/image";

export default function Page() {
  const infos = useIconsInfo();

  const images = infos.map(({ filepath, alt, title }, i) => (
    <Image
      key={i}
      src={filepath}
      width={96}
      height={96}
      alt={alt}
      title={title}
      className="hover:cursor-pointer p-2"
    />
  ));

  return (
    <div className="flex justify-center items-center max-w-full min-h-screen overscroll-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 xl:gap-x-8 xl:gap-y-4 xl:min-w-7xl max-w-full min-h-screen">
        {...images}
      </div>
    </div>
  );
}
