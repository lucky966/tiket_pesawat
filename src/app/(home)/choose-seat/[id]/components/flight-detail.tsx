/* eslint-disable @next/next/no-img-element */
"use client"
import useCheckOutData from "@/hooks/useCheckoutData"
import { getUrlFile } from "@/lib/supabase"
import {
  type Checkout,
  CHECKOUT_KEY,
  dateFormat,
  rupiahFormat,
  SEAT_VALUES,
  type SeatValuesType,
} from "@/lib/utils"
import type { Airplane, Flight, FlightSeat } from "@prisma/client"
import React, { useContext, useMemo } from "react"
import { SeatContext, type SeatContextType } from "../providers/seat-provider"
import { useToast } from "@/hooks/use-toast"
import type { Session } from "lucia"
import { useRouter } from "next/navigation"

type FlightProps = Flight & { seats: FlightSeat[]; plane: Airplane }

interface FlightDetailProps {
  flight: FlightProps
  session: Session | null
}

export default function FlightDetail({ flight, session }: FlightDetailProps) {
  const data = useCheckOutData()
  const { toast } = useToast()
  const router = useRouter()

  const { seat } = useContext(SeatContext) as SeatContextType
  // untuk merubah data typeseat
  const selectedSeat = useMemo(() => {
    return SEAT_VALUES[(data.data?.seat as SeatValuesType) ?? "ECONOMY"]
  }, [data.data?.seat])

  // untuk melanjutkan proses booking
  const continueBook = () => {
    if (seat === null) {
      toast({
        title: "Failed to checkout",
        description: "Please select a seat",
      })
      return
    }

    if (session === null) {
      router.replace("/sign-in")
      return
    }

    const checkoutData: Checkout = {
      id: data.data?.id,
      seat: data.data?.seat,
      flightDetail: flight,
      seatDetail: seat,
    }
    sessionStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkoutData))
    router.push("/checkout")
  }

  return (
    <div className="flex flex-col items-center gap-[30px] mt-[61px] pb-[30px]">
      <h1 className="font-bold text-[32px] leading-[48px] text-center">
        {flight.departureCity} to {flight.destinationCity}
      </h1>
      <div className="flex flex-col items-center gap-[30px] w-[335px]">
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex justify-center shrink-0">
            <img
              src="../assets/images/icons/plane-dotted-curve.svg"
              className="w-[972px]"
              alt="icon"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[2px] text-center">
              <p className="font-bold text-lg">
                {dateFormat(flight.departureDate)}
              </p>
              <p className="text-sm text-flysha-off-purple">
                {flight.departureCityCode}
              </p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="font-bold text-lg">
                {" "}
                {dateFormat(flight.arrivalDate)}
              </p>
              <p className="text-sm text-flysha-off-purple">
                {flight.destinationCityCode}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex shrink-0 w-full h-[130px] rounded-[14px] overflow-hidden">
            <img
              src={getUrlFile(flight.plane.image)}
              // src="../assets/images/background/airplane.png"
              className="w-full h-full object-cover"
              alt="airplane"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg">{flight.plane.name}</p>
              <p className="text-sm text-flysha-grey">
                {flight.plane.code} • {selectedSeat.label}
              </p>
            </div>
            <div className="flex h-fit">
              <img
                src="../assets/images/icons/Star.svg"
                className="w-5 h-5"
                alt="star"
              />
              <img
                src="../assets/images/icons/Star.svg"
                className="w-5 h-5"
                alt="star"
              />
              <img
                src="../assets/images/icons/Star.svg"
                className="w-5 h-5"
                alt="star"
              />
              <img
                src="../assets/images/icons/Star.svg"
                className="w-5 h-5"
                alt="star"
              />
              <img
                src="../assets/images/icons/Star.svg"
                className="w-5 h-5"
                alt="star"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex justify-between">
            <span>Date</span>
            <span className="font-semibold">
              {" "}
              {dateFormat(flight.departureDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Seat Choosen</span>
            <span className="font-semibold">{seat?.seatNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Passenger</span>
            <span className="font-semibold">1 Person</span>
          </div>
          <div className="flex justify-between">
            <span>Seat Price</span>
            <span className="font-semibold">
              {rupiahFormat(flight.price + selectedSeat.additionalPrice)}
            </span>
          </div>
        </div>
        <a
          type="button"
          onClick={continueBook}
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center"
        >
          Continue to Book
        </a>
      </div>
    </div>
  )
}
