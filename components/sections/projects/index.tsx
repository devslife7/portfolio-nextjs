import { cdcDayCare, dsbConstruction, futFriendsObj, proTaskObj, qatar2022 } from "../../../lib/data/Projects"
import Project from "./Project"

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white">
      <h2 className="text-5xl font-medium text-center pt-20">
        Pro<span className="text-primary">jec</span>ts
      </h2>
      <div>
        <Project {...dsbConstruction} />
        <Project {...cdcDayCare} />
        <Project {...futFriendsObj} />
        <Project {...proTaskObj} />
        <Project {...qatar2022} />
      </div>
    </section>
  )
}
