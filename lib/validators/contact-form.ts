import zod from "zod"

export const contactFormSchema = zod.object({
  name: zod.string().min(1, { message: "Name is required." }).max(30),
  email: zod.string().min(1, { message: "Email is required" }).email(),
  message: zod.string().min(1, { message: "Message is required" }).max(100),
})
