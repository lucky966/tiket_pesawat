import { Metadata } from "next"
import FormSignIn from "./form"
import { getUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Sign In Page",
}

const SignInPage = async () => {
  const { session, user } = await getUser()

  if (session && user.role === "ADMIN") {
    redirect("/dashboard")
  }

  return <FormSignIn />
}

export default SignInPage
