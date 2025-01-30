import React, { useMemo, type FC } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FlightColumn } from "./columns-flight"
import { mappingSeats, rupiahFormat } from "@/lib/utils"

interface ColumnSeatPriceProps {
  flight: FlightColumn
}

export const ColumnSeatPrice: FC<ColumnSeatPriceProps> = ({ flight }) => {
  const {
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
    economy,
    business,
    first,
  } = useMemo(() => mappingSeats(flight.seats), [flight])
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger>Economy</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="font-medium text-primary">
                <span>Harga Tiket : </span>
                {""} {rupiahFormat(flight.price)}
                <br />
                <span>Sisa Kursi : </span>
                {""} {economy}/{totalSeatEconomy}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger>Business</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="font-medium text-primary">
                <span>Harga Tiket : </span>
                {""} {rupiahFormat(flight.price + 500000)}
                <br />
                <span>Sisa Kursi : </span>
                {""} {business}/{totalSeatBusiness}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="w-full">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="font-medium text-primary">
                <span>Harga Tiket : </span>
                {""} {rupiahFormat(flight.price + 750000)}
                <br />
                <span>Sisa Kursi : </span>
                {""} {first}/{totalSeatFirst}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ColumnSeatPrice
