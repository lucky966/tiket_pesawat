import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Metadata } from "next"
import { columns } from "./components/columns-user"
import { DataTable } from "@/components/ui/data-table"
import { getCustomers } from "./lib/data"

export const metadata: Metadata = {
  title: "Dashboard | User",
}

export default async function UserPage() {
  const users = await getCustomers()
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">User</div>
        <Button asChild>
          <Link href={"/dashboard/sers/create"}>
            <Plus className="mr-2 h-4 w-4" /> Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  )
}
