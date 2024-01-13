import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputStyles = cva(
  "py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed col-span-2"
)

// function Input({ className }: { className?: string }) {
//   return (
//     <input
//       className={cn(
//         "py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-2 disabled:opacity-50 cursor-not-allowed",
//         className
//       )}
//       type="text"
//       id="name"
//       placeholder="Name"
//       name="from_name"
//     />
//   )
// }

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn(inputStyles(), className)} {...props} />
})
Input.displayName = "Input"

export default Input
export { inputStyles }
