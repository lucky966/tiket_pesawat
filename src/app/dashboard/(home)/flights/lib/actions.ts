"use server"

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions"
import { redirect } from "next/navigation"
import { FormFlighSchema } from "./validation"
import { generateSeatPerClass } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import prisma from "../../../../../../lib/prisma"
// create flight
export async function saveFlight(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("planeId"))

  const departureDate = new Date(formData.get("departureDate") as string)
  const arrivalDate = new Date(formData.get("arrivalDate") as string)

  const validate = FormFlighSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate,
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate,
  })

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message)

    return {
      errorTitle: "Error Validation",
      errorDesc,
    }
  }

  const data = await prisma.flight.create({
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  })

  const seats = generateSeatPerClass(data.id)

  await prisma.flightSeat.createMany({
    data: seats,
  })
  revalidatePath("/dashboard/flights")
  redirect("/dashboard/flights")
}
// update flight
export async function updateFlight(
  prevState: unknown,
  id: string | null,
  formData: FormData
): Promise<ActionResult> {
  if (!id) {
    return {
      errorTitle: "Params ID missing",
      errorDesc: [],
    }
  }
  const departureDate = new Date(formData.get("departureDate") as string)
  const arrivalDate = new Date(formData.get("arrivalDate") as string)

  const validate = FormFlighSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate,
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate,
  })

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message)

    return {
      errorTitle: "Error Validation",
      errorDesc,
    }
  }

  await prisma.flight.update({
    where: { id: id },
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  })
  revalidatePath("/dashboard/flights")
  redirect("/dashboard/flights")
}
// delete flight
export async function deleteFlight(id: string) {
  try {
    await prisma.flightSeat.deleteMany({ where: { flightId: id } })
    await prisma.flight.delete({ where: { id: id } })
    // console.log(tes)
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/dashboard/flights")
}
