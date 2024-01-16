"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG, SpinnerSVG } from "@/public/svgs"
import { useFormStatus } from "react-dom"
import { ZodType, z } from "zod"
import React, { useRef, useState } from "react"
import Input, { inputStyles } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

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

  const handleFormSubmit = async (formData: FormData) => {
    // set timeout for 1 second to simulate a real request
    await new Promise(resolve => setTimeout(resolve, 1000))

    // const { error } = await sendMessage(formData)

    // if (error) {
    //   toast.error(error.message)
    //   return
    // }

    const userName = (formRef.current?.children[0] as HTMLInputElement)?.value
    toast.success(`Hi ${userName}, your message was sent successfully`)

    formRef.current?.reset()
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form ref={formRef} action={handleFormSubmit} className="grid grid-cols-4 gap-4 text-gray-600">
        <Input type="text" id="name" placeholder="Name" name="from_name" />
        <Input type="email" id="email" placeholder="Email" name="from_email" />

        <textarea
          className={cn(inputStyles(), "col-span-4")}
          rows={6}
          id="message"
          placeholder="Message..."
          name="from_message"
        />
        <FormButtons />
      </form>
    </div>
  )
}

const FormButtons = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="col-span-4 lg:col-span-1" disabled={pending}>
      {!pending ? (
        <>
          <SendSVG className="text-xl" />
          Send
        </>
      ) : (
        <SpinnerSVG className="animate-spin text-2xl" />
      )}
    </Button>
  )
}
