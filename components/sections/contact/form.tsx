"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG, SpinnerSVG } from "@/public/svgs"
import { useFormStatus } from "react-dom"
import { ZodType, z } from "zod"
import React, { useRef, useState } from "react"
import Input, { inputStyles } from "@/components/ui/input"
import { cn } from "@/lib/utils"

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
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submit init")
    setIsLoading(true)

    // set timeout for 2 seconds ch
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)

    console.log("form submitted")
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form ref={formRef} onSubmit={handleFormSubmit} className="grid grid-cols-4 gap-4 text-gray-600">
        <Input disabled={isLoading} type="text" id="name" placeholder="Name" name="from_name" />
        <Input disabled={isLoading} type="email" id="email" placeholder="Email" name="from_email" />

        <textarea
          disabled={isLoading}
          className={cn(inputStyles(), "col-span-4")}
          rows={6}
          id="message"
          placeholder="Message..."
          name="from_message"
        />
        <>
          <Button type="submit" className="col-span-4 lg:col-span-1" disabled={isLoading}>
            {!isLoading ? (
              <>
                <SendSVG className="text-xl" />
                Send
              </>
            ) : (
              <SpinnerSVG className="animate-spin text-2xl" />
            )}
          </Button>
        </>
      </form>
    </div>
  )
}
