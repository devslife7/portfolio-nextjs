"use client"
import { useEffect, useState } from "react"
// import { Bars3Icon } from "@heroicons/react/24/outline"
// import MobileNav from "./MobileNav"
// import { Link as ScrollLink } from "react-scroll"
// import NavLinks from "./NavLinks"
import { cn } from "@/lib/utils"
import { MenuSVG } from "@/public/svgs"

export default function Navbar() {
  const [scrollNav, setScrollNav] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <nav>
      <header
        //change scrollNav to tailwind animations?
        className={cn(
          "fixed bg-black bg-opacity-50 top-0 z-10 w-full text-white transition-all duration-300 ease-in-out",
          {
            "bg-secondary bg-opacity-100": scrollNav,
          }
        )}
      >
        <nav className="flex items-center justify-between h-16 my-container">
          <div className="flex items-center lg:flex-1">
            {/* <ScrollLink to="hero"> */}
            <span className="text-2xl font-semibold">
              Portfo<span className="text-primary">lio</span>
            </span>
            {/* </ScrollLink> */}
          </div>

          {/* <NavLinks dictionary={dictionary} /> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={handleMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <MenuSVG />
            </button>
          </div>
        </nav>
        {/* {mobileMenuOpen && (
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )} */}
      </header>
    </nav>
  )
}
