import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { useFormStatus } from "react-dom"
import ReCAPTCHA from "react-google-recaptcha"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const MyRecaptcha = forwardRef<ReCAPTCHA, InputProps>(({ className }, ref) => {
  const { pending } = useFormStatus()
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      className={cn(className, { "opacity-50 ": pending })}
      ref={ref}
      aria-disabled={true}
    />
  )
})
MyRecaptcha.displayName = "ReCaptcha"

export default MyRecaptcha
