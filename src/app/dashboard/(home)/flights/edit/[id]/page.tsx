import React, { type FC } from "react"
import { Metadata } from "next"
import { getAirplanes } from "../../../airplanes/lib/data"
import FormFlight from "../../components/form-flight"
import { getFlightById } from "../../lib/data"

export const metadata: Metadata = {
  title: "Dashboard | Edit Data Flight",
}

type Params = {
  id: string
}

interface EditFlightPageProps {
  params: Params
}

const EditFlightPage: FC<EditFlightPageProps> = async ({ params }) => {
  const airplanes = await getAirplanes()
  const flight = await getFlightById(params.id)
  // console.log(flight)

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit Data Flight</div>
      </div>
      <FormFlight type="EDIT" airplanes={airplanes} defaultValues={flight} />
    </div>
  )
}

export default EditFlightPage
