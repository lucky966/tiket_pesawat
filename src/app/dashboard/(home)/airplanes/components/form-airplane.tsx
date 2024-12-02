"use client"

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { FC } from "react"
import { useFormState, useFormStatus } from "react-dom"
// import type { Airplane } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { saveAirplane, updateAirplane } from "../lib/actions"
import { Airplane } from "@prisma/client"
// form create | edit

interface FormAirplaneProps {
  type?: "ADD" | "EDIT"
  defaultValues?: Airplane | null
}
// validasi error
const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
}
// components button
const SubmitButtonForm = () => {
  const { pending } = useFormStatus()

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      Submit
    </Button>
  )
}
// components form airplane
const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    updateAirplane(null, defaultValues?.id!, formData)
  //
  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  )

  return (
    <form action={formAction} className="w-[40%] space-y-4">
      {state.errorTitle !== null && (
        <div className="bg-red-500 text-white p-4 mx-auto my-7 rounded-lg w-[400px]">
          <div className="font-bold mb-4">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input
          name="name"
          id="name"
          placeholder="masukkan nama..."
          defaultValue={defaultValues?.name}
          required
        ></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input
          name="code"
          id="code"
          placeholder="masukkan code..."
          defaultValue={defaultValues?.code}
          required
        ></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Gambar Pesawat</Label>
        <Input name="image" id="image" type="file" required></Input>
      </div>
      <div className="space-y-2">
        <SubmitButtonForm />
      </div>
    </form>
  )
}

export default FormAirplane
