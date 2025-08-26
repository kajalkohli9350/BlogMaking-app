import { z } from "zod";
export const Loginschema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
export type LoginschemaType = z.infer<typeof Loginschema>;
