import { cdcDayCare, dsbConstruction, futFriendsObj, proTaskObj, qatar2022 } from "../../../lib/data/Projects"
import Project from "./Project"

export default function Projects() {
  return (
    <div id="projects" className="bg-black text-white">
      <div className="text-5xl font-medium text-center pt-20">
        Pro<span className="text-primary">jec</span>ts
      </div>
      <div>
        <Project {...dsbConstruction} />
        <Project {...cdcDayCare} />
        <Project {...futFriendsObj} />
        <Project {...proTaskObj} />
        <Project {...qatar2022} />
      </div>
    </div>
  )
}
