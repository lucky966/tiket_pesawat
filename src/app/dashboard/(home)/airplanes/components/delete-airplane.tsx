import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import React, { FC } from "react"
import { useFormStatus } from "react-dom"
import { deleteAirplane } from "../lib/actions"

interface DeleteAirplaneProps {
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

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {
  const deleteAirplaneWithId = deleteAirplane.bind(null, id)

  return (
    <form action={deleteAirplaneWithId}>
      <SubmitButon />
    </form>
  )
}

export default DeleteAirplane
