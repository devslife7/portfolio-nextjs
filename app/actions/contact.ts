"use server"
import EmailTemplate from "@/components/email-template"
import { ContactFormSchema } from "@/lib/validators/contact-form"
import { Resend } from "resend"

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

  // send email using the resend api
  const { name, email, message } = validated.data
  const { error } = await resend.emails.send({
    from: "Portfolio Website <marcos@marcosvelasco.com>",
    to: process.env.RESEND_CONTACT_EMAIL as string,
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

// const express = require('express')
// const router = express.Router()
// const axios = require('axios')

// //POST route
// router.post('/post', async (req, res) => {
//   //Destructuring response token from request body
//   const { token } = req.body

//   //sends secret key and response token to google
//   const googleURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
//   const googleResponse = await axios.post(googleURL)

//   //check response status and send back to the client-side
//   res.send(googleResponse.data.success)
// })
