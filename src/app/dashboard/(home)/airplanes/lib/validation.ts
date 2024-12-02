import { z } from "zod"

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"]
const MAX_FILE_SIZE = 2000000 // 2MB

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama pesawat tidak boleh kosong" })
    .min(4, { message: "Nama pesawat minimal memiliki 4 karakter" }),
  code: z
    .string({ required_error: "Kode pesawat tidak boleh kosong!" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, "Kode format harus [XXX-111]"),
  image: z
    .any()
    .refine((file) => file instanceof File, "Image harus berupa file")
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Image harus berekstensi jpg, jpeg, png"
    )
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "Image harus memiliki ukuran maksimal 2MB"
    ),
})
