import { z } from "zod"

export const FormFlighSchema = z.object({
  planeId: z.string({ required_error: "Pesawat tidak boleh kosong!" }),
  price: z.string({ required_error: "Harga tidak boleh kosong!" }),
  departureCity: z.string({
    required_error: "Kota Keberangkatan tidak boleh kosong!",
  }),
  departureDate: z.date(),
  departureCityCode: z
    .string({
      required_error: "Kode Kota tidak boleh kosong!",
    })
    .min(3, { message: "Kode Kota harus minimal 3 karakter!" }),

  arrivalDate: z.date(),
  destinationCity: z.string({
    required_error: "Kota Tujuan tidak boleh kosong!",
  }),
  destinationCityCode: z
    .string({
      required_error: "Tanggal Tujuan tidak boleh kosong!",
    })
    .min(3, { message: "Kode Kota harus minimal 3 karakter!" }),
})
