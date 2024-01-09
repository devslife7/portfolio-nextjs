"use client"
import { buttonStyles } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DownSVG } from "@/public/svgs"
import { Link as ScrollLink } from "react-scroll"

export default function CallToAction() {
  return (
    <div>
      <ScrollLink
        className={cn(buttonStyles({ size: "lg" }), "mb-40 md:mb-0")}
        to="projects"
        smooth="true"
        duration={500}
        spy
        offset={-64}
      >
        My Projects
        <DownSVG className="animate-bounce -mb-2 text-2xl" />
      </ScrollLink>
    </div>
  )
}
