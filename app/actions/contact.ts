"use server"
import { EmailTemplate } from "@/components/email-template"
import { ContactFormSchema, contactFormTypes } from "@/lib/validators/contact-form"
// import emailjs from "@emailjs/browser"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendMessage(formData: unknown) {
  console.log("formData", formData)
  // server side validation
  const parsedData = ContactFormSchema.safeParse(formData)
  if (!parsedData.success) {
    return {
      status: 400,
      message: "Message failed validate",
      error: parsedData.error.issues,
    }
  }

  //
  // send email using the resend api
  const { error } = await resend.emails.send({
    from: "Portfolio Website <onboarding@resend.dev>",
    to: "nomadlive4@gmail.com",
    subject: "New Website Contact",
    reply_to: "devslive7@gmail.com",
    react: EmailTemplate({ firstName: "Marcos Velasco asdfadfasdf" }),
    text: "Hello World",
  })

  if (error) {
    return {
      status: 400,
      message: "Message failed to send",
      error: error,
    }
  }

  return {
    status: 200,
    message: "Message sent successfully",
    error: null,
  }
}
