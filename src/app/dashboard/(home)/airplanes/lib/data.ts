"use server"

import prisma from "../../../../../../lib/prisma"

export async function getAirplanes() {
  try {
    const plane = await prisma.airplane.findMany({})
    return plane
  } catch (error) {
    console.error(error)
    return []
  }
}
