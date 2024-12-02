import React, { FC } from "react"
import FormAirplane from "../../components/form-airplane"
import { getAirplaneById } from "../../lib/actions"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Edit Data Airplane",
}

type Params = {
  id: string
}

interface EditAirplaneProps {
  params: Params
}
const EditAirplanePage: FC<EditAirplaneProps> = async ({ params }) => {
  console.log(params.id)

  const data = await getAirplaneById(params.id)
  // console.log(data)

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 font-2xl font-bold">Edit Data Airplane</div>
      </div>
      <FormAirplane type="EDIT" defaultValues={data} />
    </div>
  )
}

export default EditAirplanePage
