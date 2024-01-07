"use client"
import Typewriter from "typewriter-effect"

export default function MyTypewriter() {
  return (
    <Typewriter
      options={{
        strings: ["Web Designer", "Full Stack Developer", "Freelancer"],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  )
}
