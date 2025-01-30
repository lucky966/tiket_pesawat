import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import React, { FC } from "react"
import { useFormStatus } from "react-dom"
import { deleteFlight } from "../lib/actions"

interface DeleteFlightProps {
  id: string
}

function SubmitButon() {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit" size="sm" variant="destructive">
      <Trash className="mr-2 w-4 h-4" />
      Hapus
    </Button>
  )
}

const DeleteFlight: FC<DeleteFlightProps> = ({ id }) => {
  const deleteFlightWithId = deleteFlight.bind(null, id)

  return (
    <form action={deleteFlightWithId}>
      <SubmitButon />
    </form>
  )
}

export default DeleteFlight
