import { Airplane, Flight, FlightSeat, TypeSeat } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// generate kursi pesawat (A1-A60)
export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"]
  const SEAT_CODE = ["A", "B", "C", "D"]

  const seats: { seatNumber: string; type: TypeSeat; flightId: string }[] = []

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: seat + i,
          type: className as TypeSeat,
          flightId,
        })
      }
    }
  }
  console.log(seats)

  return seats
}
// custom tanggal with dayjs
export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return ""
  }
  const dateFormat = dayjs(date).format(format)
  return dateFormat
}
// format ke rupiah
export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value)
}
//validasi kursi yang sudah ter booking
export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter(
    (item) => item.type === "ECONOMY"
  ).length
  const totalSeatBusiness = seats.filter(
    (item) => item.type === "BUSINESS"
  ).length
  const totalSeatFirst = seats.filter((item) => item.type === "FIRST").length

  const economy = seats.filter(
    (item) => item.type === "ECONOMY" && item.isBooked
  ).length
  const business = seats.filter(
    (item) => item.type === "BUSINESS" && item.isBooked
  ).length
  const first = seats.filter(
    (item) => item.type === "FIRST" && item.isBooked
  ).length

  return {
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
    economy,
    business,
    first,
  }
}
// filter available-flights
export const objectToParams = (obj: { [key: string]: unknown }) => {
  const queryParams = Object.keys(obj)
    .map((key) => {
      if (obj[key] !== null) {
        return `${key}=${obj[key]}`
      }

      return ""
    })
    .filter((key) => key !== "")
    .join("&")

  return queryParams
}

// filter TYPE_SEAT
export const SEAT_VALUES = {
  ECONOMY: {
    label: "Economy",
    additionalPrice: 0,
  },
  BUSINESS: {
    label: "Business",
    additionalPrice: 500000,
  },
  FIRST: {
    label: "First",
    additionalPrice: 750000,
  },
}
export type SeatValuesType = keyof typeof SEAT_VALUES
// btn book now
export const CHECKOUT_KEY = "CHECKOUT_KEY"

//fungsi checkout
export type Checkout = {
  id?: string
  seat?: TypeSeat
  flightDetail?: Flight & { plane: Airplane }
  seatDetail?: FlightSeat
}
// fungsi generate code tiket
export function makeid(length: number) {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
