"use server"
import EmailTemplate from "@/components/email-template"
import { ContactFormSchema } from "@/lib/validators/contact-form"
import { Resend } from "resend"
import verifyReCaptcha from "./reCaptcha"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendMessage(formData: unknown) {
  // server side validation
  const validated = ContactFormSchema.safeParse(formData)
  if (!validated.success) {
    return {
      status: 400,
      success: false,
      error: {
        message: "Message failed validate",
        errors: validated.error.issues,
      },
    }
  }

  // verify recaptcha
  const captchaResp = await verifyReCaptcha(validated.data.recaptcha)
  if (!captchaResp.success) return captchaResp

  // send email using the resend api
  const { name, email, message } = validated.data
  const { error } = await resend.emails.send({
    from: "Portfolio Website <marcos@marcosvelasco.com>",
    to: process.env.RESEND_CONTACT_EMAIL!,
    subject: `${name} sent you a message from your portfolio website.`,
    reply_to: email,
    react: EmailTemplate(validated.data),
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  })

  if (error) {
    return {
      status: 400,
      success: false,
      error: {
        message: "Message failed to send.",
        errors: error,
      },
    }
  }

  return {
    status: 200,
    success: true,
    message: "Message sent successfully.",
    error: null,
  }
}
