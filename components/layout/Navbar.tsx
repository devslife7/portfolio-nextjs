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
        <ScrollLink
          key={i}
          duration={300}
          to={link.toLowerCase()}
          smooth
          spy
          offset={-64}
          className="leading-7 transition-all ease-in duration-200 relative cursor-pointer hover:opacity-50
          [&.active]:text-primary [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
        >
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
        <nav className="flex items-center justify-between h-16 my-container">
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
      <SheetTrigger>
        <div className="cursor-pointer sm:hidden">
          <MenuSVG />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-12 gap-0 text-center bg-black text-white">
        <NavLinks className="py-5" />
        <SheetClose></SheetClose>
      </SheetContent>
    </Sheet>
  )
}

function NavLinks({ className }: { className?: string }) {
  return navLinks.map((link, i) => {
    return (
      <ScrollLink
        key={i}
        duration={300}
        to={link.toLowerCase()}
        smooth
        spy
        offset={-64}
        className={cn(
          "leading-7 transition-all ease-in duration-200 relative cursor-pointer hover:opacity-50 [&.active]:text-primary [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8",
          className
        )}
      >
        {link}
      </ScrollLink>
    )
  })
}
