import React from 'react'
import {projects} from '../../DB/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

import './Projects.scss'
const Projects = () => {
  return (
    <div className='projects-page'>
      <a href='https://github.com/usef-mahmud' target='_blank' className="all">
        all projects on github
      </a>

      <div className="projects-list">
        {
          projects.map(project => {
            return (
              <ProjectCard project={project} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects