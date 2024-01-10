import Link from "next/link"
import { buttonStyles } from "../ui/button"
import { LinkSVG } from "@/public/svgs"

export default function About() {
  return (
    <section id="about" className=" bg-blue-400 py-28 space-y-10 flex flex-col items-center justify-center">
      <h1 className="font-normal text-5xl text-center">
        Ab<span className="text-primary">ou</span>t
      </h1>
      <div>
        <p className="max-w-[900px]">
          Hello, I&apos;m Marcos Velasco and I&apos;m a Full Stack Software Developer. I have experience in building
          Full Stack Ruby on Rails and Javascript based web applications, and RESTful API architecture. Possess strong
          skill in problem solving and teamwork. Excited by challenging work and enjoy creating sites that focus on
          usefulness and elegance.
        </p>
        <div>
          <Link href="google.com" className={buttonStyles()}>
            Resume
            <div className="text-xl">
              <LinkSVG />
            </div>
          </Link>
        </div>
        <div>links</div>
      </div>
    </section>
  )
}
