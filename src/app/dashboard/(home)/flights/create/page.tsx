import React, { type FC } from "react"
import { Metadata } from "next"
import FormFlight from "../components/form-flight"
import { getAirplanes } from "../../airplanes/lib/data"

export const metadata: Metadata = {
  title: "Dashboard | Tambah Data Flight",
}

const CreateFlightPage: FC = async () => {
  const airplanes = await getAirplanes()

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Flight</div>
      </div>
      <FormFlight type="ADD" airplanes={airplanes} />
    </div>
  )
}

export default CreateFlightPage
