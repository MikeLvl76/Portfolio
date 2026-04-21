"use client";

import { Contact, getContactSchema } from "@/lib/zod/contact.schema";
import { useState } from "react";
import z from "zod";
import { $ZodFlattenedError } from "zod/v4/core";
import ContactErrors from "./errors";
import { useLocaleContext, useToast } from "@/components/providers";
import { send } from "@/lib/mailer";

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
  const { toast } = useToast();

  const action = async (formData: FormData) => {
    const contactSchema = getContactSchema({
      name: content.form.fields.name.errors,
      email: content.form.fields.email.errors,
      message: content.form.fields.message.errors,
    });
    const result = contactSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!result.success) {
      const errors = z.flattenError(result.error);
      setErrors(errors.fieldErrors);
      return;
    }

    setErrors(undefined);

    try {
      const res = await send(result.data);
      toast(res.message, "success", 3000);
    } catch (err) {
      console.error(err);
      toast((err as Error).message, "error", 3000);
    }
  };

  return (
    <div className="flex justify-center items-start pt-4 sm:pt-12 w-full min-h-screen overscroll-y-auto bg-bg-light dark:bg-bg-dark">
      <div className="flex flex-col gap-4 p-6 shadow-2xl border bg-bg-light dark:bg-nav-dark border-bg-dark rounded-md min-w-1/3 sm:min-w-lg md:max-w-xl">
        <h1 className="text-xl sm:text-2xl text-center text-text-dark dark:text-text-light">
          {content.form.head.label}
        </h1>

        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base text-text-dark dark:text-text-light px-1">
              {content.form.fields.name.label}
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full border bg-slate-300 rounded-md p-2 text-sm sm:text-base text-text-dark focus:outline-none focus:ring-0"
            />
            <ContactErrors fieldName="name" errors={errors} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base text-text-dark dark:text-text-light px-1">
              {content.form.fields.email.label}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full border bg-slate-300 rounded-md p-2 text-sm sm:text-base text-text-dark focus:outline-none focus:ring-0"
            />
            <ContactErrors fieldName="email" errors={errors} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base text-text-dark dark:text-text-light px-1">
              {content.form.fields.message.label}
            </label>
            <textarea
              value={form.message}
              name="message"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full border bg-slate-300 rounded-md p-2 min-h-30 sm:min-h-37.5 text-sm sm:text-base text-text-dark focus:outline-none focus:ring-0"
            />
            <ContactErrors fieldName="message" errors={errors} />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-500 text-text-light font-bold rounded-md px-4 py-2 text-sm sm:text-base hover:bg-sky-600 transition hover:cursor-pointe"
            >
              {content.form.submit.label}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
