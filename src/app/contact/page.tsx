"use client";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col gap-4 p-6 shadow-2xl border border-slate-800 rounded-md w-full min-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl sm:text-3xl text-center">Contact me</h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">Name</label>
            <input
              type="text"
              className="w-full border border-slate-800 rounded-md p-2 text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="w-full border border-slate-800 rounded-md p-2 text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">Message</label>
            <textarea className="w-full border border-slate-800 rounded-md p-2 min-h-30 sm:min-h-37.5 text-sm sm:text-base" />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-500 text-slate-100 rounded-md px-4 py-2 text-sm sm:text-base hover:bg-sky-600 transition hover:cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
