"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  itemProps?: { key?: string; className?: string };
  className?: string;
};

export default function SimpleList<T>({
  items,
  renderItem,
  itemProps,
  className,
}: Props<T>) {
  return (
    <ul className={cn(className)}>
      {items.map((item, i) => (
        <li key={itemProps?.key ?? i} className={cn(itemProps?.className)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
