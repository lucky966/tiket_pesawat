import { z } from "zod"

export const userSchema = z.object({
  name: z
    .string({ required_error: "Nama tidak boleh kosong!" })
    .min(4, { message: "Nama harus memilik 4 karakter" }),
  email: z
    .string({ required_error: "Email tidak boleh kosong!" })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({ required_error: "Password tidak boleh kosong!" })
    .min(4, { message: "Password harus memilik 4 karakter" }),
  passport: z.string({
    required_error: "Passport tidak boleh kosong!",
  }),
})
