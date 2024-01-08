import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import Projects from "../components/sections/projects"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
