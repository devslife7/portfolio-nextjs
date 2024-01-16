"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG } from "@/public/svgs"
import { ZodType, z } from "zod"
import { useRef } from "react"
import Input from "@/components/ui/input"
import TextArea from "@/components/ui/textarea"
import { toast } from "sonner"
import { contactFormSchema } from "@/lib/validators/contact-form"

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = async (formData: FormData) => {
    const name = formData.get("from_name") as string
    const email = formData.get("from_email") as string
    const message = formData.get("from_message") as string

    // set timeout for 1 second to simulate a real request
    // await new Promise(resolve => setTimeout(resolve, 1000))

    // validate form data
    const parsedData = contactFormSchema.safeParse({ name, email, message })
    if (!parsedData.success) {
      console.log("result", parsedData.error.issues)
      toast.error(
        <div className="text-base">
          {parsedData.error.issues.map(issue => (
            <h2>&#183; {issue.message}</h2>
          ))}
        </div>
      )
      return
    }

    // // send message using a server action
    // const { error } = await sendMessage(parsedData)
    // if (error) return toast.error(error.message)

    // // run success toast and reset form
    // toast.success(`Thanks ${name}, your message was sent successfully`)
    // formRef.current?.reset()
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
