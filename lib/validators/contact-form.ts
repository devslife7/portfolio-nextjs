import zod from "zod"

export const contactFormSchema = zod.object({
  name: zod
    .string()
    .min(1, { message: "Name is required." })
    .max(30, { message: "Name must be less than 30 characters." }),
  email: zod.string().email(),
  message: zod
    .string()
    .min(1, { message: "Message is required." })
    .max(100, { message: "Message must be less than 100 characters." }),
})
