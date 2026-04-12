import z from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(1).max(64),
    email: z.email(),
    message: z.string().min(1).max(1024),
  })
  .required();

export type Contact = z.infer<typeof contactSchema>;
