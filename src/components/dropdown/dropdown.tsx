"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LanguagesIcon } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  values: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function Dropdown({
  values,
  value,
  onChange,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = values.find((v) => v.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn("relative w-fit", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-row gap-2 justify-center items-center w-full p-2 text-left rounded-sm 
        bg-nav-light hover:bg-slate-400/60 dark:bg-nav-dark dark:text-text-light shadow-sm transition hover:cursor-pointer"
      >
        <LanguagesIcon className="hover:cursor-pointer size-4 sm:size-6 text-slate-900 dark:text-slate-100" />
        {selected?.label}
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-sm bg-nav-light dark:bg-nav-dark shadow-lg overflow-hidden">
          {values.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                "w-full px-3 py-2 text-left text-sm hover:bg-slate-400/60 dark:text-text-light transition hover:cursor-pointer",
                option.value === value &&
                  "bg-nav-light dark:bg-nav-dark font-semibold"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
