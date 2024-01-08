"use client"

import { cn } from "../../../lib/utils"
import { GitHubSVG, LinkSVG } from "../../../public/svgs"
import { buttonStyles } from "../../ui/button"

export default function Project(props: any) {
  const {
    title,
    description,
    live,
    techStack,
    projectLink,
    hosting,
    projectGif,
    projectGitHub,
    flipped,
    keyPoints,
    lightTheme,
    mobile,
  } = props

  const renderBadge = (list: string[]) => {
    return (
      <div className="flex flex-wrap gap-3 font-thin">
        {list.map((tech: string, idx: number) => (
          <div key={idx} className="bg-primary-900 px-3 text-primary-100 rounded-full">
            {tech}
          </div>
        ))}
      </div>
    )
  }

  const renderKeyPoints = () => {
    return keyPoints?.map((point: string, idx: number) => {
      return (
        <div key={idx} className={cn("opacity-90 ", { "text-black/70": lightTheme })}>
          <span>&#183;</span> {point}
        </div>
      )
    })
  }

  return (
    <div className={cn({ "bg-white": lightTheme })}>
      <div
        className={cn(
          "flex flex-wrap sm:justify-center lg:flex-nowrap my-container lg:justify-between py-12 sm:py-28 gap-4",
          {
            "lg:flex-row-reverse sm:gap-16": flipped,
          }
        )}
      >
        <div className="max-w-[600px] ">
          <div className="text-4xl md:text-5xl font-medium text-primary mb-1">{title}</div>
          <div className={cn("text-lg md:text-xl mb-6 opacity-90", { "text-black/70": lightTheme })}>{description}</div>
          {renderKeyPoints()}
          <div className="mb-4 mt-6">
            <p className={cn(" opacity-90", { "text-black/70": lightTheme })}>Tech Stack:</p>
            {renderBadge(techStack)}
          </div>
          <div className="mb-8">
            <p className={cn("opacity-90", { "text-black/70": lightTheme })}>Hosted by</p>
            {renderBadge(hosting)}
          </div>
          <div className="">
            {live ? (
              <a
                href={projectLink}
                className={cn(buttonStyles(), "mb-4 sm:mb-0 sm:mr-10  w-full")}
                target="_blank"
                rel="noreferrer"
              >
                <LinkSVG className="w-4 h-4" />
                Live Demo
              </a>
            ) : null}
            <a
              href={projectGitHub}
              className={cn(buttonStyles({ variant: "inverted" }), "w-full")}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubSVG className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className={cn("w-full max-w-[700px]", { "max-w-[300px] m-auto": mobile })}>
          <img src={projectGif} className="h-full w-full object-contain" alt="Project image" />
        </div>
      </div>
    </div>
  )
}
