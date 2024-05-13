import { z } from "zod";

export const registerValidation = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters long",
  }),
  confirmPassword: z.string().min(6, {
    message: "Minimum 6 characters long",
  }),
});

export const signInValidation = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters long",
  }),
});
