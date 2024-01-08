import { futFriendsObj } from "../../../lib/data/Projects"
import Project from "./Project"

export default function Projects() {
  return (
    <div id="projects" className="h-screen bg-black text-white">
      <div className="text-5xl font-medium text-center py-20">
        Pro<span className="text-primary">jec</span>ts
      </div>
      <Project {...futFriendsObj} />
    </div>
  )
}
