import React from 'react'
import './Skills.css'
import { SkillsData } from '../../Data';
import SkillBox from './SkillBox';
import SectionHeading from '../SectionHeading';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <SectionHeading key="SkillsHeading" title="Skills" tagline="What I Know" />
            <div className="container" id="skills-container" data-aos="fade-up-right">
                {SkillsData.map((e, index) => {
                    return (
                        <div key={index} className="row">
                            {e.map(data => {
                                return <SkillBox key={data.name} data={data} />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
