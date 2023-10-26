import { z } from "zod";

export const SignUpOneSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be atleast 3 characters long" })
        .max(20, { message: "Username must be at most 20 characters long" })
        .trim(),
    email: z.string().email().trim(),
    password: z
        .string()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            {
                message:
                    "Password must contain at least 8 characters, one letter, one number and one special character",
            }
        ),
    confirmPassword: z
        .string()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            {
                message:
                    "Password must contain at least 8 characters, one letter, one number and one special character",
            }
        ),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignUpOneSchemaType = z.infer<typeof SignUpOneSchema>;
