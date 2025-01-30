"use server"

import { getUser, lucia } from "@/lib/auth"
import type { ActionResult } from "../(auth)/signin/form/actions"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import prisma from "../../../../lib/prisma"

export async function logout(): Promise<ActionResult> {
  const { session } = await getUser()

  if (!session) {
    return {
      errorTitle: "Error",
      errorDesc: ["Unauthorized"],
    }
  }
  await lucia.invalidateUserSessions(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return redirect("/dashboard/signin")
}


