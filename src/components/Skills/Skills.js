import React from 'react'
import './Skills.css'
import { SkillsData } from '../../Data';
import SkillBox from './SkillBox';
import SectionHeading from '../SectionHeading';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <SectionHeading title="Skills" tagline="What I Know" />
            <div class="container" id="skills-container" data-aos="fade-up-right">
                {SkillsData.map(e => {
                    return (
                        <div class="row">
                            {e.map(data => {
                                return <SkillBox data={data} />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
