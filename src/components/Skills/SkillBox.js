import React from 'react'
import './Skills.css'

const SkillBox = ({data}) => {
    return (
        <div>
            <div className="skill">
                <img src={`images/${data.image}`} alt="" />
                <h6>{data.name}</h6>
            </div>
        </div>
    )
}

export default SkillBox
