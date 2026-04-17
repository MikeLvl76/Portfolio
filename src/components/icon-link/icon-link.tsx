"use client";

import { LucideIcon, LucideProps } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = {
  icon: LucideIcon;
  iconProps: LucideProps;
  linkProps: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
};

export default function IconLink({ icon: Icon, iconProps, linkProps }: Props) {
  return (
    <Link {...linkProps}>
      <Icon {...iconProps} />
    </Link>
  );
}
