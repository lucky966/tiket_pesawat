"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import { ActionResult, handleSignIn } from "./actions"
import { useFormState } from "react-dom"

// interface FormSignInProps {}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
}

const FormSignIn = () => {
  const [state, formAction] = useFormState(handleSignIn, initialFormState)

  console.log(state)

  return (
    <div className="w-full h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tighter  ">
            Sign in to yout account
          </h2>
        </div>
        {/* validasi error */}
        {state.errorTitle !== null && (
          <div className="bg-red-500 text-white p-4 mx-auto my-7 rounded-lg w-[400px]">
            <div className="font-bold mb-4">{state.errorTitle}</div>

            <ul className="list-disc list-inside">
              {state.errorDesc?.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
          </div>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={formAction} className="space-y-6 ">
            <Input type="email" name="email" placeholder="email..." />
            <Input type="password" name="password" placeholder="password..." />
            <Button className="w-full"> Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSignIn
