import { frontEnd, backEnd, tools } from "../../lib/data/Skills"

type SkillType = {
  name: string
  icon: () => JSX.Element
}

export default function Skills() {
  const renderSkills = (skills: SkillType[]) => {
    return skills.map((skill, index) => (
      <div key={index}>
        <div className="w-20 h-24 m-auto">{skill.icon()}</div>
        <div className="text-lg opacity-70">{skill.name}</div>
      </div>
    ))
  }

  return (
    <section id="skills" className="my-container">
      <h2 className="text-5xl font-medium text-center pt-20">
        Ski<span className="text-primary">ll</span>s
      </h2>

      <div className="text-center ">
        <label>Front End</label>
        <div className="flex justify-center gap-8">{renderSkills(frontEnd)}la</div>
        <label>Back End</label>
        <div className="flex justify-center gap-8">{renderSkills(backEnd)}</div>
        <label>Tools</label>
        <div className="flex justify-center gap-8">{renderSkills(tools)}</div>
      </div>
    </section>
  )
}
