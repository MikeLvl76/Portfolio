"use client";

type Props = {
  label: string;
  description?: string;
};

export default function ProjectItemBody({ label, description }: Props) {
  return (
    <div className="flex flex-col justify-start gap-2 w-full max-h-3/4">
      <h4 className="text-sm sm:text-base font-bold text-pretty text-text-light select-none touch-none">
        {label}
      </h4>
      <span className="text-[10px] sm:text-sm font-medium text-pretty overflow-hidden hover:overflow-y-auto no-scrollbar text-text-light select-none">
        {description ?? "?"}
      </span>
    </div>
  );
}
