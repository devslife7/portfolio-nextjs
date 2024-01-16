import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(30, { message: "Name must be less than 30 characters." }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .max(100, { message: "Message must be less than 100 characters." }),
})

export type contactFormTypes = z.infer<typeof ContactFormSchema>
