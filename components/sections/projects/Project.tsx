"use client"
export default function Project(props: any) {
  const { name, description, techStack, hosting, projectGif } = props

  const renderTechStack = () => {
    return (
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech: any) => (
          <div className="bg-primary-700 text-sm px-2 text-primary-100 rounded">{tech}</div>
        ))}
      </div>
    )
  }

  const renderHosting = () => {
    return (
      <div className="flex flex-wrap gap-3">
        {hosting.map((tech: any) => (
          <div className="bg-primary-700 text-sm px-2 text-primary-100 rounded">{tech}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap lg:flex-nowrap my-container justify-between">
      <div className="bg--400 max-w-[900px]">
        <div className="text-3xl font-medium text-primary">{name}</div>
        <div className="text-lg">{description}</div>
        <h3>Tech Stack:</h3>
        {renderTechStack()}
        <h3>Hosted by:</h3>
        {renderHosting()}
      </div>

      <div className="w-full bg-white">
        <img src={projectGif} className="h-full w-full object-contain" />
      </div>
    </div>
  )
}
