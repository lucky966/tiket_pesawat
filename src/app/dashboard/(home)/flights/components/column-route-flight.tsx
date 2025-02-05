import { dateFormat } from "@/lib/utils"
import type { Flight } from "@prisma/client"
import { ArrowRight } from "lucide-react"
import React, { type FC } from "react"

interface ColumnRouteFlightProps {
  flight: Flight
}

const ColumnRouteFlight: FC<ColumnRouteFlightProps> = ({ flight }) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div className="text-center">
        <div className="font-bold">{flight.departureCityCode}</div>
        <div className="font-medium">{flight.departureCity}</div>
        <div className="text-gray-700 text-xs">
          {dateFormat(flight.departureDate)}
        </div>
      </div>
      <ArrowRight className="h-5 w-5" />
      <div className="text-center">
        <div className="font-bold">{flight.destinationCityCode}</div>
        <div className="font-medium">{flight.destinationCity}</div>
        <div className="text-gray-700 text-xs">
          {dateFormat(flight.arrivalDate)}
        </div>
      </div>
    </div>
  )
}

export default ColumnRouteFlight
