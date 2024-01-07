"use client"
import Typewriter from "typewriter-effect"
import { Link as ScrollLink } from "react-scroll"
import Image from "next/image"
import { buttonStyles } from "../../ui/button"
import { DownSVG } from "@/public/svgs"
import Link from "next/link"

import { socialMediaLinks } from "@/lib/data/socialMediaLinks"

export default function Hero() {
  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="text-3xl hover:text-primary"
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
        <div className="text-3xl">
          Hello<span className="text-primary">,</span> my name is
        </div>
        <div className="text-7xl font-semibold mb-4">Marcos Velasco</div>
        <div className="flex text-4xl mb-8">
          <p>I'm a </p>
          <span className="ml-2 text-primary">
            <Typewriter
              options={{
                strings: ["Web Designer", "Full Stack Developer", "Freelancer"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </div>
        <div className="flex gap-6 mb-8">{renderSocialLinks()}</div>
        <div className="home__btnWrapper">
          {/* <ScrollLink className={buttonStyles()} to="projects" smooth="true" duration={500} spy offset={-64}>
            <div>My Projects</div>
            <DownSVG />
          </ScrollLink> */}
        </div>
      </div>
    </div>
  )
}
