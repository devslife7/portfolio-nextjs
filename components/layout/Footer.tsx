import Link from "next/link"
import { socialMediaLinks } from "@/lib/data/socialMediaLinks"

export default function Footer() {
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

  const currentYear = () => {
    const today = new Date()
    return today.getFullYear()
  }

  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center justify-center my-container h-52 gap-y-4 md:flex-row md:justify-between">
        <div className="text-xl text-center">Marcos Velasco</div>
        <div className="text-center ">Copyright © {currentYear()} Marcos Velasco. All rights reserved.</div>
        <div className="flex justify-center gap-x-6">{renderSocialLinks()}</div>
      </div>
    </footer>
  )
}
