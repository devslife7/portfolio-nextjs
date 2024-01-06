"use client"
import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
// import { Link } from "react-scroll"
// import NavLinks from "./NavLinks"
import { cn } from "@/lib/utils"
import { MenuSVG } from "@/public/svgs"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = ["Home", "Projects", "Skills", "About", "Contact"]

export default function Navbar() {
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const renderNavLinks = () => {
    return navLinks.map((link, i) => {
      return (
        <ScrollLink key={i} to={link.toLowerCase()} smooth duration={300}>
          {link}
        </ScrollLink>
      )
    })
  }

  return (
    <nav>
      <header
        //change scrollNav to tailwind animations?
        className={cn(
          "fixed bg-black bg-opacity-50 top-0 z-10 w-full text-white transition-all duration-300 ease-in-out",
          {
            "bg-black bg-opacity-100": scrollNav,
          }
        )}
      >
        <nav className="flex items-center justify-between h-16 my-container bg-pink-400">
          <ScrollLink smooth duration={300} to="home" className="text-2xl font-semibold">
            Portfo<span className="text-primary">lio</span>
          </ScrollLink>

          <MobileNav />
          <div className="hidden sm:block space-x-8">{renderNavLinks()}</div>
        </nav>
      </header>
    </nav>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="bg-green-400">
        <div className="cursor-pointer sm:hidden bg-yellow-400">
          <MenuSVG />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-yellow-500">
        {/* <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader> */}
        <ul className="my-8 bg-blue-300 text-center w-full">
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <SheetClose></SheetClose>
      </SheetContent>
    </Sheet>
  )
}
