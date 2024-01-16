import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"
import { useFormStatus } from "react-dom"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const inputStyles = cva(
  "py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed col-span-2"
)

const Input = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
  const { pending } = useFormStatus()
  return <textarea ref={ref} disabled={pending} className={cn(inputStyles(), className)} {...props} />
})
Input.displayName = "Input"

export default Input
export { inputStyles }
