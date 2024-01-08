import { futFriendsObj, proTaskObj, qatar2022, triviappObj } from "../../../lib/data/Projects"
import Project from "./Project"

export default function Projects() {
  return (
    <div id="projects" className="rounded bg-black text-white">
      <div className="text-5xl font-medium text-center py-20">
        Pro<span className="text-primary">jec</span>ts
      </div>
      <div className="space-y-40">
        <Project {...futFriendsObj} />
        <Project {...proTaskObj} />
        <Project {...qatar2022} />
        {/* <Project {...triviappObj} /> */}
      </div>
    </div>
  )
}
