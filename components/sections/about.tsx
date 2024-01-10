import Link from "next/link"
import { buttonStyles } from "../ui/button"
import { LinkSVG } from "@/public/svgs"
import { socialMediaLinks } from "@/lib/data/socialMediaLinks"

export default function About() {
  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="hover:text-primary md:ml-1"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        {link.icon}
      </Link>
    ))
  }

  return (
    <section id="about" className="bg-[#454545] text-gray-200 py-28">
      <div className="my-container space-y-10 flex flex-col items-center justify-center">
        <h1 className="font-normal text-5xl text-center text-white">
          Ab<span className="text-primary">ou</span>t
        </h1>
        <div className="space-y-10">
          <p className="max-w-[850px] leading-[1.9rem] text-lg">
            Hello, I&apos;m Marcos Velasco and I&apos;m a Full Stack Software Developer. I have experience in building
            Full Stack Ruby on Rails and Javascript based web applications, and RESTful API architecture. Possess strong
            skill in problem solving and teamwork. Excited by challenging work and enjoy creating sites that focus on
            usefulness and elegance.
          </p>
          <div>
            <Link
              href="https://docs.google.com/document/d/17uI6lYjB1E6AioHoP3Cc6fBPmfFkutp2KXSefHKYsa8/edit?usp=sharing"
              target="_blank"
              className={buttonStyles()}
            >
              Resume
              <div className="text-xl">
                <LinkSVG />
              </div>
            </Link>
          </div>
          <div className="flex gap-6 mb-5 md:mb-10">{renderSocialLinks()}</div>
        </div>
      </div>
    </section>
  )
}
