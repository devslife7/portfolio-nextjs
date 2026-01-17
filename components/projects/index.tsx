import { cdcDayCare, dsbConstruction, futFriendsObj, proTaskObj, qatar2022, companyTools } from "../../lib/data/Projects"
import Project from "./Project"

export default function Projects() {
  // Array of projects in display order
  const projects = [companyTools, dsbConstruction, cdcDayCare, futFriendsObj, proTaskObj, qatar2022]
  
  // Get the first project's theme to determine section background
  const firstProjectTheme = projects[0].lightTheme
  const sectionBg = firstProjectTheme ? "bg-white" : "bg-black"
  const headingText = firstProjectTheme ? "text-black" : "text-white"

  return (
    <section id="projects" className={sectionBg}>
      <h2 className={`text-5xl font-medium text-center pt-20 ${headingText}`}>
        Pro<span className="text-primary">jec</span>ts
      </h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
