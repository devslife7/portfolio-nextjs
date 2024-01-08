"use client"
import { cn } from "@/lib/utils"
import Typewriter from "typewriter-effect"

export default function MyTypewriter({ className }: { className?: string }) {
  return (
    <div className={cn("text-primary", className)}>
      <Typewriter
        options={{
          strings: ["Web Designer", "Full Stack Developer", "Freelancer"],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  )
}
