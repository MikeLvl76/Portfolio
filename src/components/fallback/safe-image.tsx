"use client";

import { SyntheticEvent, useState } from "react";
import Image, { ImageProps } from "next/image";
import FallbackIcon from "./icon";

type Props = {
  fallbackIconProps: { fill: string; className: string };
} & Omit<ImageProps, "onError">;

export default function SafeImage({ fallbackIconProps, ...restProps }: Props) {
  const [imageError, setImageError] =
    useState<SyntheticEvent<HTMLImageElement, Event>>();

  if (imageError) {
    return <FallbackIcon {...fallbackIconProps} />;
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...restProps} onError={setImageError} />;
}
