import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma"

// GET method handler
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params // ID kursi dari URL

  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        seat: true, // Pastikan relasi seat ada di Prisma schema
      },
    })

    if (!ticket) {
      return NextResponse.json({ message: "Ticket not found" }, { status: 404 })
    }

    return NextResponse.json({
      seatId: ticket.seat.id,
      isBooked: ticket.seat.isBooked,
      status: ticket.status,
    })
  } catch (error) {
    console.error("Error fetching seat status:", error)
    return NextResponse.json(
      { message: "Error fetching seat status" },
      { status: 500 }
    )
  }
}
