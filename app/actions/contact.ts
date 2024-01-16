"use server"
import { EmailTemplate } from "@/components/email-template"
// import emailjs from "@emailjs/browser"
import { Resend } from "resend"

export default async function sendMessage(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  // console.log("form Data", typeof formData)

  const { error } = await resend.emails.send({
    from: "Portfolio Website <onboarding@resend.dev>",
    to: "nomadlive4@gmail.com",
    subject: "New Website Contact",
    reply_to: "devslive7@gmail.com",
    react: EmailTemplate({ firstName: "Mike Makousty here" }),
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
