"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG, SpinnerSVG } from "@/public/svgs"
import { useFormStatus } from "react-dom"
import { ZodType, z } from "zod"
import React, { useRef } from "react"

type FormTypes = {
  name: string
  email: string
  phone?: string
  message: string
}

const schema: ZodType<FormTypes> = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must contain at least 3 character(s)")
    .max(20, "Name must contain at most 20 character(s)"),
  email: z.string().email("Email must be a valid email"),
  phone: z.string(),
  message: z.string().min(1, "Message is required.").max(50, "Message must contain at most 50 character(s)"),
})

export default function Form() {
  const form = useRef<HTMLFormElement>(null)

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form ref={form} action={sendMessage} className="grid grid-cols-4 gap-4 text-gray-600">
        <input
          className="py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-2"
          type="text"
          id="name"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-2"
          type="email"
          id="email"
          placeholder="Email"
          name="from_email"
        />
        <textarea
          className="w-full py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-4"
          rows={6}
          id="message"
          placeholder="Message..."
          name="from_message"
        />
        <FormButton />
      </form>
    </div>
  )
}

function FormButton() {
  const pending = useFormStatus()
  return (
    <>
      <Button type="submit" className="col-span-4 lg:col-span-1">
        {pending ? (
          <>
            <SendSVG className="text-xl" />
            Send
          </>
        ) : (
          <SpinnerSVG className="animate-spin text-2xl" />
        )}
      </Button>
    </>
  )
}
