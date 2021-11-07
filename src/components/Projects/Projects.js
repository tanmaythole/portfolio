import React from 'react';
import {ProjectData} from '../../Data';
import './Projects.css'
import ProjectBox from './ProjectBox';
import SectionHeading from '../SectionHeading';

const Projects = () => {
    
    return (
        <div className="projects" id="projects">
            <SectionHeading key="projectHeading" title="Projects" tagline="What I Created" />
            <div className="container">
                {ProjectData.map(e => {
                    return <ProjectBox key={e.id} data={e} />
                })}
            </div>
        </div>
    )
}

export default Projects
