import z from "zod";

type SchemaErrorParams = {
  name: {
    min: string;
    max: string;
  };
  email: { format: string };
  message: { min: string; max: string };
};

export const getContactSchema = ({ name, email, message }: SchemaErrorParams) =>
  z
    .object({
      name: z.string().min(1, name.min).max(64, name.max),
      email: z.email({ message: email.format }),
      message: z.string().min(1, message.min).max(1024, message.max),
    })
    .required();

export type Contact = z.infer<ReturnType<typeof getContactSchema>>;
