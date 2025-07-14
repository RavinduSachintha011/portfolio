import React from 'react'
import './Projects.css'
import { ProjectCard } from './projectCard/ProjectCard'

export const Projects = () => {
  return (
    <div className='project-container'>
      <div className='project-container-content'>
        <h2 className='project-container-title'>Projects</h2>
        <p className='project-container-description'>Here are my latest projects</p>
      </div>

      <div className='project-list'>
          <ProjectCard/>
      </div>
    </div>
  )
}
