"use client";

import { LucideIcon, LucideProps } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = {
  icon: LucideIcon;
  iconProps: LucideProps;
  linkProps: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
  canBeRendered?: boolean;
};

export default function IconLink({
  icon: Icon,
  iconProps,
  linkProps,
  canBeRendered = true,
}: Props) {
  if (!canBeRendered) return null;

  return (
    <Link {...linkProps}>
      <Icon {...iconProps} />
    </Link>
  );
}
