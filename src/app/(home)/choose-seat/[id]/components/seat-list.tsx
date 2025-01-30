"use client"
import React, { useMemo } from "react"
import SeatItem from "./seat-item"
import useCheckOutData from "@/hooks/useCheckoutData"
import { FlightSeat } from "@prisma/client"

interface SeatListProps {
  seats: FlightSeat[]
}

export default function SeatList({ seats }: SeatListProps) {
  const checkout = useCheckOutData()

  const { seatA, seatB, seatC, seatD } = useMemo(() => {
    const rawState = seats.filter((seat) => seat.type === checkout.data?.seat)
    const seatA = rawState.filter((seat) => seat.seatNumber.startsWith("A"))
    const seatB = rawState.filter((seat) => seat.seatNumber.startsWith("B"))
    const seatC = rawState.filter((seat) => seat.seatNumber.startsWith("C"))
    const seatD = rawState.filter((seat) => seat.seatNumber.startsWith("D"))
    return { seatA, seatB, seatC, seatD }
  }, [checkout, seats])
  // console.log(checkout)

  return (
    <form className="flex flex-row justify-between gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {seatA.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {seatB.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {seatC.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {seatD.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
    </form>
  )
}
