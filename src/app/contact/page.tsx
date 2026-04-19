"use client";

import { Contact, contactSchema } from "@/lib/zod/contact.schema";
import { useState, SubmitEvent } from "react";
import z from "zod";
import { $ZodFlattenedError } from "zod/v4/core";
import ContactErrors from "./errors";
import { useLocaleContext } from "@/components/providers";

export default function Page() {
  const [form, setForm] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    $ZodFlattenedError<{
      [K in keyof Contact]: string;
    }>["fieldErrors"]
  >();
  const { getLocalePagesContent } = useLocaleContext();
  const content = getLocalePagesContent().contact;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const errors = z.flattenError(result.error);
      setErrors(errors.fieldErrors);
      return;
    }

    setErrors(undefined);

    alert("TODO: send mail with form data");
    console.log("Data: ", result.data);
  };

  return (
    <div className="flex justify-center items-center pt-4 lg:pt-12 overscroll-y-auto">
      <div className="flex flex-col gap-4 p-6 shadow-2xl border border-slate-800 rounded-md min-w-1/3 sm:min-w-lg md:max-w-xl">
        <h1 className="text-xl sm:text-2xl text-center">
          {content.form.head.label}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">
              {content.form.fields.name.label}
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full border border-slate-800 rounded-md p-2 text-sm sm:text-base"
            />
            <ContactErrors fieldName="name" errors={errors} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">
              {content.form.fields.email.label}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full border border-slate-800 rounded-md p-2 text-sm sm:text-base"
            />
            <ContactErrors fieldName="email" errors={errors} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">
              {content.form.fields.message.label}
            </label>
            <textarea
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full border border-slate-800 rounded-md p-2 min-h-30 sm:min-h-37.5 text-sm sm:text-base"
            />
            <ContactErrors fieldName="message" errors={errors} />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-500 text-slate-100 rounded-md px-4 py-2 text-sm sm:text-base hover:bg-sky-600 transition hover:cursor-pointer"
            >
              {content.form.submit.label}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
