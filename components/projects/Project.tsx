"use client"

import Image from "next/image"
import { cn } from "../../lib/utils"
import { GitHubSVG, LinkSVG } from "../../public/svgs"
import { buttonStyles } from "../ui/button"
import LaptopMockup from "../ui/laptop-mockup"

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
    isPreviewGif,
  } = props

  const renderBadge = (list: string[]) => {
    return (
      <div className="flex flex-wrap gap-3 font-thin">
        {list.map((tech: string, idx: number) => (
          <div
            key={idx}
            className={cn("bg-primary-900 px-3 text-primary-100 rounded-full", {
              "bg-primary-100 text-primary-900": lightTheme,
            })}
          >
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
            "sm:gap-20 lg:gap-24": title === "Special Cocktails",
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
          <div className="sm:space-x-4 space-y-4">
            {live ? (
              <a href={projectLink} className={cn(buttonStyles(), "w-full sm:w-auto")} target="_blank" rel="noreferrer">
                <div className="text-[23px]">
                  <LinkSVG />
                </div>
                Live Demo
              </a>
            ) : null}
            <a
              href={projectGitHub}
              className={cn(buttonStyles({ variant: "inverted" }), "w-full sm:w-auto mx-0 my-0")}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubSVG />
              GitHub
            </a>
          </div>
        </div>
        <div
          className={cn("w-full max-w-[700px]", {
            "max-w-[300px] m-auto": mobile,
          })}
        >
          {title === "Special Cocktails" ? (
            <LaptopMockup className="w-full">
              <Image
                src={projectGif}
                className="h-full w-full object-contain"
                unoptimized={isPreviewGif}
                width={700}
                height={400}
                sizes="60vw"
                alt="Project image"
              />
            </LaptopMockup>
          ) : (
            <Image
              src={projectGif}
              className="h-full w-full object-contain"
              unoptimized={isPreviewGif}
              width={700}
              height={400}
              sizes="60vw"
              alt="Project image"
            />
          )}
        </div>
      </div>
    </div>
  )
}
