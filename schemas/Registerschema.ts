import { z } from "zod";
export const Registerschema = z
  .object({
    name: z
      .string()
      .min(4, { message: "Name must be at least 4 characters long" })
      .max(30, { message: "Name must be at least 30 characters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      values.password === values.confirmPassword;
    },

    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
export type RegisterschemaType = z.infer<typeof Registerschema>;
