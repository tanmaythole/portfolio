import React, {useState, useEffect} from 'react';
import {ProjectData} from '../../Data';
import './Projects.css'
import ProjectBox from './ProjectBox';
import SectionHeading from '../SectionHeading';

const Projects = () => {
    
    return (
        <div className="projects" id="projects">
            <SectionHeading title="Projects" tagline="What I Created" />
            <div className="container">
                {ProjectData.map(e => {
                    return <ProjectBox data={e} />
                })}
            </div>
        </div>
    )
}

export default Projects
