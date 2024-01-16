import zod from "zod"

export const contactFormSchema = zod.object({
  name: zod.string().min(2).max(30),
  email: zod.string().email(),
  message: zod.string().min(10).max(100),
})
