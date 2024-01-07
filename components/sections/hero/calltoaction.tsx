"use client"
import { buttonStyles } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DownSVG } from "@/public/svgs"
import { Link as ScrollLink } from "react-scroll"

export default function CallToAction() {
  return (
    <div>
      <ScrollLink className={cn(buttonStyles(), " ")} to="projects" smooth="true" duration={500} spy offset={-64}>
        <div>My Projects</div>
        <DownSVG />
      </ScrollLink>
    </div>
  )
}
