"use client"
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom"
import { signUpUser } from "../lib/actions"

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="text-center text-flysha-black rounded-full bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] disabled:opacity-40"
    >
      Create New Account
    </button>
  )
}

export default function FormSignUp() {
  const [state, formAction] = useFormState(signUpUser, initialFormState)

  return (
    <form
      action={formAction}
      className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5"
    >
      {/* validasi error */}
      {state.errorTitle !== null && (
        <div className="bg-red-500 text-white p-4 rounded-lg w-full">
          <div className="font-bold mb-4">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
      )}
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="font-medium">
            Complete Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="passport" className="font-medium">
            No. Passport
          </Label>
          <Input
            type="text"
            name="passport"
            id="passport"
            placeholder="Write passport number"
            className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 ring-flysha-light-purple"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email" className="font-medium">
          Email Address
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold ring-2 "
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password" className="font-medium">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full h-6 w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
        {/* <span className="error-messages font-medium text-xs text-flysha-red font-inter">
          Wrong format email address
        </span> */}
      </div>
      <SubmitButton />
      <Link
        href="/sign-in"
        className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Sign In
      </Link>
    </form>
  )
}
