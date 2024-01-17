"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG, SpinnerSVG } from "@/public/svgs"
import { useRef } from "react"
import Input from "@/components/ui/input"
import TextArea from "@/components/ui/textarea"
import { toast } from "sonner"
import { ContactFormSchema } from "@/lib/validators/contact-form"
import ReCAPTCHA from "react-google-recaptcha"
import MyRecaptcha from "@/components/ui/my-recaptcha"
import { useFormStatus } from "react-dom"

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const reCaptchaRef = useRef<ReCAPTCHA>(null)

  const handleFormSubmit = async (formData: FormData) => {
    const name = formData.get("from_name") as string
    const email = formData.get("from_email") as string
    const message = formData.get("from_message") as string
    const recaptcha = formData.get("g-recaptcha-response") as string

    // set timeout to simulate server response
    await new Promise(resp =>
      setTimeout(() => {
        resp(null)
      }, 2000)
    )

    // validate form data
    const validated = ContactFormSchema.safeParse({ name, email, message, recaptcha })
    if (!validated.success) {
      return toast.error(
        <div className="text-sm">
          {validated.error.issues.map((issue, idx) => (
            <p key={idx}>&#183; {issue.message}</p>
          ))}
        </div>
      )
    }

    // send message using a server action
    // const resp = await sendMessage(validated.data)
    // if (!resp.success) {
    //   toast.error("Server error. check console for more details.")
    //   return console.error(resp.error)
    // }

    // run success toast and reset form
    toast.success(`Thanks ${name}, your message was sent successfully`)
    formRef.current?.reset()
    reCaptchaRef.current?.reset()
  }

  return (
    <div className="space-y-4 max-w-xl">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form ref={formRef} action={handleFormSubmit} className="grid grid-cols-4 gap-4 text-gray-600">
        <Input className="col-span-2" type="text" id="name" placeholder="Name" name="from_name" />
        <Input className="col-span-2" type="email" id="email" placeholder="Email" name="from_email" />
        <TextArea className="col-span-4" rows={6} id="message" placeholder="Message..." name="from_message" />
        <MyRecaptcha className="col-span-4" ref={reCaptchaRef} />
        <SubmitButton />
      </form>
    </div>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="col-span-4 lg:col-span-1" disabled={pending}>
      {pending ? (
        <SpinnerSVG className="animate-spin text-2xl" />
      ) : (
        <>
          <SendSVG className="text-xl" />
          Send
        </>
      )}
    </Button>
  )
}
