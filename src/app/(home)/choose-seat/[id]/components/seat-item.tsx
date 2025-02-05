"use client"
import type { FlightSeat } from "@prisma/client"
import React, { useContext, useEffect, useState } from "react"
import { SeatContext, SeatContextType } from "../providers/seat-provider"

interface SeatItemProps {
  seat: FlightSeat
}

export default function SeatItem({ seat }: SeatItemProps) {
  const { setSelectedSeat } = useContext(SeatContext) as SeatContextType
  const [isBooked, setIsBooked] = useState(false)
  // Fetch seat status
  useEffect(() => {
    const fetchSeatStatus = async () => {
      try {
        // Gunakan ID kursi untuk membuat URL
        const response = await fetch(`/api/seats/${seat.id}`)
        const data = await response.json()
        setIsBooked(data.isBooked)
      } catch (error) {
        console.error("Failed to fetch seat status", error)
      }
    }

    const interval = setInterval(fetchSeatStatus, 5000)
    fetchSeatStatus()

    return () => clearInterval(interval)
  }, [seat.id]) // Hanya depend pada seat.id

  return (
    <div className="group flex shrink-0 w-[60px] h-[60px] items-center justify-center relative">
      <label
        htmlFor={seat.seatNumber}
        className="absolute font-bold text-[20px] group-has-[:disabled]:text-[#797684] group-has-[:checked]:text-flysha-black"
      >
        {seat.seatNumber}{" "}
      </label>
      <input
        type="radio"
        name="seat"
        onClick={() => {
          setSelectedSeat(seat)
        }}
        id={seat.seatNumber}
        className="w-[60px] h-[60px] appearance-none rounded-[15px] checked:bg-flysha-light-purple ring-2 ring-white checked:ring-flysha-light-purple disabled:ring-0 disabled:bg-flysha-dark-grey"
        disabled={seat.isBooked ?? false}
      />
    </div>
  )
}
