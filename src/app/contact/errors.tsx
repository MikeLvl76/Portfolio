"use client";

import { Contact } from "@/lib/zod/contact.schema";
import { $ZodFlattenedError } from "zod/v4/core";

type Props = {
  fieldName: keyof Contact;
  errors?: $ZodFlattenedError<{
    [K in keyof Contact]: string;
  }>["fieldErrors"];
};

export default function ContactErrors({ fieldName, errors }: Props) {
  const messages = errors?.[fieldName] ?? [];

  const errorMessages = messages.map((msg, i) => (
    <p key={i} className="text-[12px] sm:text-sm text-red-500">
      {msg}
    </p>
  ));

  return (
    <div className="flex flex-col gap-2 items-start">{...errorMessages}</div>
  );
}
