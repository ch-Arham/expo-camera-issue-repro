import { z } from "zod";

export const ForgotEmailSchema = z.object({
    email: z.string().email("Invalid email address").trim(),
});

export type ForgotEmailSchemaType = z.infer<typeof ForgotEmailSchema>;