import React from 'react'
import './Projects.css'
import ProjectsData from './ProjectsData'

function Projects() {

    return (
        <div className='projects-container'>
            <div className='projects'>
                {ProjectsData.map( project => {
                    return (
                        <div className={project.class}>
                            <img src={project.img} alt={project.alt}/>
                            <h1>{project.name}</h1>
                            <p>Made with:</p>
                            <div className='languages'>
                                {project.react}
                                {project.css}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects