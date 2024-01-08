import Image from "next/image"
import Link from "next/link"
import { socialMediaLinks } from "@/lib/data/socialMediaLinks"
import MyTypewriter from "./MyTypewriter"
import CallToAction from "./CallToAction"

export default function Hero() {
  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="hover:text-primary ml-4"
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
    <div id="home" className="relative h-screen bg-black/60">
      <Image
        src="/hero-background.jpg"
        fill
        priority
        alt="hero background"
        sizes="100vw"
        className="object-cover -z-10"
      />

      <div className="w-full flex flex-col justify-center h-screen text-white my-container">
        <div className="text-3xl mb-4">
          Hello<span className="text-primary">,</span> my name is
        </div>
        <div className="text-8xl font-semibold mb-4">Marcos Velasco</div>
        <div className="flex text-5xl mb-10 space-x-3">
          <p>I'm a </p>
          <MyTypewriter />
        </div>
        <div className="flex gap-6 mb-10">{renderSocialLinks()}</div>
        <CallToAction />
      </div>
    </div>
  )
}
