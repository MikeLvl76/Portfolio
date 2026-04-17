"use client";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-full min-h-80">
      <h1 className="text-4xl sm:text-6xl font-bold">Welcome</h1>
      <p className="text-base sm:text-xl p-2 text-pretty">
        You can navigate on my portfolio by using the navigation bar above.
      </p>
    </div>
  );
}
