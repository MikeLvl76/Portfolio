"use client";

import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type Props = {
  values: Option[];
  onChange: (value: string) => void;
  className?: string;
  value?: string;
};

export default function Dropdown({
  values,
  onChange,
  className,
  value,
}: Props) {
  const options = values.map(({ label, value }, i) => (
    <option
      key={i}
      value={value}
      className="text-[11px] sm:text-base lg:text-md font-bold hover:cursor-pointer hover:bg-slate-300 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      {label}
    </option>
  ));

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(className)}
    >
      {...options}
    </select>
  );
}
