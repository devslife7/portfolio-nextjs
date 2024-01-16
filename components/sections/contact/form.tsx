"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG } from "@/public/svgs"
import { ZodType, z } from "zod"
import { useRef } from "react"
import Input from "@/components/ui/input"
import TextArea from "@/components/ui/textarea"
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

  const handleFormSubmit = async (formData: FormData) => {
    const name = formData.get("from_name") as string

    // set timeout for 1 second to simulate a real request
    // await new Promise(resolve => setTimeout(resolve, 1000))

    // validate form data
    const result = schema.safeParse(formData)
    if (!result.success) return toast.error(result.error.message)

    // send message using a server action
    const { error } = await sendMessage(formData)
    if (error) return toast.error(error.message)

    // run success toast and reset form
    toast.success(`Thanks ${name}, your message was sent successfully`)
    formRef.current?.reset()
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form ref={formRef} action={handleFormSubmit} className="grid grid-cols-4 gap-4 text-gray-600">
        <div className="col-span-2">
          <Input type="text" id="name" placeholder="Name" name="from_name" />
          {/* <span className="text-red-400 text-sm ml-5"></span> */}
        </div>
        <div className="col-span-2">
          <Input type="email" id="email" placeholder="Email" name="from_email" />
          {/* <span className="text-red-400 text-sm ml-5"></span> */}
        </div>
        <div className="col-span-4">
          <TextArea className="col-span-4" rows={6} id="message" placeholder="Message..." name="from_message" />
          {/* <span className="text-red-400 text-sm ml-5"></span> */}
        </div>
        <Button type="submit" className="col-span-4 lg:col-span-1">
          <SendSVG className="text-xl" />
          Send
        </Button>
      </form>
    </div>
  )
}
