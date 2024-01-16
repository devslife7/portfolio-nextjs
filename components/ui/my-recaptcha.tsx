import ReCAPTCHA from "react-google-recaptcha"

// export default function MyRecaptcha() {
//   return (
//     <ReCAPTCHA
//       sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
//       className="col-span-4 opacity-50"
//       ref={reCaptchaRef}
//     />
//   )
// }

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { useFormStatus } from "react-dom"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const MyRecaptcha = forwardRef<ReCAPTCHA, InputProps>(({ className }, ref) => {
  const { pending } = useFormStatus()
  // return <input ref={ref} disabled={pending} className={cn(inputStyles(), className)} {...props} />
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      className={cn(className, "bg-red-300")}
      ref={ref}
    />
  )
})
MyRecaptcha.displayName = "ReCaptcha"

export default MyRecaptcha
