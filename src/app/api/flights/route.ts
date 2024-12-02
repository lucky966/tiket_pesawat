import type { NextRequest } from "next/server"
import prisma from "../../../../lib/prisma"
import type { TypeSeat } from "@prisma/client"

export async function POST(request: NextRequest) {
  // const searchbody = request.nextUrl.searchbody

  // const body = {
  //   departure: searchbody.get("departure"),
  //   arrival: searchbody.get("arrival"),
  //   date: searchbody.get("date"),
  //   planeId: searchbody.get("planeId"),
  //   seat: searchbody.get("seat"),
  // }

  const body = await request.json()

  let departureDate: Date | null = null

  if (body.date) {
    departureDate = new Date(body.date)
    departureDate.setHours(1)
  }

  try {
    const data = await prisma.flight.findMany({
      where: {
        departureCity: body.departure !== null ? body.departure : {},
        destinationCity: body.arrival !== null ? body.arrival : {},
        seats:
          body.seat !== null
            ? {
                some: {
                  type: body.seat as TypeSeat,
                  isBooked: false,
                },
              }
            : {},
        departureDate:
          departureDate !== null
            ? {
                gte: departureDate,
              }
            : {},
        planeId:
          body.planeIds.length > 0
            ? {
                in: body.planeIds,
              }
            : {},
      },
      include: {
        plane: true, // Tambahkan ini untuk menyertakan data relasi 'plane'
      },
    })

    return Response.json({ data })
  } catch (error) {
    console.log(error)
    return Response.json(
      {
        error: true,
        error_messege: "Failed to get data",
      },
      { status: 500 }
    )
  }
}
