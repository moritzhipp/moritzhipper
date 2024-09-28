import "./Projects.css"

export const Projects = () => {
  const projects = [
    {
      name: "My Website",
      description: "You're looking at it. Check out out the code!",
      link: "https://moritzhipper.com",
      tags: ["React", "Vite"],
    },
    {
      name: "Buddy",
      description: "Helps you find a therapist near you",
      link: "https://github.com/moritzhipper/",
      tags: ["Angular", "Postgres", "NX", "express.js"],
    },
    {
      name: "Keinerdeinerfreunde",
      description: "Makes people feel heard",
      link: "https://keinerdeinerfreunde.de",
      tags: ["React", "three.js"],
    },
  ]
  return (
    <>
      <h1>My Projects</h1>
      <div className="project-wrapper grid">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  )
}

const Project = ({ name, description, link, tags }) => {
  return (
    <a href="{link}" className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="url">{link}</p>
      <div className="tag-wrapper">
        {tags.map((tag, i) => (
          <div className="tag" key={i}>
            {tag}
          </div>
        ))}
      </div>
    </a>
  )
}
