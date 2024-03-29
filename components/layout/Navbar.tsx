"use client"
import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
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
          [&.active]:text-primary text-lg [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
        >
          {link}
        </ScrollLink>
      )
    })
  }

  return (
    <nav
      className={cn("fixed bg-black/0 top-0 z-10 w-full text-white transition-all duration-300 ease-in-out", {
        "bg-black bg-opacity-100": scrollNav,
      })}
    >
      <div className="flex items-center justify-between h-16 my-container">
        <ScrollLink smooth duration={300} to="home" className="text-2xl font-semibold cursor-pointer">
          Portfo<span className="text-primary">lio</span>
        </ScrollLink>
        <MobileSideBar />
        <div className="hidden sm:block space-x-8">{renderNavLinks()}</div>
      </div>
    </nav>
  )
}

function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="cursor-pointer sm:hidden p-2">
          <MenuSVG />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-20 gap-0 text-center bg-black text-white">
        <NavLinks className="py-5 w-full text-2xl" />
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
        // onClick={onClick}
        className={cn(
          "leading-7 transition-all ease-in duration-200 relative cursor-pointer hover:opacity-50 [&.active]:text-primary [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
        )}
      >
        <SheetClose className={className}>{link}</SheetClose>
      </ScrollLink>
    )
  })
}
