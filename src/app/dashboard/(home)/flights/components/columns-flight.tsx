"use client"

import { Button } from "@/components/ui/button"
import { getUrlFile } from "@/lib/supabase"
import type { Airplane, FlightSeat, Flight } from "@prisma/client"
import type { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ColumnRouteFlight from "./column-route-flight"
import ColumnSeatPrice from "./column-seatprice"
import DeleteFlight from "./delete-flight"

export type FlightColumn = Flight & {
  plane: Airplane
  seats: FlightSeat[]
}

export const columns: ColumnDef<FlightColumn>[] = [
  {
    accessorKey: "planeId",
    header: "Pesawat",
    cell: ({ row }) => {
      const flight = row.original
      // console.log(flight)
      const planeImageUrl = getUrlFile(flight.plane.image)
      return (
        <div className="inline-flex items-center gap-5">
          <Image
            className="rounded-xl"
            src={planeImageUrl}
            alt="plane image"
            width={120}
            height={120}
          />
          <div className="font-bold">{flight.plane.name}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "departureCity",
    header: "Rute",
    cell: ({ row }) => {
      const flight = row.original
      return <ColumnRouteFlight flight={flight} />
    },
  },
  {
    accessorKey: "price",
    header: "Harga / Kursi",
    cell: ({ row }) => {
      const flight = row.original
      return <ColumnSeatPrice flight={flight} />
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original
      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/flights/edit/${flight.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <DeleteFlight id={flight.id} />
        </div>
      )
    },
  },
]
