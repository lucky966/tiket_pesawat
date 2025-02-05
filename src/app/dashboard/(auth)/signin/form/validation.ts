import { z } from "zod"

export const formSchema = z.object({
  email: z
    .string({ required_error: "Email harus di isi!" })
    .email({ message: " Email tidak valid" }),
  password: z
    .string({ required_error: "Password harus di isi!" })
    .min(5, { message: "Password minimal 5" }),
})
