"use client"
import { buttonStyles } from "@/components/ui/button"
import { DownSVG } from "@/public/svgs"
import { Link as ScrollLink } from "react-scroll"

export default function CallToAction() {
  return (
    <ScrollLink className={buttonStyles()} to="projects" smooth="true" duration={500} spy offset={-64}>
      <div>My Projects</div>
      <DownSVG />
    </ScrollLink>
  )
}
