import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const allTechnologies= technologies.map(tech=>{
    
    return <span key={tech}>{tech}</span>
    console.log(tech)
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{allTechnologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
