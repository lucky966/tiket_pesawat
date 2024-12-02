"use client"

import { Button } from "@/components/ui/button"
import { getUrlFile } from "@/lib/supabase"
// import { DataTable } from "@/components/ui/data-table"
import { Airplane } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import DeleteAirplane from "./delete-airplane"
// import DeleteAirplane from "./delete-airplane"
export const columns: ColumnDef<Airplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const plane = row.original

      return (
        <Image
          src={getUrlFile(plane.image)}
          alt="airplane image"
          width={60}
          height={60}
        />
      )
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "code",
    header: "Code",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original
      return (
        <>
          <div className="inline-flex gap-5 items-center">
            <Button variant="secondary" size="sm" asChild>
              <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
            <DeleteAirplane id={plane.id} />
          </div>
        </>
      )
    },
  },
]
