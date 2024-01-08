import { frontEnd, backEnd, tools } from "../../lib/data/Skills"

type SkillType = {
  name: string
  icon: () => JSX.Element
}

export default function Skills() {
  const renderSkills = (skills: SkillType[]) => {
    return (
      <div className="flex justify-center gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="w-20 h-24 m-auto">{skill.icon()}</div>
            <div className="text-lg opacity-70">{skill.name}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="my-container py-20">
      <h2 className="text-5xl font-medium text-center">
        Ski<span className="text-primary">ll</span>s
      </h2>

      <div className="text-center ">
        <label>Front End</label>
        {renderSkills(frontEnd)}
        <label>Back End</label>
        {renderSkills(backEnd)}
        <label>Tools</label>
        {renderSkills(tools)}
      </div>
    </section>
  )
}
