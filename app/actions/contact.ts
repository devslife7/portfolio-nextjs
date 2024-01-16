"use server"
import VercelInviteUserEmail from "@/components/email-template"
import { ContactFormSchema } from "@/lib/validators/contact-form"
// import emailjs from "@emailjs/browser"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendMessage(formData: unknown) {
  console.log("formData", formData)
  // server side validation
  const validated = ContactFormSchema.safeParse(formData)
  if (!validated.success) {
    return {
      status: 400,
      message: "Message failed validate",
      error: validated.error.issues,
    }
  }

  // send email using the resend api
  const { name, email } = validated.data
  const { error } = await resend.emails.send({
    from: "Portfolio Website <onboarding@resend.dev>",
    to: process.env.RESEND_CONTACT_EMAIL || "devslife7@gmail.com",
    subject: `${name} sent you a message from your portfolio website.`,
    reply_to: email,
    react: VercelInviteUserEmail({
      username: "zenorocha",
      userImage: `/static/vercel-user.png`,
      invitedByUsername: "bukinoshita",
      invitedByEmail: "bukinoshita@example.com",
      teamName: "My Project",
      teamImage: `/static/vercel-team.png`,
      inviteLink: "https://vercel.com/teams/invite/foo",
      inviteFromIp: "204.13.186.218",
      inviteFromLocation: "São Paulo, Brazil",
    }),
    text: "New Website Contact",
  })

  if (error) {
    return {
      status: 400,
      message: "Message failed to send.",
      error: error,
    }
  }

  return {
    status: 200,
    message: "Message sent successfully.",
    error: null,
  }
}
