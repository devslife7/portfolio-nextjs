import { techStack, frontEnd, backEnd, tools } from "../../lib/data/Skills"

type SkillType = {
  name: string
  icon: () => JSX.Element
}

export default function Skills() {
  const renderSkills = (skills: SkillType[], title: string) => {
    return (
      <div className="mt-10">
        <h2>{title}</h2>
        <div className="flex justify-center gap-8 mt-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="size-14 m-auto">{skill.icon()}</div>
              {/* <div className=" opacity-70">{skill.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="my-container py-20">
      <h2 className="text-5xl font-medium text-center mb-10">
        Ski<span className="text-primary">ll</span>s
      </h2>

      <div className="text-center text-gray-500 flex flex-col flex-wrap">
        {renderSkills(techStack, "Main Techstack")}
        {renderSkills(frontEnd, "Front End")}
        {renderSkills(backEnd, "Back End")}
        {renderSkills(tools, "Tools")}
      </div>
    </section>
  )
}
