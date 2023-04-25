import React from 'react'

import './ProjectCard.scss'
const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
      <div className="project__name">
        <a href={project.url} target='_blank'>{project.name}</a>
      </div>
      <div className="project__date">
        {project.date}
      </div>
    </div>
  )
}

export default ProjectCard