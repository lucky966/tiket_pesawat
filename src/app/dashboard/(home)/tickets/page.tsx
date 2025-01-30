import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Metadata } from "next"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./components/columns-ticket"
import { getTickets } from "./lib/data"

export const metadata: Metadata = {
  title: "Dashboard | Ticket",
}

export default async function TicketPage() {
  const tickets = await getTickets()
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Ticket</div>
        <Button asChild>
          <Link href={"/dashboard/tickets/create"}>
            <Plus className="mr-2 h-4 w-4" /> Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={tickets} />
    </>
  )
}
