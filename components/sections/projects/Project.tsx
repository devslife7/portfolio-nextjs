"use client"

import { cn } from "../../../lib/utils"
import { GitHubSVG, LinkSVG } from "../../../public/svgs"
import { buttonStyles } from "../../ui/button"

export default function Project(props: any) {
  const {
    name,
    description,
    live,
    techStack,
    projectLink,
    hosting,
    projectGif,
    projectGitHub,
    flipped,
    keyPoints,
    mobile,
  } = props

  const renderBadge = (list: string[]) => {
    return (
      <div className="flex flex-wrap gap-3">
        {list.map((tech: any) => (
          <div className="bg-primary-900 px-3 text-primary-100 rounded-full">{tech}</div>
        ))}
      </div>
    )
  }

  const renderKeyPoints = () => {
    return keyPoints?.map((point: any) => {
      return (
        <div className={cn("opacity-90 text", { "text-black/70": flipped })}>
          <span>&#183;</span> {point}
        </div>
      )
    })
  }

  return (
    <div className={cn({ "bg-white": flipped })}>
      <div className={cn("flex flex-wrap lg:flex-nowrap my-container justify-between py-28 gap-4")}>
        <div className="bg--400 max-w-[50vw]">
          <div className="text-5xl font-medium text-primary mb-1">{name}</div>
          <div className={cn("text-xl mb-6 opacity-90", { "text-black/70": flipped })}>{description}</div>
          {renderKeyPoints()}
          <div className="mb-4 mt-6">
            <p className={cn(" opacity-90", { "text-black/70": flipped })}>Tech Stack:</p>
            {renderBadge(techStack)}
          </div>
          <div className="mb-8">
            <p className={cn("opacity-90", { "text-black/70": flipped })}>Hosted by</p>
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
        <div className={cn("w-full max-w-[700px]", { "max-w-[400px]": mobile })}>
          <img src={projectGif} className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  )
}
