import React from "react"
import { getAirplane } from "../../lib/data"
import CheckboxAirline from "./checkbox-airline"

export default async function FilterAirlane() {
  const airplanes = await getAirplane()
  // console.log(airplanes)

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airplanes.map((val, i) => (
        <CheckboxAirline key={`${val.id + i} `} val={val} />
      ))}
    </div>
  )
}
