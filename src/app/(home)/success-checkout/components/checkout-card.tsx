"use client"
import { User } from "lucia"
import React, { FC } from "react"
import FlightCard from "../../checkout/components/flight-card"

interface CheckoutCardProps {
  user: User | null
}

const CheckoutCard: FC<CheckoutCardProps> = ({ user }) => {
  return (
    <div>
      <FlightCard user={user} />
    </div>
  )
}

export default CheckoutCard
