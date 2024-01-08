"use client"

import { cn } from "../../../lib/utils"
import { GitHubSVG, LinkSVG } from "../../../public/svgs"
import { buttonStyles } from "../../ui/button"

export default function Project(props: any) {
  const { name, description, live, techStack, projectLink, hosting, projectGif, projectGitHub } = props

  const renderBadge = (list: string[]) => {
    return (
      <div className="flex flex-wrap gap-3">
        {list.map((tech: any) => (
          <div className="bg-primary-900 px-3 text-primary-100 rounded-full">{tech}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap lg:flex-nowrap my-container justify-between gap-40">
      <div className="bg--400 max-w-[60vw] space-y-8">
        <div className="text-5xl font-medium text-primary">{name}</div>
        <div className="text-2xl">{description}</div>
        <div>
          <span>Tech Stack:</span>
          {renderBadge(techStack)}
        </div>
        <div>
          <h3>Hosted by:</h3>
          {renderBadge(hosting)}
        </div>

        <div className="">
          {live ? (
            <a href={projectLink} className={cn(buttonStyles(), "mr-10 ")} target="_blank" rel="noreferrer">
              <LinkSVG className="w-4 h-4" />
              Live Demo
            </a>
          ) : null}
          <a href={projectGitHub} className={buttonStyles({ variant: "inverted" })} target="_blank" rel="noreferrer">
            <GitHubSVG className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="w-full max-w-[700px]">
        <img src={projectGif} className="h-full w-full object-contain" />
      </div>
    </div>
  )
}
