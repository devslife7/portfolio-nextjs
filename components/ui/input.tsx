import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"
import { useFormStatus } from "react-dom"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputStyles = cva(
  "py-3 px-4 w-full rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
)

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const { pending } = useFormStatus()
  return <input ref={ref} disabled={pending} className={cn(inputStyles(), className)} {...props} />
})
Input.displayName = "Input"

export default Input
export { inputStyles }
